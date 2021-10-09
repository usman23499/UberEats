import React from 'react'
import { View, Text ,Image} from 'react-native'

// const image="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
// const description="Thi - Comfort Food - $$  • 🎫 • 4 ⭐ (2913+) "
// const title="Farmhouse Kitchen Thai Cuisine"




export default function About(props) {

    const { name, image, price, reviews, rating, categories } =
    props.route.params;
    // console.log(image);

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
// ye uper wale sare catagorie ko splait and in line kara add . in it
 
const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <ResturantImage  image={image}/>
            <ResturantTitle title={name}/>
            <RestaurantDescription description={description}/>
        </View>
    )
}

const ResturantImage=(props)=>(
    <Image 
    source={{
        uri:props.image,
        
    }}
    style={{width:"100%",height: 180}}
    
    />
)
const ResturantTitle=(props)=>(
    <Text style={{
        fontSize: 29,
        fontWeight:"bold",
        marginTop:10,
        marginHorizontal:15
        
    }}>
        {props.title}
    </Text>
)

const RestaurantDescription=(props)=>
    (
        <Text
        style={{
            marginTop:10,
            marginHorizontal:15,
            fontWeight:"400",
            fontSize: 15.5
        }}
        
        >
            {props.description}
        </Text>
    )
