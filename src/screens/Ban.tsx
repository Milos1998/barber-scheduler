import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { View } from 'react-native';
import { messages } from '../constants/Messages';
import ButtonC from '../components/customElements/ButtonC';
import { commonStyling } from '../constants/Styles';
import BanView from '../components/views/BanView';
import { store } from '../Store';
import ScrollViewC from '../components/customElements/ScrollViewC';

export type BanProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Ban">;

function Ban(props: Props) {
    return (
        <View style={commonStyling.screen}>
            <ScrollViewC>
                <BanView displayAll={false} {...store.bans[0]}/>
            </ScrollViewC>

            <View style={commonStyling.footer}>
                <ButtonC label={messages.info} styles={[commonStyling.infoButton]}/>
            </View>
        </View>
    );
}

export default Ban;
