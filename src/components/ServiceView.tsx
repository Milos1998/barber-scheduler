import React from 'react';
import { Service } from '../Store';
import { StyleSheet, Text } from 'react-native';

function ServiceView(props: Service) {
    return (
        <>
            <Text style={styles.serviceTitle}>{props.name}</Text>
            <Text style={styles.serviceDuration}>{props.durationMin} min</Text>
            <Text style={styles.servicePrice}>{props.price} din</Text>
        </>
    );
}

export default ServiceView;

const styles = StyleSheet.create({
    serviceTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    serviceDuration: {
        fontSize: 15,
        color: "grey",
    },
    servicePrice: {
        fontSize: 15,
        color: "grey",
    }
});
