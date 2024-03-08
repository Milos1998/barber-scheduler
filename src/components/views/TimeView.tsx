import React from 'react';
import { Text } from 'react-native';
import { messages } from '../../constants/Messages';
import { parseDate, parseTime } from '../../utils/TimeUtils';

type TimeViewProps = {
    time: string
}

function TimeView(props: TimeViewProps) {
    const date = new Date(props.time);

    return (
        <>
            <Text>
                <Text>{parseDate(date)}</Text>
                <Text> {messages.at} </Text>
                <Text>{parseTime(date)}</Text>
            </Text>
        </>
    );
}

export default TimeView;
