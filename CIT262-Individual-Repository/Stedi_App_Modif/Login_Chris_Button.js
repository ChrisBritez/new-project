//Hi team, if someone already created this file, you just need to copy and paste the const onPressButtonChris with the alert and the respective button
//to your Login.js

import React from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

export default function Login(props){
    const onPressButtonChris = () => {        //this function 
        Alert.alert('Hello Christian!');
    };
    return(
        <View style={styles.login}>
            <Text style={styles.text}>This is the Login Screen</Text>
            <Button                                                       //this button
                  title="Chris's" onPress={onPressButtonChris}>
            </Button>
        </View>

    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})