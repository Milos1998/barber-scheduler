import React from 'react';
import ScrollViewC from '../../components/customElements/ScrollViewC';
import ButtonC from '../../components/customElements/ButtonC';
import { StyleSheet, View } from 'react-native';
import BarberSelector from '../../components/selectors/BarberSelector';
import { commonStyling } from '../../constants/Styles';
import { messages } from '../../constants/Messages';
import { store } from '../../Store';
import BanView from '../../components/views/BanView';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../App';

export type AllBansProps = {};
type Props = NativeStackScreenProps<RootStackParams, "AllBans">;

function AllBans(props: Props) {
    const renderBans = () => {
        return store.bans.map((ban, idx) => {
            return (
                <View key={idx} style={[commonStyling.leftAlignedView, styles.appointmentCont]}>
                    <BanView {...ban} displayAll={true}/>
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
                {renderBans()}
            </ScrollViewC>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.add} styles={[commonStyling.confirmButton]}/>
            </View>
        </View>
    );
}

export default AllBans;

const styles = StyleSheet.create({
    appointmentCont: {
        backgroundColor: "paleturquoise",
    },
    cancelButton: {
        alignSelf: "center",
    }
});
