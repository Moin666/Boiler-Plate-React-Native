import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
function Login({navigation}) {
  const [userObj, setUserObj] = useState({});

  return (
    <View style={styles.mainDiv}>
      <View style={styles.imgView}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://mui.com/static/images/avatar/3.jpg',
          }}
        />
      </View>
      <View style={styles.center}>
        <Text style={[styles.font, styles.inputColr]}>Login Now</Text>
      </View>
      <View style={[styles.center, {marginTop: 10, fontWeight: 'bold'}]}>
        <Text style={styles.inputColr}>
          Please Enter Below Details To Continue
        </Text>
      </View>
      <View style={styles.btn}>
        <TextInput
          style={styles.inputColr}
          placeholder="Email"
          value={userObj.email}
          onChangeText={e => {
            setUserObj({...userObj, email: e});
          }}
        />
      </View>
      <View style={styles.btn}>
        <TextInput
          style={[styles.inputColr, {width: '100%', height: '100%'}]}
          placeholder="Password"
          secureTextEntry
          value={userObj.password}
          onChangeText={e => {
            setUserObj({...userObj, password: e});
          }}
        />
      </View>
      <View
        style={{
          width: '80%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: 10,
        }}>

        <Text onPress={()=>{navigation.navigate('signup')}}  style={{color: 'red'}}>create account ?</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
                    console.log(userObj)
        }}>
        <View style={styles.btnLogin}>
          <Text style={styles.inputColr}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    height: '100%',
    alignItems: 'center',
    backgroundColor:'white'
  },
  imgView: {
    height: '30%',
    // backgroundColor:"orange",
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor:"orange"
  },
  font: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  btnLogin: {
    height: 60,
    width: 300,
    backgroundColor: 'red',
    marginTop: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputColr: {
    color: 'black',
  },
});

export default Login;
