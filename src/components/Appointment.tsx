import React from 'react';
import { Text, View } from 'react-native';
import { messages } from '../constants/Messages';

export type AppointmentProps = {
    date: string,
    hours: string,
    barber: string,
    client?: string,
}

function Appointment(props: AppointmentProps) {
    return (
        <>
            <View>
                <Text>{messages.date}:</Text>
                <Text>{props.date}</Text>
            </View>
            <View>
                <Text>{messages.hours}:</Text>
                <Text>{props.hours}</Text>
            </View>
            <View>
                <Text>{messages.barber}:</Text>
                <Text>{props.barber}</Text>
            </View>
            {
                props.client !== undefined && 
                <View>
                    <Text>{messages.client}:</Text>
                    <Text>{props.client}</Text>
                </View>
            }
        </>
    );
}

export default Appointment;
