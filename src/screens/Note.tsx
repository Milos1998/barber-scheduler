import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { View } from 'react-native';
import { messages } from '../constants/Messages';
import ButtonC from '../components/customElements/ButtonC';
import { commonStyling } from '../constants/Styles';
import { store } from '../Store';
import ScrollViewC from '../components/customElements/ScrollViewC';
import NoteView from '../components/views/NoteView';

export type NoteProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Note">;

function Note(props: Props) {
    return (
        <View style={commonStyling.screen}>
            <ScrollViewC>
                <NoteView displayAll={false} {...store.notes[0]}/>
            </ScrollViewC>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.ok} styles={[commonStyling.infoButton]}/>
            </View>
        </View>
    );
}

export default Note;
