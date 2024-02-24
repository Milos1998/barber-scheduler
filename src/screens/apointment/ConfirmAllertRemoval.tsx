import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { images } from '../../constants/Images';
import { messages } from '../../constants/Messages';
import { commonStyling } from '../../constants/Styles';
import TimeView from '../../components/views/TimeView';
import ButtonC from '../../components/customElements/ButtonC';

export type ConfirmAllertRemovalProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ConfirmAllertRemoval">

function ConfirmAllertRemoval(props: Props) {
    return (
        <View style={commonStyling.screen}>
            <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
                <View style={commonStyling.leftAlignedView}>
                    <TimeView time={Date()}/>
                </View>
            </ScrollView>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.accept} styles={[commonStyling.confirmButton]}/>
                <ButtonC label={messages.cancel} styles={[commonStyling.declineButton]}/>
            </View>
        </View>
    );
}

export default ConfirmAllertRemoval;
