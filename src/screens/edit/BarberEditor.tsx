import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { RootStackParams } from '../../../App';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { messages } from '../../constants/Messages';
import ButtonC from '../../components/ButtonC';
import { commonStyling } from '../../constants/Styles';
import { images } from '../../constants/Images';
import TextInputC from '../../components/TextInputC';
import { store } from '../../Store';

export type BarberEditorProps = {};
type Props = NativeStackScreenProps<RootStackParams, "BarberEditor">;

type BarberEditorInput = {
    firstName: string,
    lastName: string,
}

function BarberEditor(props: Props) {
    const firstName = store.selectedBarber?.firstName ?? "";
    const lastName = store.selectedBarber?.lastName ?? "";
    const [service, setService] = useState<BarberEditorInput>({firstName, lastName});

    const onInputUpdate = (inputName: "firstName" | "lastName") => {
        return (value: string) => {
            setService((prev) => {
                const updatedVal = {...prev};
                updatedVal[inputName] = value;
                return updatedVal;
            });
        }
    };

    return (
        <View style={commonStyling.screen}>
            <View style={commonStyling.header}>
                <ButtonC styles={[commonStyling.headerButton]} image={images.backArrow}/>
            </View>

            <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
                <Text style={styles.label}>{messages.editor.barberFirstName}</Text>
                <TextInputC placeholder={messages.editor.barberFirstNamePlaceholder} value={service.firstName} onChangeText={onInputUpdate("firstName")}/>
                <Text style={styles.label}>{messages.editor.barberLastName}</Text>
                <TextInputC placeholder={messages.editor.barberLastNamePlaceholder} value={service.lastName} onChangeText={onInputUpdate("lastName")}/>
            </ScrollView>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.save} styles={[commonStyling.confirmButton]}/>
                <ButtonC label={messages.delete} styles={[commonStyling.declineButton]}/>
            </View>
        </View>
    );
}

export default BarberEditor;

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: -7
    }
});
