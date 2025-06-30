import { View, Text,  Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import {styles} from '../../style/login_index.style';
import images from '../../constant/images';


export default function LoginScreen() {
  const router = useRouter();

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={images.login} style={styles.image} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Stay on Track, Stay Healthy</Text>

        <Text style={styles.subtitle}>
          Track your meds, Take control of your Health, Stay consistent, stay Confident
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('login/signIn')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Note: By clicking Continue button, you will agree to our Terms and Conditions
        </Text>
      </View>
    </ScrollView>
  );
}

