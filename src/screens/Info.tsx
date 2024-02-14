import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { Pressable, Text, View } from 'react-native';
import { messages } from '../constants/Messages';

export type InfoProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Info">;

function Info(props: Props) {
    return (
        <View>
            <View>
                <Text>Neka poruka koja se posalje sa servera</Text>
            </View>
            <Pressable>
                <Text>{messages.info}</Text>
            </Pressable>
            <Pressable>
                <Text>{messages.toScheduling}</Text>
            </Pressable>
        </View>
    );
}

export default Info;
