import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { messages } from '../../constants/Messages';
import { commonStyling } from '../../constants/Styles';
import ButtonC from '../../components/ButtonC';
import AppointmentView from '../../components/AppointmentView';
import { Appointment, Customer, store } from '../../Store';

export type ConfirmAppointmentProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ConfirmAppointment">

function ConfirmAppointment(props: Props) {
    //ovo ce da se napravi u store ili nekoj logici kada se dodje na ovaj screen.
    const appointment = new Appointment(Date(), new Customer("petar.peric@gmail.com", "Petar", "Peric", "2"), store.barbers[0], store.services[0]);

    return (
        <View style={commonStyling.screen}>
            <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
                <View style={styles.appointmentCont}>
                        <AppointmentView {...appointment}/>
                </View>
            </ScrollView>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.accept} styles={[commonStyling.confirmButton]}/>
                <ButtonC label={messages.cancel} styles={[commonStyling.declineButton]}/>
            </View>
        </View>
    );
}

export default ConfirmAppointment;

const styles = StyleSheet.create({
    appointmentCont: {
        flex: -1,
        backgroundColor: "paleturquoise",
        padding: 10,
        width: "100%",
        gap: 10,
    },
});
