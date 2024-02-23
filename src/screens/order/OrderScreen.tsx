import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { ScrollView, StyleSheet, View } from 'react-native';
import { commonStyling } from '../../constants/Styles';
import BarberSelector from '../../components/selectors/BarberSelector';
import DaySelector from '../../components/selectors/DaySelector';
import HourSelector from '../../components/selectors/HourSelector';
import ServiceSelector from '../../components/selectors/ServiceSelector';

export type OrderScreenProps = {};
type Props = NativeStackScreenProps<RootStackParams, "OrderScreen">;

function OrderScreen(props: Props) {
    return (
        <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
            <View style={commonStyling.headerVertical}>
                <BarberSelector />
                <ServiceSelector />
                <DaySelector />
            </View>
            <HourSelector />
        </ScrollView>
    );
}

export default OrderScreen;
