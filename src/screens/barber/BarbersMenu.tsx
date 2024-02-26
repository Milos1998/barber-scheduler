import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import ScrollViewC from '../../components/customElements/ScrollViewC';

export type BarbersMenuProps = {};
type Props = NativeStackScreenProps<RootStackParams, "BarbersMenu">;

function BarbersMenu(props: Props) {
    return (
        <ScrollViewC>
            
        </ScrollViewC>
    );
}

export default BarbersMenu;
