import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { StyleSheet, Text, View } from 'react-native';
import { messages } from '../../constants/Messages';
import ButtonC from '../../components/customElements/ButtonC';
import { commonStyling } from '../../constants/Styles';
import { images } from '../../constants/Images';
import { User } from '../../Store';
import ScrollViewC from '../../components/customElements/ScrollViewC';

export type UserEditorProps = {
    user: User
};
type Props = NativeStackScreenProps<RootStackParams, "UserEditor">;

function UserEditor(props: Props) {
    const user = props.route.params.user;

    return (
        <View style={commonStyling.screen}>
            <View style={commonStyling.header}>
                <ButtonC styles={[commonStyling.headerButton]} image={images.backArrow}/>
            </View>

            <ScrollViewC>
                <Text>{user.privileges.isBarber ? messages.barber : messages.customer}</Text>
                <Text>
                    <Text>{user.firstName} </Text>
                    <Text>{user.lastName}</Text>
                </Text>
                <ButtonC label={messages.editor.viewAllBans} styles={[styles.viewAllBans]}/>
                <ButtonC label={messages.editor.setBan} styles={[styles.setBan]}/>
                <ButtonC label={messages.editor.viewAllNotes} styles={[styles.viewAllNotes]}/>
                <ButtonC label={messages.editor.setNote} styles={[styles.setNote]}/>
            </ScrollViewC>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.save} styles={[commonStyling.confirmButton]}/>
                <ButtonC label={messages.cancel} styles={[commonStyling.declineButton]}/>
            </View>
        </View>
    );
}

export default UserEditor;

const styles = StyleSheet.create({
    viewAllBans: {
        backgroundColor: "orange",
    },
    setBan: {
        backgroundColor: "red",
    },
    viewAllNotes: {
        backgroundColor: "orange",
    },
    setNote: {
        backgroundColor: "paleturquoise",
    },
});
