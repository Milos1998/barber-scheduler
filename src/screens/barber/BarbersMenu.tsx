import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import ScrollViewC from '../../components/customElements/ScrollViewC';
import ButtonC from '../../components/customElements/ButtonC';
import { messages } from '../../constants/Messages';
import { StyleSheet } from 'react-native';

export type BarbersMenuProps = {};
type Props = NativeStackScreenProps<RootStackParams, "BarbersMenu">;

function BarbersMenu(props: Props) {
    return (
        <ScrollViewC>
            <ButtonC styles={[styles.button]} label={messages.barberMenu.users}/>
            <ButtonC styles={[styles.button]} label={messages.barberMenu.services}/>
            <ButtonC styles={[styles.button]} label={messages.barberMenu.appointments}/>
            <ButtonC styles={[styles.button]} label={messages.barberMenu.notes}/>
            <ButtonC styles={[styles.button]} label={messages.barberMenu.ban}/>
        </ScrollViewC>
    );
}

export default BarbersMenu;

const styles = StyleSheet.create({
    button: {
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "whitesmoke",
    }
});
