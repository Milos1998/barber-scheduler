import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { RootStackParams } from '../../../App';
import { messages } from '../../constants/Messages';
import { images } from '../../constants/Images';

export type SetInfoProps = {};
type Props = NativeStackScreenProps<RootStackParams, "SetInfo">;

function SetInfo(props: Props) {
    return (
        <View>
            <Pressable>
                <Image source={images.backArrow}/>
            </Pressable>

            <TextInput placeholder={messages.infoPlaceholder}/>

            <Pressable>
                <Text>{messages.next}</Text>
            </Pressable>
            <Pressable>
                <Text>{messages.cancel}</Text>
            </Pressable>
        </View>
    );
}

export default SetInfo;
