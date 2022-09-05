import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from "react-redux";
import {BarCodeScanner} from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';


export function App({navigation, ...props}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getBarCodeScannerPermissions();

    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Text>TOKEN: {props.auth.jwt_token.token}</Text>
            <Camera
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                barCodeScannerSettings={{
                    barCodeTypes: ['qr'],
                }}
                style={{
                    height: '50%',
                    width: '80%',
                }}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}


function mapStateToProps(state) {
    return {
        auth: state.Auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {}
};
export default connect(mapStateToProps, mapDispatchToProps)(App)