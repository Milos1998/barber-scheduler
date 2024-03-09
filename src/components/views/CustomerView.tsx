import React from 'react';
import { User } from '../../Store';
import { Text } from 'react-native';

type Props = User & {
    style?: Object | Object[],
};

function CustomerView(props: Props) {
    return (
        <>
            <Text style={props.style}>
                <Text>{props.firstName} </Text>
                <Text>{props.lastName}</Text>
            </Text>
        </>
    );
}

export default CustomerView;
