import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Image, Pressable, Text, View } from 'react-native';
import { messages } from '../../constants/Messages';
import { images } from '../../constants/Images';

export type SetInfoConfirmationProps = {};
type Props = NativeStackScreenProps<RootStackParams, "SetInfoConfirmation">

function SetInfoConfirmation(props: Props) {
    return (
        <View>
            <Text>{messages.confirmSettingInfo}</Text>

            <Text>poruka koja se procita iz globalne promenljive</Text>

            <Text>{messages.confirmSettingInfoRecipients}</Text>

            <View>
                {/* korisnici */}
            </View>

            <View>
                <Pressable>
                    <Image source={images.confirm}/>
                </Pressable>
                <Pressable>
                    <Image source={images.cancel}/>
                </Pressable>
            </View>
        </View>
    );
}

export default SetInfoConfirmation;
