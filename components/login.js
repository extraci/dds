import { Dimensions } from 'react-native';

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
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import React from "react";
import {useState} from "react";

import { Buffer } from "@craftzdog/react-native-buffer";
import SInfo from "react-native-sensitive-info";

// #################################################################
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#aaC0CB",
    borderRadius: 30,
    width: "90%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
    color:"white",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width:"100%",
    textAlign:"center"
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"black"
  },
  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#1475ff",
    color:"white"
  },
});
// ##########################################################################
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;


export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let status_ok = false;
	return (
	   <View style={styles.container}>
            <StatusBar style="auto"  />

            <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="Email" placeholderTextColor="#003f5c" onChangeText={(email) => setEmail(email)}/>
            </View>

            <View style={styles.inputView}>
                <TextInput style={styles.TextInput} placeholder="Password" placeholderTextColor="#003f5c" secureTextEntry={true} onChangeText={(password) => setPassword(password)}/>
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.loginBtn} onPress={async function(){


                if (email && password){
                    console.log(email,password);
                    fetch('http://192.168.1.36:8000/api/login',{
                            method:"POST",
                            headers: {
                                'Accept':'application/json',
                                'Content-Type':'application/json'
                            },
                            body: JSON.stringify({email:email,password:password})
                        }
                    ).then((response)=>{
                        console.log(response);
                        if (response.status == "200"){ status_ok = true; }

                        return response.json()

                    }).then((data)=> {
                        console.log(data.success.token)
                        if (status_ok){
                            Alert.alert('Logged in Successfully','', [
                                {
                                    text: '',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                {text: 'OK', onPress: () => console.log('OK Pressed')},
                            ]);
                            navigation.navigate('Dashboard',{token:data.success.token,name:data.success.name})
                        }
                    });

                }
            }}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
	);        

}
