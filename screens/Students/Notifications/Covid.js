import React, { useState } from "react";
import { ImageBackground, View, Text, StyleSheet, Image,Button, ScrollView} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import {addDoc,collection} from 'firebase/firestore'
import { db } from "../../../services/firebaseCovid";
import * as ImagePicker from 'expo-image-picker'
const image = require('../../../assets/Background.jpg')

export default function Covid() {
    const [textName,setTextName] = useState('');
    const [textID,setTextID] = useState('');
    const [textContactNum,setTextContactNum] = useState('');
    const [textAddr,setTextAddr] = useState('');
    
    const [image,setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes : ImagePicker.MediaTypeOptions.Images,
            allowsEditing : true
        })
        if(!result.cancelled){
            setImage(result.uri)
        }
    }
    function handlerSubmit() {
        if (textName === '') {
            return
        }
        const CovidInfo = collection(db, 'covid')
        addDoc(CovidInfo,{Name:textName,Address:textAddr,StudentID:textID,Tel:textContactNum}).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.message)
        })  
    alert("Complete!")      
    }


    return (
        <ScrollView style={styles.view}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.textHelp}>
                  HELP
                </Text>
                <Text style={styles.textCovid}>
                    COVID-19
                </Text>
                <Text style={styles.textCovid}>
                    
                </Text>
                <Text style={styles.textHead}>
                    Name
                </Text>
                <View style={styles.textInput}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'account-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='name'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}   
                        style={styles.username}
                        onChangeText={(textName) => setTextName(textName)}
                        value={textName}
                    />
                </View>
                <Text style={styles.textHead}>
                    STUDENT ID
                </Text>
                <View style={styles.textInput}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'card-account-details-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='student ID'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}   
                        style={styles.username}
                        onChangeText={(textID) => setTextID(textID)}
                        value={textID}
                    />
                </View>
                <Text style={styles.textHead}>
                    Contact Number
                </Text>
                <View style={styles.textInput}>
                    <MaterialCommunityIcons 
                        
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='Number'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}   
                        style={styles.username}
                        onChangeText={(textContactNum) => setTextContactNum(textContactNum)}
                        value={textContactNum}
                    />
                </View>
                <Text style={styles.textHead}>
                    ADDRESS
                </Text>
                <View style={styles.textInput}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'map-marker-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='ADDRESS'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}   
                        style={styles.username}
                        onChangeText={(textAddr) => setTextAddr(textAddr)}
                        value={textAddr}
                    />
                </View>
                <Text style={styles.textHead}>
                    TEST RESULT
                </Text>
                <Text style={styles.textCovid}>
                    
                </Text>
                <View style={styles.underLeft}>
                    <Button 
                        color='#14AAF5'
                        title="Select IMAGE"
                        onPress={pickImage}
                    />
                    {Image && <Image source ={{uri:image}} style={{width: 100,height:100,left:10,top:20}}/>}

                   
                </View>
                <View style={styles.underRight}>
                    <Button  onPress={() => handlerSubmit()}
                        color='#7ECC49'
                        title="SUBMIT"
                    />
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
// alert(textName+textID+textContactNum+textAddr)
const styles = StyleSheet.create({
    view: {
        flex: 1,
        top:0,
    },
    image: {
        flex: 1,
    },
    textCovid: {
        color: '#8b0000', 
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontSize: 14,
        fontFamily: 'AbhayaLibre-Medium'
    },
    textHelp: {
        color: 'black', 
        alignSelf: 'flex-start',
        fontSize: 20,
        marginTop: 40,
        marginLeft: 20,
        fontFamily: 'AbhayaLibre-Medium'
    },
    textInput: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 12,
        marginTop: 20,
        borderColor: '#a9a9a9',
        borderWidth: 2,
        borderRadius: 10,
        height: 45,
        width: '90%'
    },
    username: {
        fontSize: 15,
        width:'80%',
        left: -2,
    },
    icon: {
        alignSelf: 'center',
        left: 4
    },
    textHead: {
        color: '#000000', 
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontSize: 16,
        fontFamily: 'AbhayaLibre-Medium'
    },
    underLeft: {
        width: 118,
        height: 40,
        marginLeft: 20,      
    },
    underRight: {
        width: 100,
        height: 50,
        top: 10,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginBottom: 30
    }, 
})