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
            <Text>
                <Text>{messages.banExparation}</Text>
                <TimeView time={props.endDate}/>
            </Text>
        </>
    );

    const additionalInfo = () => (
        <>
            <Text>
                <Text>{messages.bannedBy}</Text>
                <BarberView {...props.bannedBy} styles={[{fontSize: 14}]}/>
            </Text>
            <Text>
                <Text>{messages.banCustomer} </Text>
                <CustomerView {...props.customer}/>
            </Text>
            <Text>
                <Text>{messages.banDateSet}</Text>
                <TimeView time={props.banDate}/>
            </Text>
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
