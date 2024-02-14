import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { messages } from '../constants/Messages';
import { images } from '../constants/Images';

export type LoginProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Login">;

function Login(props: Props) {
    return (
        <View>
            <TextInput placeholder={messages.emailPlaceholder}/>
            <Pressable>
                <Text>{messages.sendVerification}</Text>
            </Pressable>

            <View>
                <Text>       </Text>
                <Text>{messages.loginSeparator}</Text>
                <Text>       </Text>
            </View>

            <Pressable>
                <Text>{messages.loginWithGmail}</Text>
                <Image source={images.gmailLogo}></Image>
            </Pressable>
        </View>
    );
}

export default Login;
