import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export type TextInputCProps = {
    styles?: Object[]
} & TextInputProps;

function TextInputC(props: TextInputCProps) {
    const componentStyle = props.styles !== undefined ? [styles.input, ...props.styles] : [styles.input];

    return (
        <TextInput {...props} style={componentStyle}/>
    );
}

export default TextInputC;

const styles = StyleSheet.create({
    input: {
        width: "80%",
        padding: 10,
        paddingHorizontal: 15,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
    },
});
