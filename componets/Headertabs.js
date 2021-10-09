import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Headertabs(props) {
    // var [activetab, setactiveTab] = useState("Delivery");
    return (
        <View style={{flexDirection:'row',alignSelf:"center"}}>
            <HeaderButton activetab={props.activeTab} setactiveTab={props.setActiveTab} text="Delivery" btncolo="black" textcolor="white"/>
            <HeaderButton activetab={props.activeTab} setactiveTab={props.setActiveTab} text="Pickup" btncolo="white" textcolor="black" />

        </View>
    )
}

const HeaderButton=(props)=>
   (

    <TouchableOpacity style={{
    backgroundColor:props.activetab=== props.text ? "black" : "white",
    paddingVertical:6,
    paddingHorizontal:16,
    borderRadius:30,
    
    }}
    onPress={()=>props.setactiveTab(props.text)}
    >
        <Text style={{color: props.activetab=== props.text ? "white" : "black",fontSize:15,fontWeight:"900"}}>
            {props.text}
            
        </Text>
    </TouchableOpacity>

   )
