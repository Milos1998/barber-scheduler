import React from 'react';
import Appointment, { AppointmentProps } from './Appointment';
import { Pressable, Text } from 'react-native';
import { messages } from '../constants/Messages';

export type CancelableAppointmentProps = {} & AppointmentProps;

function CancelableAppointment(props: CancelableAppointmentProps) {
    return (
        <>
            <Appointment {...props}/>
            <Pressable>
                <Text>{messages.cancelAppointment}</Text>
            </Pressable>
        </>
    );
}

export default CancelableAppointment;