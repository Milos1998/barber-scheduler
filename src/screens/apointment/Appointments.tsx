import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { ScrollView, StyleSheet, View } from 'react-native';
import { messages } from '../../constants/Messages';
import ButtonC from '../../components/ButtonC';
import { commonStyling } from '../../constants/Styles';
import { store } from '../../Store';
import AppointmentView from '../../components/AppointmentView';

export type AppointmentsProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Appointments">

function Appointments(props: Props) {
    const renderAppointments = () => {
        return store.appointments.map((appointment, idx) => {
            return (
                <View key={idx} style={styles.appointmentCont}>
                    <AppointmentView {...appointment}/>
                    <ButtonC label={messages.decline} styles={[commonStyling.declineButton, styles.cancelButton]}/>
                </View>
            )
        });
    }

    return (
        <View style={commonStyling.screen}>
            <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
                {renderAppointments()}
            </ScrollView>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.addMore} styles={[commonStyling.confirmButton]}/>
            </View>
        </View>
    );
}

export default Appointments;

const styles = StyleSheet.create({
    appointmentCont: {
        flex: -1,
        backgroundColor: "paleturquoise",
        padding: 10,
        width: "100%",
        gap: 10,
    },
    cancelButton: {
        alignSelf: "center",
    }
})
