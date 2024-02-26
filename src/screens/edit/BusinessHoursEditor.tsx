import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { View } from 'react-native';
import { commonStyling } from '../../constants/Styles';
import TimeInput from '../../components/customElements/TimeInput';

export type BusinessHoursEditorProps = {};
type Props = NativeStackScreenProps<RootStackParams, "BusinessHoursEditor">; 

function BusinessHoursEditor(props: Props) {
    return (
        <View style={commonStyling.screen}>
            <TimeInput onlyHours={false} onUpdate={() => {}}/>
        </View>
    );
}

export default BusinessHoursEditor;
