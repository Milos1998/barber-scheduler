import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { messages } from '../../constants/Messages';

type DayButtonProps = {
    date: Date,
    viewType: "selected" | "unselected" | "inactive"
} & PressableProps;

function DayButton(props: DayButtonProps) {
    const dateStyles: Object[] = [styles.date];
    if (props.viewType === "selected") dateStyles.push(styles.dateSelected);
    else if (props.viewType === "inactive") dateStyles.push(styles.dateInactive);

    return (
        <Pressable style={styles.day}>
            <Text style={styles.dayOfWeek}>{messages.daysOfWeek[props.date.getDay()].charAt(0)}</Text>
            <Text style={dateStyles}>{props.date.getDate()}</Text>
        </Pressable>
    );
}

export default DayButton;

const styles = StyleSheet.create({
    day: {
        flex: -1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    dayOfWeek: {
        fontSize: 14,
        color: "red",
    },
    date: {
        fontSize: 15,
        color: "black",
        borderRadius: 50,
        width: 40,
        height: 40,
        textAlign: "center",
        textAlignVertical: "center",
        borderColor: "black",
        borderWidth: 1,
    },
    dateSelected: {
        backgroundColor: "blue",
    },
    dateInactive: {
        backgroundColor: "gray",
    }
})
