import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { images } from '../../constants/Images';
import { messages } from '../../constants/Messages';
import ButtonC from '../../components/customElements/ButtonC';
import { commonStyling } from '../../constants/Styles';
import AppointmentView from '../../components/views/AppointmentView';
import { Appointment, Customer, store } from '../../Store';

export type ConfirmCancelationProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ConfirmCancelation">

function ConfirmCancelation(props: Props) {
    //ovo ce da se napravi u store ili nekoj logici kada se dodje na ovaj screen.
    const appointment = new Appointment(Date(), new Customer("petar.peric@gmail.com", "Petar", "Peric", "2"), store.barbers[0], store.services[0]);

    return (
        <View style={commonStyling.screen}>
            <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
                <View style={[commonStyling.leftAlignedView, styles.appointmentCont]}>
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

export default ConfirmCancelation;

const styles = StyleSheet.create({
    appointmentCont: {
        backgroundColor: "paleturquoise",
    },
});
