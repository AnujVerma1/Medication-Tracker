
import React, { useEffect, useState } from 'react';
import { Tabs, useRouter } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { auth } from '../../config/FirebaseConfig';
import { onAuthStateChanged} from 'firebase/auth';
import { RemoveLocalStorage } from '../../service/Storage';

export default function TabLayout() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
      } else {  
        await RemoveLocalStorage(); 
        router.replace('/login'); 
      }
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="History-Navigation"
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="clock-o" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
