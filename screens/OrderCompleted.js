import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView,StyleSheet,StatusBar } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../componets/ResturantDetails/MenuItem";


export default function OrderCompleted() {

    const [lastOrder, setLastOrder] = useState({ // by defult orders
        items: [
          {
            title: "Bologna",
            description: "With butter lettuce, tomato and sauce bechamel",
            price: "$13.50",
            image:
              "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
          },
        ],
      });


    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selecteditems
      );
    
      const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);
    
      const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      });

      useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db
          .collection("orders") // show in desending order
          .orderBy("createdAt", "desc")
          .limit(1)
          .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
              setLastOrder(doc.data());
            });
          });
    
        return () => unsubscribe(); // is used to unsbascribe connection and used ease he hoga
      }, []);
     
    return (
        <SafeAreaView  style={styles.AndroidSafeArea} >
      {/* green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 130, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold",textAlign:"center" }}>
          Your order at {restaurantName} has been placed for ${totalUSD}
        </Text>
        <ScrollView>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <LottieView
            style={{ height: 200, alignSelf: "center",marginTop:-120 }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor:"white",
    flex:1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
   
  }
})

