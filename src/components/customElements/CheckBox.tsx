import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CheckBoxProps = {
    isChecked: boolean,
    label: string,
    onToggle: () => any,
    styles?: Object[],
    boxStyle?: Object[],
    textStyle?: Object[],
};

function CheckBox(props: CheckBoxProps) {
    const pressableStyles: Object[] = [styles.main];
    if (props.styles !== undefined) pressableStyles.push(...props.styles);

    const viewStyles: Object[] = [styles.box];
    if (props.isChecked) viewStyles.push(styles.checked);
    if (props.boxStyle !== undefined) viewStyles.push(...props.boxStyle);

    const textStyles: Object[] = [styles.label];
    if (props.textStyle !== undefined) viewStyles.push(...props.textStyle);

    return (
        <Pressable onPress={props.onToggle} style={pressableStyles}>
            <View style={viewStyles}></View>
            <Text style={textStyles}>{props.label}</Text>
        </Pressable>
    );
}

export default CheckBox;

const styles = StyleSheet.create({
    main: {
        flex: -1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        width: 20,
        height: 20,
    },
    checked: {
        backgroundColor: "blue",
    },
    label: {
        fontSize: 12,
    }
})
