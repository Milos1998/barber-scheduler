import React from 'react';
import { Image, Pressable, PressableProps, StyleSheet, Text } from 'react-native';

export type ButtonCProps = {
    label?: string,
    image?: any,
    styles?: Object[],
} & PressableProps

function ButtonC(props: ButtonCProps) {
    const componentStyle = props.styles !== undefined ? [styles.button, ...props.styles] : [styles.button];

    return (
        <Pressable {...props} style={componentStyle}>
            { props.label !== undefined && <Text style={styles.text}>{props.label}</Text> }
            { props.image !== undefined && <Image source={props.image}/> }
        </Pressable>
    );
}

export default ButtonC;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        padding: 15,
        flex: -1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        gap: 10,
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        minHeight: 27,
    }
});
