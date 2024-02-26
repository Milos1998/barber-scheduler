import React from 'react';
import { Text } from 'react-native';
import { messages } from '../../constants/Messages';

type TimeViewProps = {
    time: string
}

function TimeView(props: TimeViewProps) {
    const date = new Date(props.time);

    const formatTime = (time: number) => {
        if (time < 10) return `0${time}`;
        return time;
    }

    return (
        <>
            <Text>
                <Text>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</Text>
                <Text> {messages.at} </Text>
                <Text>{formatTime(date.getHours())}:{formatTime(date.getMinutes())}</Text>
            </Text>
        </>
    );
}

export default TimeView;
