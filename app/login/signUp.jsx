
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { auth } from '../../config/FirebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setLocalStorage } from '../../service/Storage';
import {styles} from '../../style/SignUp.style';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const OnCreateAccount = async () => {
    if (!email || !password || !userName) {
      ToastAndroid.show('Please fill all details', ToastAndroid.BOTTOM);
      Alert.alert('Missing Information', 'Please enter your full name, email, and password.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: userName });

      const userDetails = {
        email: user.email,
        displayName: userName,
        uid: user.uid,
      };
      await setLocalStorage('userDetail', userDetails);

      ToastAndroid.show('Account Created Successfully!', ToastAndroid.BOTTOM);
      router.push('(tabs)');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        ToastAndroid.show('Email already exists', ToastAndroid.BOTTOM);
        Alert.alert('Signup Failed', 'This email is already in use.');
      } else {
        Alert.alert('Signup Failed', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Create New Account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput 
          placeholder="Enter Full Name" 
          style={styles.textInput} 
          onChangeText={(value) => setUserName(value)} 
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          placeholder="Enter Email" 
          style={styles.textInput} 
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(value) => setEmail(value)} 
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput 
          placeholder="Enter Password" 
          secureTextEntry={true} 
          style={styles.textInput} 
          onChangeText={(value) => setPassword(value)} 
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={OnCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCreate} onPress={() => router.push('login/signIn')}>
        <Text style={styles.buttonTextAlt}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}


