import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from "./pages/Categories/Categories";
import Meals from "./pages/Meals/Meals";
import Details from "./pages/Details/Details";

const Stack = createNativeStackNavigator();

const Router=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={Categories} options={{
                    headerTitleStyle: {color: '#FFC6AC',fontSize: 25},
                    headerStyle: {backgroundColor: '#FFF6DC'}

                }} />
                <Stack.Screen name="Meals" component={Meals}
                options={{
                    headerTitleStyle: {color: '#FFC6AC',fontSize: 25},
                    headerStyle: {backgroundColor: '#FFF6DC'},
                    headerTintColor: '#FFC6AC'

                }} />
                <Stack.Screen name="Details" component={Details}
                options={{
                    headerTitleStyle: {color: '#FFC6AC',fontSize: 25},
                    headerStyle: {backgroundColor: '#FFF6DC'},
                    headerTintColor: '#FFC6AC'


                }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Router;