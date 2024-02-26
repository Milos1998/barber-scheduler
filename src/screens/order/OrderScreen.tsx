import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { View } from 'react-native';
import { commonStyling } from '../../constants/Styles';
import BarberSelector from '../../components/selectors/BarberSelector';
import DaySelector from '../../components/selectors/DaySelector';
import HourSelector from '../../components/selectors/HourSelector';
import ServiceSelector from '../../components/selectors/ServiceSelector';
import ScrollViewC from '../../components/customElements/ScrollViewC';

export type OrderScreenProps = {};
type Props = NativeStackScreenProps<RootStackParams, "OrderScreen">;

function OrderScreen(props: Props) {
    return (
        <ScrollViewC>
            <View style={commonStyling.headerVertical}>
                <BarberSelector horizontal={true}/>
                <ServiceSelector horizontal={true}/>
                <DaySelector/>
            </View>
            <HourSelector />
        </ScrollViewC>
    );
}

export default OrderScreen;
