import React from 'react';
import { Text, View } from 'react-native';

export type UserProps = {
    email: string,
    firstName: string,
    lastName: string,
}

function User(props: UserProps) {
    return (
        <View>
            <Text>{props.email}</Text>
            <Text>{props.firstName}</Text>
            <Text>{props.lastName}</Text>
        </View>
    );
}

export default User;