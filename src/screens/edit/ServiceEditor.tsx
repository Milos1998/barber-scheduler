import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { RootStackParams } from '../../../App';
import { StyleSheet, Text, View } from 'react-native';
import { messages } from '../../constants/Messages';
import ButtonC from '../../components/customElements/ButtonC';
import { commonStyling } from '../../constants/Styles';
import { images } from '../../constants/Images';
import TextInputC from '../../components/customElements/TextInputC';
import { store } from '../../Store';
import ScrollViewC from '../../components/customElements/ScrollViewC';

export type ServiceEditorProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ServiceEditor">;

type ServiceEditorInput = {
    name: string,
    durationMin: string,
    price: string,
}

function ServiceEditor(props: Props) {
    const name = store.selectedService?.name ?? "";
    const durationMin = store.selectedService?.durationMin.toString() ?? "";
    const price = store.selectedService?.price.toString() ?? "";
    const [service, setService] = useState<ServiceEditorInput>({name, durationMin, price});

    const onInputUpdate = (inputName: "name" | "durationMin" | "price") => {
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
            <ScrollViewC>
                <Text style={styles.label}>{messages.editor.serviceName}</Text>
                <TextInputC placeholder={messages.editor.serviceNamePlaceholder} value={service.name} onChangeText={onInputUpdate("name")}/>
                <Text style={styles.label}>{messages.editor.serviceTime}</Text>
                <TextInputC placeholder={messages.editor.serviceTimePlaceholder} value={service.durationMin} onChangeText={onInputUpdate("durationMin")} keyboardType="numeric"/>
                <Text style={styles.label}>{messages.editor.servicePrice}</Text>
                <TextInputC placeholder={messages.editor.servicePricePlaceholder} value={service.price} onChangeText={onInputUpdate("price")} keyboardType="numeric"/>
            </ScrollViewC>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.save} styles={[commonStyling.confirmButton]}/>
                <ButtonC label={messages.delete} styles={[commonStyling.declineButton]}/>
            </View>
        </View>
    );
}

export default ServiceEditor;

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: -7
    }
});
