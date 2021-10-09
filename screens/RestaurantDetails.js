import React from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../componets/ResturantDetails/About'
import MenuItem from '../componets/ResturantDetails/MenuItem'
import ViewCart from '../componets/ResturantDetails/ViewCart'
export default function RestaurantDetails({route,navigation}) {
    const foods = [
        {
          title: "Lasagna",
          description: "With butter lettuce, tomato and sauce bechamel",
          price: "$13.50",
          image:
            "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
        },
        {
          title: "Tandoori Chicken",
          description:
            "Amazing pakistani dish with tenderloin chicken off the sizzles 🔥",
          price: "$19.20",
          image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
        },
        {
          title: "Chilaquiles",
          description:
            "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
          price: "$14.50",
          image:
            "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
        },
        {
          title: "Chicken Caesar Salad",
          description:
            "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
          price: "$21.50",
          image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
        },
        {
          title: "Chicken Caesar Salad",
          description:
            "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
          price: "$21.50",
          image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
        },
        {
          title: "Chicken Caesar Salad",
          description:
            "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
          price: "$21.50",
          image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
        },
        {
          title: "Chicken Caesar Salad",
          description:
            "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
          price: "$21.50",
          image:
            "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
        },
       
    
      ];

    return (
        <View>
            {/* route conatin all information come from returant item */}
            <About  route={route}/>
            <Divider width={1.8} style={{marginVertical:20}} />
            <MenuItem restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} restaurantName={route.params.name}/>
        </View>
    )
}
