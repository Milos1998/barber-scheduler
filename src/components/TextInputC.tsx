import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export type TextInputCProps = {
    styles?: Object[]
    placeholder?: string
}

function TextInputC(props: TextInputCProps) {
    const componentStyle = props.styles !== undefined ? [styles.input, ...props.styles] : [styles.input];

    return (
        <TextInput placeholder={props.placeholder} style={componentStyle}/>
    );
}

export default TextInputC;

const styles = StyleSheet.create({
    input: {
        width: "80%",
        height: 70,
        padding: 15,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
    },
    text: {
        fontSize: 20,
    }
});
