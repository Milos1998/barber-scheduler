import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackParams } from '../../../App';

export type BarbersMenuProps = {};
type Props = NativeStackScreenProps<RootStackParams, "BarbersMenu">;

function BarbersMenu(props: Props) {
    return (
        <ScrollView>
            
        </ScrollView>
    );
}

export default BarbersMenu;
