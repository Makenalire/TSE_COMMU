import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Error() {
    return (
        <View style={style.text}>
            <Text style={{color: 'white'}}>
                Application Error Please Reload App
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
})