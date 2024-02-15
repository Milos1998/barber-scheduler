import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Image, Pressable, Text, View } from 'react-native';
import { images } from '../../constants/Images';
import { messages } from '../../constants/Messages';

export type AppointmentsProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Appointments">

function Appointments(props: Props) {
    return (
        <View>
            <View>
                {/* zakazivanja */}
            </View>

            <Pressable>
                <Text>{messages.addMore}</Text>
            </Pressable>
        </View>
    );
}

export default Appointments;
