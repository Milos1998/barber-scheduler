import React from 'react';
import { Ban } from '../../Store';
import { Text } from 'react-native';
import TimeView from './TimeView';
import BarberView from './BarberView';
import CustomerView from './CustomerView';
import { messages } from '../../constants/Messages';

type BanViewProps = Ban & {
    displayAll: boolean;
}

function BanView(props: BanViewProps) {
    const basicView = (
        <>
            <Text>{props.banMessage}</Text>
            <Text>{messages.banExparation}</Text>
            <TimeView time={props.endDate}/>
        </>
    );

    const additionalInfo = () => (
        <>
            <Text>{messages.bannedBy}</Text>
            <BarberView {...props.bannedBy}/>
            <Text>{messages.banCustomer}</Text>
            <CustomerView {...props.customer}/>
            <Text>{messages.banDateSet}</Text>
            <TimeView time={props.banDate}/>
        </>
    );

    return (
        <>
            {basicView}
            {props.displayAll && additionalInfo()}
        </>
    );
}

export default BanView;
