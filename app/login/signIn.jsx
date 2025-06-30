
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/FirebaseConfig';
import { setLocalStorage } from '../../service/Storage';
import {styles} from '../../style/SignIn.style';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const OnSignInClick = () => {
    if (!email || !password) {
      Alert.alert('Please enter email & password');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const userDetails = {
          email: user.email,
          displayName: user.displayName || '',
          uid: user.uid,
        };

        await setLocalStorage('userDetail', userDetails);
        router.replace('(tabs)');
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Error', 'Invalid password. Please try again.');
        } else if (error.code === 'auth/user-not-found') {
          Alert.alert('Error', 'No user found with this email. Please check your email.');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'Invalid email format. Please enter a valid email.');
        } else {
          Alert.alert('Error', 'Something went wrong. Please try again later.');
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Let's Sign You In</Text>
      <Text style={styles.subText}>Welcome Back</Text>
      <Text style={styles.subText}>You've been missed</Text>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={OnSignInClick}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCreate} onPress={() => router.push('login/signUp')}>
        <Text style={styles.buttonCreateText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}









