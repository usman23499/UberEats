import React from 'react'
import { View, Text,Image, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch,useSelector } from 'react-redux';

  
  const style = StyleSheet.create({
        menuitems: {
            flexDirection:'row',
            justifyContent:"space-between",
            margin:20
        },
        titlestyle:{
            fontSize:19,
            fontWeight:"bold"
        }
  })

export default function MenuItem(
  {restaurantName,
  foods,
  hideCheckbox,
  marginLeft,

}) {
  const dispatch=useDispatch();
  const selectItems=(items,checkboxValue)=>dispatch({
    type:"ADD_TO_CART",
    payload:{...items,
    restaurantName:restaurantName, 
    checkboxValue:checkboxValue 
    // this  take bad main aae tu check rahe data in cart
    // is mian boolean true or false
  // cart item data come form states
  }
  })

  const cartItems =useSelector((state)=>state.cartReducer.selecteditems.items);

   const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title ));
      // ye check ye if jo items show wo phel se in cart tu check and other wise unceck it
      // masla ye aarah tha jab hum back katet the tu items unselect hojate the
    return (
        <View style={{marginBottom:250}}>          
        <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food,index)=>(
            <View key={index}  >
            <View style={style.menuitems}>
            {hideCheckbox ? (
              <></>
            ) : (
            <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}

                onPress={(checkboxValue)=>selectItems(food,checkboxValue)}
                
              
              
              />
            )}
                <FoodInfo food={food} />
                <Foodimage food={food}  marginLeft={marginLeft ? marginLeft : 0}  />
            </View>
            

            <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
            </View>

        ))}
        </ScrollView>
        </View>

    )
}

const FoodInfo=(props)=>(
    <View style={{maxWidth:200,justifyContent:"space-evenly"}}>
        <Text style={style.titlestyle}>
                {props.food.title}
        </Text>
        <Text>
                {props.food.description}
        </Text>
        <Text>
                {props.food.price}
        </Text>
    </View>

)
const Foodimage=(props)=>(
    <View>
        <Image 
        source={{uri:props.food.image}}
        style={{width:90,height:90, borderRadius:8,marginLeft: props.marginLeft, }}
        />
    </View>
)