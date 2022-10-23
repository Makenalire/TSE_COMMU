import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const image = require('../../../assets/Background.jpg')

export default function Covid() {
    return (
        <View style={styles.view}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.textHelp}>
                  HELP
                </Text>
                <Text style={styles.textCovid}>
                    COVID-19
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
                    />
                </View>
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
                    />
                </View>
                <View style={styles.textInput}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'cake-variant-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='AGE'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}   
                        style={styles.username}
                    />
                </View>
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
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    textCovid: {
        color: '#8C4C4C', 
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontSize: 14
    },
    textHelp: {
        color: 'black', 
        alignSelf: 'flex-start',
        fontSize: 20,
        marginTop: 40,
        marginLeft: 20
    },
    textInput: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        fontSize: 15,
        color: '#DF2525',
        height: 35,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 12,
        marginTop: 20,
        borderColor: '#DF2525',
        borderWidth: 2,
        borderRadius: 10,
        height: 40
    },
    username: {
        fontSize: 15,
        width:'80%',
        left: -2
    },
    icon: {
        alignSelf: 'center',
        left: 4
    },
})