/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Dimensions } from 'react-native';
// import type {Node} from 'react';
// import { Router, Scene } from 'react-native-router-flux'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, 
    Button,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Default from './components/default.js';
import Login from './components/login.js';
import Register from './components/register.js';
import Dashboard from './components/dashboard.js';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();




const AuthContext = React.createContext();

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const App =  () => {
    
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Default}
                        options={{title: 'Welcome'}}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{title: 'Log In'}}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{title: 'Register'}}
                    />
                    <Stack.Screen
                        name="Dashboard"
                        component={Dashboard}
                        options={{title: 'Dashboard',headerBackVisible:false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );

};

export default App;
