import React from 'react';
import { commonStyling } from '../../constants/Styles';
import ScrollViewC from '../../components/customElements/ScrollViewC';
import ButtonC from '../../components/customElements/ButtonC';
import { messages } from '../../constants/Messages';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';
import UserSelector from '../../components/selectors/UserSelector';
import TextInputC from '../../components/customElements/TextInputC';
import { StyleSheet, Text, View } from 'react-native';
import TimeInput from '../../components/customElements/TimeInput';
import CheckBox from '../../components/customElements/CheckBox';

export type SetBanProps = {};
type Props = NativeStackScreenProps<RootStackParams, "SetBan">;

function SetBan(props: Props) {
    return (
        <View style={commonStyling.screen}>
            <ScrollViewC innerStyle={[styles.scrollInner]}>
                <Text style={styles.text}>{messages.chooseUser}</Text>
                <UserSelector isMultiselect={false} horizontal={true} wrapperStyle={[styles.scrollWrapper]} innerStyle={[styles.scrollInner]}/>

                <Text style={styles.text}>{messages.enterBanReason}</Text>
                <TextInputC styles={[styles.input, styles.centered]} maxLength={500} multiline={true}/>

                <Text style={styles.text}>{messages.banExparation}</Text>
                <TimeInput onlyHours={false} onUpdate={() => {}} styles={[styles.centered]}/>
            </ScrollViewC>
            <View style={commonStyling.footer}>
                <ButtonC label={messages.accept} styles={[commonStyling.confirmButton]}/>
            </View>
        </View>
    );
}

export default SetBan;

const styles = StyleSheet.create({
    input: {
        height: 250,
        textAlignVertical: "top",
    },
    scrollWrapper: {
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    scrollInner: {
        alignItems: "baseline",
    },
    text: {
        fontSize: 16,
    },
    centered: {
        alignSelf: "center",
    }
});
