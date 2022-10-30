import React from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = require('../../assets/Background.jpg')
export default function Room() {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.textRoom}>
                    EXPLORE SPACE
                </Text>
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
    text: {
        color: 'black', 
        alignSelf: 'center',
        fontSize: 30
    },
    bottomView: {
        flex: 1,
        width: '100%',
        height: 43,
        backgroundColor: '#FFBD59',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    btnRoom: {
    height: 26.04,
    width: 25,
    alignSelf: 'center',
    top: 7

    },
    btnPetition: {
    height: 26.48,
    width: 24,
    alignSelf: 'center',
    top: 7
    },
    btnCalendar: {
    height: 54,
    width: 54,
    alignSelf: 'center',
    bottom: 20
    },
    btnNoti: {
    height: 26,
    width: 24,
    alignSelf: 'center',
    top: 7
    },
    btnProblem: {
    height: 25,
    width: 28,
    alignSelf: 'center',
    top: 7
    },
    textRoom: {
        alignSelf: 'flex-start',
        marginTop: 40,
        marginLeft: 20,
        fontSize: 20,
    }
})