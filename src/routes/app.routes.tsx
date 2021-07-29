import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Checkout } from '../screens/Checkout';
import { Cart } from '../screens/Cart';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                headerMode="none"
            >
                <Screen
                    name="Home"
                    component={Home}
                />
                <Screen
                    name="Details"
                    component={Details}
                />
                <Screen
                    name="Cart"
                    component={Cart}
                />
                <Screen
                    name="Checkout"
                    component={Checkout}
                />
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes;