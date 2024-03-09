import React from 'react';
import { Image, Pressable, PressableProps, StyleSheet, Text } from 'react-native';

export type ButtonCProps = {
    label?: string,
    image?: any,
    styles?: Object[],
    textStyles?: Object[],
    imageStyles?: Object[],
} & PressableProps

function ButtonC(props: ButtonCProps) {
    const componentStyle: Object[] = [styles.button];
    if (props.styles) componentStyle.push(...props.styles);
    const textStyle: Object[] = [styles.text];
    if (props.textStyles) textStyle.push(...props.textStyles);
    const imageStyle: Object[] = [];
    if (props.imageStyles) imageStyle.push(...props.imageStyles);

    return (
        <Pressable {...props} style={componentStyle}>
            <>{props.children}</>
            { props.label !== undefined && <Text style={textStyle}>{props.label}</Text> }
            { props.image !== undefined && <Image source={props.image} style={imageStyle}/> }
        </Pressable>
    );
}

export default ButtonC;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        padding: 12,
        flex: -1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        gap: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
    }
});
