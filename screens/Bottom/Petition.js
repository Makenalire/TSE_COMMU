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
                        style={styles.subject}
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
                <TouchableOpacity style={{alignSelf: 'flex-end', marginRight: 10}}
                    onPress={() => navigation.navigate('Problem')} >
                    <Image source={require('../../assets/Sent.png')} style={styles.btnSent} />
                </TouchableOpacity>
                <View style={styles.bottomView}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Room')} >
                    <Image source={require('../../assets/Room.png')} style={styles.btnRoom} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{borderRadius: 10, borderColor: 'black'}}
                    onPress={() => navigation.navigate('Petition')} >
                    <Image source={require('../../assets/Petition.png')} style={styles.btnPetition} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Calendar')} >
                    <Image source={require('../../assets/Calendar.png')} style={styles.btnCalendar} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Notification')} >
                    <Image source={require('../../assets/Notification.png')} style={styles.btnNoti} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Problem')} >
                    <Image source={require('../../assets/Problem.png')} style={styles.btnProblem} />
                    </TouchableOpacity>
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
    textPet: {
        color: 'black', 
        alignSelf: 'flex-start',
        fontSize: 20,
        marginTop: 40,
        marginLeft: 20
    },
    textInput: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 12,
        marginTop: 20,
        borderColor: '#DF2525',
        borderWidth: 2,
        borderRadius: 10,
        height: 40,
        width: '90%'
    },
    subject: {
        fontSize: 15,
        width:'80%',
        left: -2
    },
    icon: {
        alignSelf: 'center',
        left: 4
    },
    dropdown1BtnStyle: {
        width: '90%',
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#DF2525',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 10
    },
    dropdown1BtnTxtStyle: {color: '#C1C1C1', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF', borderRadius: 10},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#B3B3B3'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1SelectedRowStyle: {backgroundColor: '#B3B3B3'},
    dropdown1searchInputStyleStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#444'
    },
    Description: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 12,
        marginTop: 20,
        borderColor: '#DF2525',
        borderWidth: 2,
        borderRadius: 10,
        height: 100,
        width: '90%'
    },
    textInputDescription: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        fontSize: 15,
        color: '#444',
        fontWeight: 'bold',
        width: '90%',
        left: -2,
        top: 5
    },
    iconTopLeft: {
        top: 4,
        left: 4,
        alignSelf: 'flex-start'
    },
    btnSent: {

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
})