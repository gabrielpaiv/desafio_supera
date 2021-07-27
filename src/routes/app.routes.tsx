import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Checkout } from '../screens/Checkout';
import { Cart } from '../screens/Cart';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;