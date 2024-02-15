import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Pressable, Text, View } from 'react-native';
import { messages } from '../../constants/Messages';

export type ConfirmAppointmentProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ConfirmAppointment">

function ConfirmAppointment(props: Props) {
    return (
        <View>
            <View>
                {/* zakazivanje */}
            </View>

            <View>
                <Pressable>
                    <Text>{messages.accept}</Text>
                </Pressable>
                <Pressable>
                    <Text>{messages.decline}</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default ConfirmAppointment;
