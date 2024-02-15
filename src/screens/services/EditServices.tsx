import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { View } from 'react-native';

export type EditServicesProps = {};
type Props = NativeStackScreenProps<RootStackParams, "EditServices">;

function EditServices(props: Props) {
    return (
        <View>
            <View>
                {/* services mapirane u selektabilne ili u  */}
            </View>
        </View>
    );
}

export default EditServices;
