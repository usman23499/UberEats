import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {Ionicons,AntDesign} from "react-native-vector-icons"
export default function Searchbar({setCity}) {
    const homePlace = { description: 'Hollywood'};
const workPlace = { description: 'New York' };
const San_Francisco = { description: 'San Francisco' };
    return (
        <View style={{marginTop:15, flexDirection:"row"}}>
            <GooglePlacesAutocomplete 
            predefinedPlaces={[homePlace, workPlace,San_Francisco]}
           
        onPress={(data)=>{
             setCity(data.description)
        }}
            placeholder="Search"
            styles={{
              textInput:{
                backgroundColor:"#eee",
                borderRadius:20,
                fontWeight:"700",
                marginTop:7
              },
              textInputContainer:{
                  backgroundColor:"#eee",
                  borderRadius: 50,
                  flexDirection:"row",
                  alignItems:"center",
                  marginRight:10
              }
            }}
            
            renderLeftButton={()=>(
                <View style={{marginLeft:10}}>
                    <Ionicons name="location-sharp" size={24} />
                </View>
            )}
            renderRightButton={()=>(
                <View style={{

                   flexDirection:"row",
                   marginRight:8,
                   backgroundColor:"white",
                   padding:9,
                   borderRadius:30,
                   alignItems:"center"
                }}>
                    <AntDesign name="clockcircle" size={11}
                    
                    style={{marginRight:6}}
                    />
                    <Text>Search</Text>    
                </View>
            )}
            />
        </View>
    )
}

