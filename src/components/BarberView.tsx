import React from 'react';
import { Barber } from '../Store';
import { StyleSheet, Text } from 'react-native';

function BarberView(props: Barber) {
    return (
        <>
            <Text style={styles.wrapper}>
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