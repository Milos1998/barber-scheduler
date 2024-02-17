import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { images } from '../../constants/Images';
import { commonStyling } from '../../constants/Styles';
import ButtonC from '../../components/ButtonC';
import { store } from '../../Store';
import ServiceView from '../../components/ServiceView';

export type SelectServiceProps = {};
type Props = NativeStackScreenProps<RootStackParams, "SelectService">

function SelectService(props: Props) {
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
                <ButtonC image={images.backArrow} styles={[commonStyling.headerButton]}/>
            </View>

            <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
                {renderServices()}
            </ScrollView>
        </View>
    );
}

export default SelectService;

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
