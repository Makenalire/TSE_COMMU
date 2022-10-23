import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";

const image = require('../../assets/Background.jpg')
export default function Room() {
    return (
        <View style={styles.view}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>
                    ROOM
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
        justifyContent: 'center',
    },
    text: {
        color: 'black', 
        alignSelf: 'center',
        fontSize: 30
    }
})