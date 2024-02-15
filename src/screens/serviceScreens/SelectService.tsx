import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Image, Pressable, Text, View } from 'react-native';
import { images } from '../../constants/Images';
import { messages } from '../../constants/Messages';

export type SelectServiceProps = {};
type Props = NativeStackScreenProps<RootStackParams, "SelectService">

function SelectService(props: Props) {
    return (
        <View>
            <Pressable>
                <Image source={images.backArrow}/>
            </Pressable>

            {/* dugmici */}

            <Pressable>
                <Text>{messages.next}</Text>
            </Pressable>
        </View>
    );
}

export default SelectService;
