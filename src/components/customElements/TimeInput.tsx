import React, { useState } from 'react';
import TextInputC from './TextInputC';
import { messages } from '../../constants/Messages';
import { StyleSheet, Text, View } from 'react-native';

type TimeInputProps = {
    onlyHours: boolean,
    onUpdate: (dateInput: TimeInput) => any,
    styles?: Object[],
};

type TimeInput = {
    day: string,
    month: string,
    year: string,
    hour: string,
    minute: string,
}

function TimeInput(props: TimeInputProps) {
    const viewStyles: Object[] = [styles.main];
    if (props.styles !== undefined) viewStyles.push(...props.styles);

    const [time, setTime] = useState<TimeInput>({day: "", month: "", year: "", hour: "", minute: ""});

    const onInputUpdate = (inputName: "day" | "month" | "year" | "hour" | "minute") => {
        return (value: string) => {
            setTime((prev) => {
                const updatedVal = {...prev};
                updatedVal[inputName] = value;
                props.onUpdate(updatedVal);
                return updatedVal;
            });
        }
    };

    const renderDateInput = () => (
        <>
            <TextInputC keyboardType="numeric" maxLength={2} value={time.day} placeholder={messages.dayPlaceholder} onChangeText={onInputUpdate("day")} styles={[styles.input]}/>
            <Text>/</Text>
            <TextInputC keyboardType="numeric" maxLength={2} value={time.month} placeholder={messages.monthPlaceholder} onChangeText={onInputUpdate("month")} styles={[styles.input]}/>
            <Text>/</Text>
            <TextInputC keyboardType="numeric" maxLength={4} value={time.year} placeholder={messages.yearPlaceholder} onChangeText={onInputUpdate("year")} styles={[styles.input]}/>
        </>
    )
    const renderHoursInput = () => (
        <>
            <TextInputC keyboardType="numeric" maxLength={2} value={time.hour} placeholder={messages.hourPlaceholder} onChangeText={onInputUpdate("hour")} styles={[styles.input]}/>
            <Text>:</Text>
            <TextInputC keyboardType="numeric" maxLength={2} value={time.minute} placeholder={messages.minutePlaceholder} onChangeText={onInputUpdate("minute")} styles={[styles.input]}/>
        </>
    );
    return (
        <View style={viewStyles}>
            {!props.onlyHours && renderDateInput()}
            {renderHoursInput()}
        </View>
    );
}

export default TimeInput;

const styles = StyleSheet.create({
    main: {
        flex: -1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 3
    },
    input: {
        width: "auto",
        padding: 5,
        paddingHorizontal: 8,
        textAlign: "center"
    }
});
