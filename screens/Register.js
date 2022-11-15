import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../Config';
import { getFirestore, doc, setDoc } from '@firebase/firestore';
import { setUid } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';

const image = require('../assets/Background.jpg')
const metier = ["Student", "Staff", "Store"]

const Register = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isSecureEntry, setIsSecureEntry] = useState(true)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [status, setStatus] = useState('')

    const app = initializeApp(firebaseConfig, "Auth");
    const auth = getAuth(app);
    const firestore = getFirestore(app);

    const saveData = async(uid) => {
        await setDoc(doc(firestore, status, uid), {
            email: email.toLowerCase(),
            password: password.toLowerCase(),
            username: username.toLowerCase(),
            phonenumber: phonenumber.toLowerCase()
        })
        navigation.navigate(status)
    }

    const handlerRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
            dispatch(setUid(user.uid))
            const uid = user.uid
            saveData(uid)
        })
        .catch(error => {if (error.message == 'Firebase: Error (auth/invalid-email).') {
            alert("Please resign email!")
        } else if(error.message == 'Firebase: Error (auth/internal-error).') {
            alert("Please resign password!")
        } else if(error.message == 'Firebase: Error (auth/email-already-in-use).') {
            alert("Email is already use!")
        } else if(error.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            alert("Password should be at least 6 characters")
        } else {
            console.log(error.message)
        }
        })
        // if(validEmail == false) {
        //     alert("Please resign email!")
        // }
    }

    // const validate = (text) => {
    //     console.log(text);
    //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    //     if (reg.test(text) === false) {
    //       console.log("Email is Not Correct");
    //       setEmail(text)
    //       setValidEmail(false);
    //     }
    //     else {
    //       setEmail(text)
    //       setValidEmail(true);
    //       console.log("Email is Correct");
    //     }
    //   }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.regForm}>
                <Image source={require('../assets/Gear.png') } style={styles.logo}/>
                <Text style={styles.tse}>TSE <Text style={styles.commu}>COMMU</Text></Text>
                <Text style={styles.thammasat}>THAMMASAT UNIVERSITY</Text>
                {/* <View style={styles.password}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'account-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='Username'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}   
                        style={styles.textInput}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                </View> */}
                <View style={styles.password}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'email-outline'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='E-mail'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10}  
                        style={styles.textInput} 
                        keyboardType='email-address'
                        //เก็บค่าที่รับ
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.password}>
                    <MaterialCommunityIcons 
                        style={styles.icon}
                        name={'cellphone-basic'}
                        // name={'cellphone'}
                        size={20}
                        color='lightgrey'
                    />
                    <TextInput 
                        placeholder='Phone Number'
                        placeholderTextColor={'lightgrey'}
                        paddingLeft={10} 
                        style={styles.textInput}  
                        //เก็บค่าที่รับ
                        value={phonenumber}
                        onChangeText={text => setPhonenumber(text)}
                        dataDetectorTypes={'phoneNumber'}
                        autoComplete={'tel-device'}
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
                        placeholder='Password'
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
                <View style={styles.status} >
                    <SelectDropdown
                    data={metier}
                    onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    setStatus(selectedItem)
                    }}
                    defaultButtonText={'Select Status'}
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
                <TouchableOpacity onPress = {() => handlerRegister() } style={styles.button}>
                    <Text style={styles.btnRegister}>
                        SIGN UP
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('Login', {}) }>
                    <Text style={styles.btnLogin}>
                        Have account? Log In
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
        marginTop: 5,
        backgroundColor: '#FFBD59',
        borderRadius: 10
    },
    btnRegister: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'AbhayaLibre-Bold',
    },
    btnLogin: {
        fontSize: 18,
        color: '#7B7B7B',
        marginTop: 10,
        fontFamily: 'AbhayaLibre-Bold',
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
    status: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        fontSize: 15,
        height: 35,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 12,
    },
    btnEye: {
        top: 5,
        left: 0
    },
    icon: {
        top: 5,
        left: 4
    },
    tse: {
        alignItems: 'center',
        color: '#DF2525',
        fontSize: 35,
        fontFamily: 'AbhayaLibre-Bold',
        marginBottom: 10,
    },
    commu: {
        alignItems: 'center',
        marginBottom: -150,
        color: 'orange',
        fontSize: 35,
        fontFamily: 'AbhayaLibre-Bold',
    },
    thammasat: {
        alignItems: 'center',
        color: '#DF2525',
        fontSize: 17,
        fontFamily: 'AbhayaLibre-Bold',
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
})

export default Register