import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import ListScreen from '../pages/ListScreen';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator screenOptions = {{
            headerShown: false
        }}>
            <MainStack.Screen name="HOME" component={HomeScreen} options={{
            
                headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: " rgb(125, 32, 199)",
                        
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 23,
                        color: "#fff"
                    }
                }}/>
            <MainStack.Screen name="LIST" component={ListScreen} options={{
                title: "Usuários Cadastrados",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "rgb(125, 32, 199)"
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 23,
                    color: "#fff"
                }
            }}/>
        </MainStack.Navigator>
    );
};