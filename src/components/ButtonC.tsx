import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

export type ButtonCProps = {
    label?: string,
    image?: any,
    onPress?: () => void,
    styles?: Object[],
}

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
        height: 70,
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
    }
});
