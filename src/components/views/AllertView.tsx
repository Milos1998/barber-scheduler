import React from 'react';
import { Text } from 'react-native';
import { messages } from '../../constants/Messages';
import { Allert } from '../../Store';
import TimeView from './TimeView';

function AllertView(props: Allert) {
    return (
        <>
            <Text>{props.forService.name}</Text>
            <Text>{props.forBarber.firstName}</Text>
            <TimeView time={props.fromTime} />
            <Text> - </Text>
            <TimeView time={props.toTime} />
        </>
    );
}

export default AllertView;
