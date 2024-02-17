import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import ButtonC from '../../components/ButtonC';
import { messages } from '../../constants/Messages';
import { commonStyling } from '../../constants/Styles';
import { store } from '../../Store';
import { images } from '../../constants/Images';
import BarberView from '../../components/BarberView';

export type EditBarbersProps = {};
type Props = NativeStackScreenProps<RootStackParams, "EditBarbers">;

function EditBarbers(props: Props) {
    const renderBarbers = () => {
        return store.barbers.map((barber, idx) => {
            return(
                <Pressable key={idx} style={[commonStyling.flexColumn, styles.barberButton]}>
                    <BarberView {...barber}/>
                </Pressable>
            );
        })
    }

    return (
        <View style={commonStyling.screen}>
            <View style={commonStyling.header}>
                <ButtonC styles={[commonStyling.headerButton]} image={images.backArrow}/>
            </View>

            <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
                {renderBarbers()}
            </ScrollView>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.add} styles={[commonStyling.confirmButton]}/>
            </View>
        </View>
    );
}

export default EditBarbers;

const styles = StyleSheet.create({
    barberButton: {
        flex: -1,
        backgroundColor: "whitesmoke",
        width: "80%",
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "baseline",
        borderColor: "black",
        borderWidth: 1,
    },
});
