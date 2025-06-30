import { View, Text,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import Colors from '../constant/Colors';
import { GetUserDetail2 } from '../utility/dateUtils';
import {styles} from '../style/Header.style';

export default function Header() {
    const [user, setUser] = useState();
    const router = useRouter();

    useEffect(() => {
        GetUserDetail2(setUser);
    }, []);

    

    const getUserName = () => {
        if (user?.displayName) {
            return user.displayName;
        } else if (user?.email) {
            return user.email;
        } else {
            return 'User';
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.greeting}>
                    <Text style={styles.emoji}>👋</Text>
                    <Text style={styles.greetingText}>Hello, {getUserName()}</Text>
                </View>
                <TouchableOpacity onPress={() => router.push('/add-new-medication')}>
                    <Ionicons name="medkit-outline" size={24} color={Colors.PRIMARY} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

