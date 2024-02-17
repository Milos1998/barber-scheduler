import React from 'react';
import { Appointment } from '../Store';
import { StyleSheet, Text } from 'react-native';
import { messages } from '../constants/Messages';
import TimeView from './TimeView';
import ServiceView from './ServiceView';
import BarberView from './BarberView';
import CustomerView from './CustomerView';

function AppointmentView(props: Appointment) {
    return (
        <>
            <Text style={styles.appointmentText}>{messages.appointment}</Text>
            <TimeView time={props.time} />
            <ServiceView {...props.service}/>
            <BarberView {...props.barber}/>
            <CustomerView {...props.customer}/>
        </>
    );
}

export default AppointmentView;

const styles = StyleSheet.create({
    appointmentText: {
        fontSize: 25,
        fontWeight: "bold",
    }
});
