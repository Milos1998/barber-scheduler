import React from 'react';
import { Text } from 'react-native';
import { messages } from '../../constants/Messages';

type TimeViewProps = {
    time: string
}

function TimeView(props: TimeViewProps) {
    const date = new Date(props.time);

    return (
        <>
            <Text>
                <Text>{messages.date}: </Text>
                <Text>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
            </Text>
            <Text>
                <Text>{messages.hours}: </Text>
                <Text>{date.getHours()}:{date.getMinutes()}</Text>
            </Text>
        </>
    );
}

export default TimeView;
