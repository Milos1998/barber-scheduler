import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { ScrollView, StyleSheet, View } from 'react-native';
import { messages } from '../../constants/Messages';
import ButtonC from '../../components/ButtonC';
import { commonStyling } from '../../constants/Styles';

export type AppointmentsProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Appointments">

function Appointments(props: Props) {
    return (
        <View style={commonStyling.screen}>
            <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: "center" }}>
                {/* zakazivanja */}
            </ScrollView>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.addMore} styles={[commonStyling.confirmButton]}/>
            </View>
        </View>
    );
}

export default Appointments;

const styles = StyleSheet.create({
    scroll: {
        padding: 20,
    },
});
