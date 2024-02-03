import React from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

export default function Login(props){
    const onPressButtonChris = () => {
        Alert.alert('Hello Christian!');
    };
    return(
        <View style={styles.login}>
            <Text style={styles.text}>This is the Login Screen</Text>
            <Button 
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