import React from 'react';
import { Note } from '../../Store';
import { Text } from 'react-native';
import TimeView from './TimeView';
import BarberView from './BarberView';
import CustomerView from './CustomerView';
import { messages } from '../../constants/Messages';

type NoteViewProps = Note & {
    displayAll: boolean;
}

function NoteView(props: NoteViewProps) {
    const basicView = (<Text>{props.noteMessage}</Text>)

    const renderCustomers = () => {
        if (props.customers === "all") return (
            <Text>{messages.everyone}</Text>
        );

        props.customers.map((customer, idx) => {
            return (
                <CustomerView {...customer} key={idx}/>
            )
        })
    };

    const renderRepeat = () => {
        if (props.repeat === "always") return (<Text>{messages.displayAlways}</Text>);
        if (props.repeat === "daily") return (<Text>{messages.displayDaily}</Text>);
        return (<Text>{messages.displayOnce}</Text>);
    }

    const additionalInfo = () => (
        <>
            <Text>{messages.notePostedBy}</Text>
            <BarberView {...props.setBy}/>
            <Text>{messages.notedCustomers}</Text>
            {renderCustomers()}
            <Text>{messages.noteDateSet}</Text>
            <TimeView time={props.setDate}/>
            <Text>{messages.noteExparation}</Text>
            <TimeView time={props.endDate}/>
            <Text>{messages.noteRepeat}</Text>
            {renderRepeat()}
        </>
    );

    return (
        <>
            {basicView}
            {props.displayAll && additionalInfo()}
        </>
    );
}

export default NoteView;
