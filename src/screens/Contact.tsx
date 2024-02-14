import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { Image, Pressable, Text, View } from 'react-native';
import { images } from '../constants/Images';
import { messages } from '../constants/Messages';

export type ContactProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Contact">

function Contact(props: Props) {
    return (
        <View>
            <Pressable>
                <Image source={images.backArrow}/>
            </Pressable>

            <View>
                <View>
                    <Text>{messages.phone}</Text>
                    <Pressable>
                        <Text>{messages.phoneNum}</Text>
                    </Pressable>
                </View>
                <View>
                    <Text>{messages.address}</Text>
                    <Text>{messages.addressValue}</Text>
                </View>
            </View>
        </View>
    );
}

export default Contact;
