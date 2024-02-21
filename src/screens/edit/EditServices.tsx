import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import ButtonC from '../../components/ButtonC';
import { messages } from '../../constants/Messages';
import { commonStyling } from '../../constants/Styles';
import AppointmentView from '../../components/views/AppointmentView';
import ServiceView from '../../components/views/ServiceView';
import { store } from '../../Store';
import { images } from '../../constants/Images';

export type EditServicesProps = {};
type Props = NativeStackScreenProps<RootStackParams, "EditServices">;

function EditServices(props: Props) {
    const renderServices = () => {
        return store.services.map((service, idx) => {
            return(
                <Pressable key={idx} style={[commonStyling.flexColumn, styles.serviceButton]}>
                    <ServiceView {...service}/>
                </Pressable>
            );
        })
    }

    return (
        <View style={commonStyling.screen}>
            <View style={commonStyling.header}>
                <ButtonC styles={[commonStyling.headerButton]} image={images.backArrow}/>
            </View>

            <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
                {renderServices()}
            </ScrollView>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.add} styles={[commonStyling.confirmButton]}/>
            </View>
        </View>
    );
}

export default EditServices;

const styles = StyleSheet.create({
    serviceButton: {
        flex: -1,
        backgroundColor: "whitesmoke",
        width: "80%",
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "baseline",
        borderColor: "black",
        borderWidth: 1,
    },
});
