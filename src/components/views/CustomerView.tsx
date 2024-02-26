import React from 'react';
import { User } from '../../Store';
import { StyleSheet, Text } from 'react-native';
import { messages } from '../../constants/Messages';

function CustomerView(props: User) {
    return (
        <>
            <Text style={styles.header}>{messages.customer}: </Text>
            <Text>
                <Text>{props.firstName} </Text>
                <Text>{props.lastName}</Text>
            </Text>
        </>
    );
}

export default CustomerView;

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold"
    }
});
