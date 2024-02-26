import React from 'react';
import ScrollViewC from '../../components/customElements/ScrollViewC';
import ButtonC from '../../components/customElements/ButtonC';
import { StyleSheet, View } from 'react-native';
import BarberSelector from '../../components/selectors/BarberSelector';
import { commonStyling } from '../../constants/Styles';
import { messages } from '../../constants/Messages';
import { store } from '../../Store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';
import NoteView from '../../components/views/NoteView';

export type AllNotesProps = {};
type Props = NativeStackScreenProps<RootStackParams, "AllNotes">;

function AllNotes(props: Props) {
    const renderNotes = () => {
        return store.notes.map((note, idx) => {
            return (
                <View key={idx} style={[commonStyling.leftAlignedView, styles.appointmentCont]}>
                    <NoteView {...note} displayAll={true}/>
                    <ButtonC label={messages.decline} styles={[commonStyling.declineButton, styles.cancelButton]}/>
                </View>
            )
        });
    }

    return (
        <View style={commonStyling.screen}>
            <View style={commonStyling.headerVertical}>
                <BarberSelector horizontal={true} />
            </View>

            <ScrollViewC>
                {renderNotes()}
            </ScrollViewC>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.add} styles={[commonStyling.confirmButton]}/>
            </View>
        </View>
    );
}

export default AllNotes;

const styles = StyleSheet.create({
    appointmentCont: {
        backgroundColor: "paleturquoise",
    },
    cancelButton: {
        alignSelf: "center",
    }
});
