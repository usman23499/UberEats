import React, { useState } from 'react'
import { View, Text,TouchableOpacity,Modal,StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import OrderItem from './OderItems';
import firebase from "../../firebase";
import AnimatedLottieView from 'lottie-react-native';

export default function ViewCart({navigation}) {

    const [modal,setmodal]=useState(false);
    const [loading,setloading]=useState(false);


    const {items,restaurantName}= useSelector((state)=>state.cartReducer.selecteditems);
    const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);


    // sab se phale hum ne har otem ka price nekala
    //  "$ 13.5" phir premove $
    // '13.5' phir conver into number
    //[13.5 , 16.7] ye sab ek arr main aae gae
    // reduce is use to calculate the array value
    // and ecumalator 0 mean 0 se shuru ho
    
    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
      }); // this is convert or add $ sign 
    
    console.log(totalUSD);
   

    // write firebase code
const addOrderTofirebase=()=>{
  setloading(true);

    const db=firebase.firestore();
    db.collection("orders").add({
        items:items,
        restaurantName:restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        
    })
    .then(() => {
      setTimeout(() => {
        setloading(false);
        navigation.navigate("OrderCompleted"); // this is fake stop for loaking aanimation
      }, 2000);
    });
}
   
   
    const styles = StyleSheet.create({
       
        modalContainer: {
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.7)",
          paddingTop:0,
        
        },
    
        modalCheckoutContainer: {
          backgroundColor: "white",
          padding: 16,
          height: 500,
          borderWidth: 1,
        },
    
        restaurantName: {
          textAlign: "center",
          fontWeight: "600",
          fontSize: 18,
          marginBottom: 10,
        },
    
        subtotalContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        },
    
        subtotalText: {
          textAlign: "left",
          fontWeight: "600",
          fontSize: 15,
          marginBottom: 10,
        },
      });
    
   
   
      
      
      
      
      
      
      const checkModalContext=()=>{
    return(
        <>
        <View style={styles.modalContainer}>
            <View style={styles.modalCheckoutContainer}>
                <Text style={styles.restaurantName}>
                    {restaurantName}
                </Text>
                {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                    addOrderTofirebase();
                  setmodal(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  ${total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
            </View>
        </View>
        
        </>
      )};


    return (
        
        <> 
        <Modal 
       style={{margin: 0}}
        animationType='slide'
        visible={modal}
        transparent={true}
        onRequestClose={()=>setmodal(false)}
        
        >        
        {checkModalContext()}
        </Modal>

        {total ? (
        <View
        
        style={{
            flex:1,
            alignItems:"center",
            flexDirection:"row",
            position: "absolute",
            marginTop:620,
            zIndex:999,
            justifyContent:"center" 
        }}
        
        >
            <View 
            style={{
                flexDirection:'row',
                justifyContent:"center",
                width:"100%",

            }}>

                <TouchableOpacity
                
                style={{
                    marginTop:20,
                    backgroundColor:"black",
                    flexDirection:"row",
                    justifyContent:"flex-end",
                    padding:15,
                    borderRadius:30,
                    width:300,
                    position:"relative",
                }}
                onPress={()=>setmodal(true)}
                >

                            <Text
                            style={{
                                color:"white",
                                fontSize:20
                            }}
                            >
                                View Cart
                            </Text>

                            <Text
                            style={{
                                color:"white",
                                fontSize:20,
                                marginLeft:50
                            }}
                            >
                                ${totalUSD}
                            </Text>

                </TouchableOpacity>

            </View>
        </View>
        ):(<></> )}
        {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <AnimatedLottieView
            style={{ height: 200,marginTop: -150 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
            
          />
        </View>
      ) : (
        <></>
      )}
        </>          
    )
}
