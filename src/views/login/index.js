import * as React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setUserDetails, setUserToken} from "../../redux/actions/auth";

export function App({ navigation, ...props }) {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    const _handleSaveProfile = async()=>{
        await props.setUserToken()
        navigation.navigate('Details')
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Email Id"
                    value={text}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="password"
                    keyboardType="numeric"
                />
            </SafeAreaView>
           <Text>Click to Sign IN <Button title={"Login"} onPress={()=>_handleSaveProfile()}/></Text>
        </View>
    );
}

function mapStateToProps(state) {
    return {
        auth: state.Auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserToken: bindActionCreators(setUserToken, dispatch),
    }
};


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
