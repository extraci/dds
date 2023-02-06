import React from 'react';
import { Dimensions } from 'react-native';
import type {Node} from 'react';
import { Component } from 'react'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, 
    Button,
    Text,
    useColorScheme,
    View,
    InputAccessoryView, 
    TouchableOpacity,
    TextInput
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





let width = Dimensions.get('window').width; 
let height = Dimensions.get('window').height; 

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText0: {
        fontSize: 50,
        padding:50,
        color:"black",
        fontWeight: "bold"
    },
    titleText1: {
        fontSize: 20,
        color:"black",
        textAlign:"center",
        display:"flex",
        width:width
    },
    button:{
        alignItems: 'center',
        backgroundColor: '#0377ff',
        padding: 20,
        marginBottom: 10,
        color:"black",
        borderRadius:10
    }
});

// The Initial Component
const Default = ({navigation}) => {

	return (
        <View style={{
                flex:1,
                backgroundColor:"#fff",
                alignItems: "center",
                display: "flex",
                width: width,
                height:height
            }}>
            <Text style={styles.titleText0}>DDS</Text>

            <Text style={styles.titleText1}>Fly to your doorstep , the future of delivery is here.</Text>
            
            <View style={{
                position:"absolute",
                bottom: 80
            }}> 
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={{color:"white"}}>Login</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')} >
                        <Text style={{color:"white"}}>Register</Text>
                    </TouchableOpacity>
                
                <Text style={{paddingTop:50,color:"black"}}>Build By Prakash choudhary</Text>
            </View>
        </View>
	);

}

export default Default;
