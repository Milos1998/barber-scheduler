import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { messages } from '../../constants/Messages';
import { images } from '../../constants/Images';
import { commonStyling } from '../../constants/Styles';
import ButtonC from '../../components/ButtonC';
import TextInputC from '../../components/TextInputC';

export type LoginOutProps = {};
type Props = NativeStackScreenProps<RootStackParams, "LoginOut">;

function LoginOut(props: Props) {
    //TODO
    return (
        <View style={commonStyling.screen}>
            <TextInputC placeholder={messages.emailPlaceholder}/>
            <ButtonC label={messages.sendVerification} styles={[style.verificationButton]}/>

            <View style={style.loginSeparator}>
                <Text style={[style.lineThrough, style.loginSeparatorText]}>                       </Text>
                <Text style={[style.loginSeparatorText]}>{messages.loginSeparator}</Text>
                <Text style={[style.lineThrough, style.loginSeparatorText]}>                       </Text>
            </View>

            <ButtonC label={messages.loginWithGmail} image={images.gmailLogo} styles={[style.googleButton]}/>
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

export default LoginOut;
