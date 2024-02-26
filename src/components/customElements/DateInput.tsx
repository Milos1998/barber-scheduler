import React, { useState } from 'react';
import TextInputC from './TextInputC';
import { messages } from '../../constants/Messages';
import { StyleSheet, View } from 'react-native';

type DateInputProps = {
    onUpdate: (dateInput: DateInput) => any,
    styles?: Object[],
};

type DateInput = {
    day: string,
    month: string,
    year: string,
}

function DateInput(props: DateInputProps) {
    const viewStyles: Object[] = [styles.main];
    if (props.styles !== undefined) viewStyles.push(...props.styles);

    const [date, setDate] = useState<DateInput>({day: "", month: "", year: ""});

    const onInputUpdate = (inputName: "day" | "month" | "year") => {
        return (value: string) => {
            setDate((prev) => {
                const updatedVal = {...prev};
                updatedVal[inputName] = value;
                props.onUpdate(updatedVal);
                return updatedVal;
            });
        }
    };
    return (
        <View style={viewStyles}>
            <TextInputC keyboardType="numeric" maxLength={2} placeholder={messages.dayPlaceholder} onChangeText={onInputUpdate("day")} style={styles.input}/>
            <TextInputC keyboardType="numeric" maxLength={2} placeholder={messages.monthPlaceholder} onChangeText={onInputUpdate("month")} style={styles.input}/>
            <TextInputC keyboardType="numeric" maxLength={4} placeholder={messages.yearPlaceholder} onChangeText={onInputUpdate("year")} style={styles.input}/>
        </View>
    );
}

export default DateInput;

const styles = StyleSheet.create({
    main: {
        flex: -1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "auto"
    }
});
