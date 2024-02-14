import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { Image, Pressable, Text, View } from 'react-native';
import { messages } from '../constants/Messages';
import { images } from '../constants/Images';

export type SelectBarberProps = {};
type Props = NativeStackScreenProps<RootStackParams, "SelectBarber">

function SelectBarber(props: Props) {
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

export default SelectBarber;
