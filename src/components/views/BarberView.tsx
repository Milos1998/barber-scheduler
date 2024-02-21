import React from 'react';
import { Barber } from '../../Store';
import { StyleSheet, Text } from 'react-native';

type Props = Barber & {
    styles?: Object[]
}

function BarberView(props: Props) {
    const allStyles: Object[] = [styles.wrapper];
    if (props.styles !== undefined) allStyles.push(...props.styles)
    return (
        <>
            <Text style={allStyles}>
                <Text>{props.firstName} </Text>
                <Text>{props.lastName}</Text>
            </Text>
        </>
    );
}

export default BarberView;

const styles = StyleSheet.create({
    wrapper: {
        fontSize: 20
    }
})