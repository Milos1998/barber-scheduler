import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { StyleSheet, View } from 'react-native';
import ButtonC from '../../components/customElements/ButtonC';
import { messages } from '../../constants/Messages';
import { commonStyling } from '../../constants/Styles';
import BarberSelector from '../../components/selectors/BarberSelector';
import ServiceSelector from '../../components/selectors/ServiceSelector';

export type AllServicesProps = {};
type Props = NativeStackScreenProps<RootStackParams, "AllServices">;

function AllServices(props: Props) {
    return (
        <View style={commonStyling.screen}>
            <BarberSelector horizontal={true}/>
            <ServiceSelector horizontal={false} buttonStyling={[styles.serviceButton]}/>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.add} styles={[commonStyling.confirmButton]}/>
            </View>
        </View>
    );
}

export default AllServices;

const styles = StyleSheet.create({
    serviceButton: {
        backgroundColor: "whitesmoke",
        width: "80%",
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "baseline",
        borderColor: "black",
        borderWidth: 1,
    },
});
