import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { messages } from '../constants/Messages';
import { images } from '../constants/Images';
import { commonStyling } from '../constants/Styles';

export type LoginProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Login">;

function Login(props: Props) {
    return (
        <View style={commonStyling.screen}>
            <TextInput style={commonStyling.input} placeholder={messages.emailPlaceholder}/>
            <Pressable style={[commonStyling.button, style.verificationButton]}>
                <Text style={[commonStyling.text]}>{messages.sendVerification}</Text>
            </Pressable>

            <View style={style.loginSeparator}>
                <Text style={[style.lineThrough, style.loginSeparatorText]}>                       </Text>
                <Text style={[style.loginSeparatorText]}>{messages.loginSeparator}</Text>
                <Text style={[style.lineThrough, style.loginSeparatorText]}>                       </Text>
            </View>

            <Pressable style={[commonStyling.button, style.googleButton]}>
                <Text style={[commonStyling.text]}>{messages.loginWithGmail}</Text>
                <Image source={images.gmailLogo}></Image>
            </Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    googleButton: {
        backgroundColor: "tomato",
    },
    verificationButton: {
        backgroundColor: "cornflowerblue",
        margin: 30,
    },
    loginSeparator: {
        flex: -1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        margin: 50,
    },
    lineThrough: {
        textDecorationLine: "line-through"
    },
    loginSeparatorText: {
        color: "dimgray",
        fontSize: 17,
    }
});

export default Login;
