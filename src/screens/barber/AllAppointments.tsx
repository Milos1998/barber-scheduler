import React from 'react';
import { StyleSheet, View } from 'react-native';
import { commonStyling } from '../../constants/Styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';
import BarberSelector from '../../components/selectors/BarberSelector';
import DaySelector from '../../components/selectors/DaySelector';
import { store } from '../../Store';
import AppointmentView from '../../components/views/AppointmentView';
import ButtonC from '../../components/customElements/ButtonC';
import { messages } from '../../constants/Messages';
import ScrollViewC from '../../components/customElements/ScrollViewC';

export type AllAppointmentsProps = {};
type Props = NativeStackScreenProps<RootStackParams, "AllAppointments">;

function AllAppointments(props: Props) {
    const renderAppointments = () => {
        return store.appointments.map((appointment, idx) => {
            return (
                <View key={idx} style={[commonStyling.leftAlignedView, styles.appointmentCont]}>
                    <AppointmentView {...appointment}/>
                    <ButtonC label={messages.decline} styles={[commonStyling.declineButton, styles.cancelButton]}/>
                </View>
            )
        });
    }

    return (
        <View style={commonStyling.screen}>
            <View style={commonStyling.headerVertical}>
                <BarberSelector horizontal={true} />
                <DaySelector />
            </View>

            <ScrollViewC>
                {renderAppointments()}
            </ScrollViewC>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.add} styles={[commonStyling.confirmButton]}/>
            </View>
        </View>
    );
}

export default AllAppointments;

const styles = StyleSheet.create({
    appointmentCont: {
        backgroundColor: "paleturquoise",
    },
    cancelButton: {
        alignSelf: "center",
    }
});
