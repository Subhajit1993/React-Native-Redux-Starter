import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function App({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>Please Login to continue <Button title={"Login"} onPress={() => navigation.navigate('Login')}/></Text>
        </View>
    );
}