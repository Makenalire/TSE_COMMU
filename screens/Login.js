import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { setJob } from '../redux/action';
// import { auth } from '../firebase';

const metier = ["Student", "Staff", "Store"]
const image = require('../assets/Background.jpg')

const Register = () => {
    const navigation = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { job } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const handlerRegister = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.regForm}>
                <Image source={require('../assets/Gear.png') } style={styles.logo}/>
                <Text style={styles.tse}>TSE <Text style={styles.commu}>COMMU</Text></Text>
                <Text style={styles.thammasat}>THAMMASAT UNIVERSITY</Text>
                <View style={styles.status} >
                    <SelectDropdown
                    data={metier}
                    onSelect={(selectedItem, index) => {
                        // console.log(selectedItem, index);
                        dispatch(setJob(selectedItem))
                    }}
                    defaultButtonText={'Select job'}
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
                    />
                </View>
                <View style={styles.password}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'account-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='username'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}   
                        style={styles.textInput}
                        //เก็บค่าที่รับ
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.password}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'lock-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='password'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10} 
                        style={styles.textInput}  
                        secureTextEntry={isSecureEntry}
                        //เก็บค่าที่รับ
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity
                        style={styles.btnEye}
                        onPress={() => {
                            setIsSecureEntry(!isSecureEntry)
                        }}
                    >
                        <MaterialCommunityIcons 
                            name={isSecureEntry === false ? 'eye-outline' : 'eye-off-outline'}
                            size={20}
                            color='lightgrey'
                        />
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity
                        style={styles.btnForgot}
                        onPress = {() => navigation.navigate('Register', {}) }
                    >
                        <Text style={{color: "white", fontSize: 10}}>FORGOT PASSWORD?</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress = {() => navigation.navigate(job, {}) } style={styles.button}>
                    <Text style={styles.buttonLogin}>
                        SIGN IN
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('Register', {}) }>
                    <Text style={styles.btnRegister}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    regForm: {
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        alignSelf: 'stretch',
        fontSize: 15,
        // color: '#FFBD59',
        fontWeight: 'bold',
        width:'80%',
        left: -2
    },
    logo: {
        width: 170,
        height: 128
    },
    button:{
        padding: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        backgroundColor: '#FFBD59',
        borderRadius: 10
    },
    buttonLogin: {
        fontSize: 15,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    btnRegister: {
        fontSize: 15,
        color: '#7B7B7B',
        marginTop: 10,
        fontWeight: 'bold',
    },
    password: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        fontSize: 15,
        color: '#DF2525',
        height: 35,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 12,
        borderColor: '#DF2525',
        borderWidth: 2,
        borderRadius: 10,
    },
    btnEye: {
        top: 5,
        left: 0
    },
    icon: {
        top: 5,
        left: 4,
    },
    tse: {
        alignItems: 'center',
        color: '#DF2525',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    commu: {
        alignItems: 'center',
        marginBottom: -150,
        color: 'orange',
        fontSize: 32,
        fontWeight: 'bold',
    },
    thammasat: {
        alignItems: 'center',
        color: '#DF2525',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: -15
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    dropdown1BtnStyle: {
        width: '100%',
        height: 35,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#DF2525',
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
        borderBottomColor: '#444',
    },
    status: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        fontSize: 15,
        height: 35,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 12,
    },
})

export default Register