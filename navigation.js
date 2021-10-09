import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";

import RestaurantDetails from './screens/RestaurantDetails';
import Home from './screens/home'
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';
import OrderCompleted from './screens/OrderCompleted';

const store=configureStore();

export default function navigation() {
    const Stack= createStackNavigator();

    const screenOption={
        headerShown:false
    };// to remove header use swip
    return(
        <ReduxProvider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOption}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetails}/>
                <Stack.Screen name='OrderCompleted' component={OrderCompleted}/>

                </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
    )
}
