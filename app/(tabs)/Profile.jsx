
import { View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import {  RemoveLocalStorage } from '../../service/Storage';
import { auth } from '../../config/FirebaseConfig';
import { signOut } from 'firebase/auth';
import { GetUserDetail1, showMessage } from '../../utility/utilityFunctions';
import {styles} from '../../style/Profile.style';
import images from '../../constant/images';



export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter(); 

  useEffect(() => {
    GetUserDetail1(setUser);
  }, []);


  const handleLogout = async () => {
    try {
      await signOut(auth); 
      await RemoveLocalStorage(); 
      router.replace('/login');
    } catch (error) {
      showMessage('Logout Failed'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.userInfoContainer}>
        <Image style={styles.userImage} source={images.user} />
        <Text style={styles.userName}>Hello, {user?.displayName || 'User'}</Text>
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

