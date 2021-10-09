import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// this is for practice how to add yelp api
export const localRestaurants = [
    {
      name: "Beachside hotel",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "hotel"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "hotel"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "Pakistan's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Pakistan", "hotel"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];
  

export default function RestaurantItem({navigation,RestaurantData}) {
    return (
        <> 
       
        {/* activeopactity is for remove opacity of touch  */}
        {
            RestaurantData.map((item,index)=>(
                <TouchableOpacity key={index} activeOpacity={1} style={{marginBottom:30}}
                onPress={()=>navigation.navigate("RestaurantDetail",{

                    name:item.name,
                    image:item.image_url,
                    price:item.price,
                    reviews:item.review_count,
                    rating:item.rating,
                    categories:item.categories,

                })} // name of component and pass data or props
                
                >
                <View
                        
                        style={{
                            marginTop:10,
                            padding:15,
                            backgroundColor:"white"
                     }}
        >
            <RestaurentImage image={item.image_url}/>
            <RestaurantInfo name={item.name} rating={item.rating} />
        </View>
        </TouchableOpacity>

            ))
        }
        </>
    )
}

const RestaurentImage=(props)=>(
    <>
    <Image 
    source={{
        uri:props.image,
        
    }}
    style={{width:"100%",height: 180}}
    
    />
    <TouchableOpacity 
    style={{
        position:"absolute",
        right:20,
        top:20
    }}
    
    >
    <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />

    </TouchableOpacity>
    
    </>
)


const RestaurantInfo=(props)=>(
    <View
    style={
        {
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop:10

        }
    }
    
    
    >
        <View
        
        
        >
        <Text
        style={{
            fontSize:15,
            fontWeight:'bold'
        }}
        >{props.name}</Text>
        <Text
        style={{
            fontSize:13, color:"gray"
        }}
        >30-45 - min </Text>
        </View>

        <View 
        style={{
            backgroundColor:"#eee",
            height:30,
            width:30,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:15,
        }}
        >
        <Text>{props.rating}</Text>

        </View>
        
    </View>
)