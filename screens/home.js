import React, { useState,useEffect } from 'react';
import Headertabs from '../componets/Headertabs';
import { StyleSheet, Platform ,StatusBar,SafeAreaView,View,ScrollView } from 'react-native';
import Searchbar from '../componets/Searchbar';
import Categories from '../componets/Categories';
import RestaurantItem, { localRestaurants } from '../componets/RestaurantItem';
import ButomTabs from '../componets/ButomTabs';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import Data from "../Data/restaurant.json"



export default function home({navigation}) {

  const [restaurantdata,setrestaurantdata]=useState(Data.San_Francisco);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");


  const getRestaurantsFromYelp = () => {
    var add_City=city.replace(" ","_");
    // console.log(add_City);// ES 6 main [] provide pass object key as variable
    setrestaurantdata( Data[add_City].filter((business) =>
    business.transactions.includes(activeTab.toLowerCase())  // here we basicaly filtring the data come form yelp and only set delivery data
  ))
   
  };

useEffect(() => {
  getRestaurantsFromYelp()
}, [city,activeTab]) // when city update it work

  
    return (
    <SafeAreaView style={styles.AndroidSafeArea} >
        <View style={{backgroundColor:"white",padding:15}}>
        <Headertabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar setCity={setCity} />
        </View>
        <ScrollView  showsVerticalScrollIndicator={false} >
          
        <Categories />
        <RestaurantItem RestaurantData={restaurantdata} navigation={navigation} />
        </ScrollView>
        <Divider  width={1}/>
        {/* its is used to divide */}
        <ButomTabs />

    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
      backgroundColor:"#eee",
      flex:1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
     
    }
  })


  