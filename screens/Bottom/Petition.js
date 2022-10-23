import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const image = require('../../assets/Background.jpg')
const metier = ["student", "staff", "canteen"]

export default function Petition() {
    const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.textPet}>
                    Petition
                </Text>
                <View style={styles.textInput}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'account-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='subject'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}   
                        style={styles.username}
                    />
                </View>
                <SelectDropdown
                    data={metier}
                    onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    }}
                    defaultButtonText={'Select Term'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                    return item;
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#C1C1C1'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                    selectedRowStyle={styles.dropdown1SelectedRowStyle}
                    search
                    searchInputStyle={styles.dropdown1searchInputStyleStyle}
                    searchPlaceHolder={'Search here'}
                    searchPlaceHolderColor={'darkgrey'}
                    renderSearchInputLeftIcon={() => {
                    return <FontAwesome name={'search'} color={'#C1C1C1'} size={18} />;
                    }}
                />
                <SelectDropdown
                    data={metier}
                    onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    }}
                    defaultButtonText={'Select Course Code'}
                    buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                    return item;
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#C1C1C1'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}
                    selectedRowStyle={styles.dropdown1SelectedRowStyle}
                    search
                    searchInputStyle={styles.dropdown1searchInputStyleStyle}
                    searchPlaceHolder={'Search here'}
                    searchPlaceHolderColor={'darkgrey'}
                    renderSearchInputLeftIcon={() => {
                    return <FontAwesome name={'search'} color={'#C1C1C1'} size={18} />;
                    }}
                />
                <View style={styles.Description}>
                    <MaterialCommunityIcons 
                        style={styles.iconTopLeft}
                        name={'comment-text-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='description'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}   
                        style={styles.textInputDescription}
                    />
                </View>
                <TouchableOpacity style={{alignSelf: 'center'}}
                    onPress={() => navigation.navigate('Problem')} >
                    <Image source={require('../../assets/Sent.png')} style={styles.btnSent} />
                </TouchableOpacity>
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
    textPet: {
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
    dropdown1BtnStyle: {
        width: '72%',
        height: 35,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#DF2525',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 10
    },
    dropdown1BtnTxtStyle: {color: '#C1C1C1', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#B3B3B3'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1SelectedRowStyle: {backgroundColor: '#B3B3B3'},
    dropdown1searchInputStyleStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    Description: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        fontSize: 15,
        height: 120,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 12,
        borderRadius: 10,
        backgroundColor: '#444',
        marginTop: 20
    },
    textInputDescription: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        width: '90%',
        left: -2,
    },
    iconTopLeft: {
        top: 4,
        left: 4,
        alignSelf: 'flex-start'
    },
    btnSent: {
        marginTop: 10
    }
})