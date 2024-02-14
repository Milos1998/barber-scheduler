import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { Image, Pressable, Text, View } from 'react-native';
import { images } from '../constants/Images';
import { messages } from '../constants/Messages';

export type ConfirmAllertProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ConfirmAllert">

function ConfirmAllert(props: Props) {
    return (
        <View>
            <Pressable>
                <Image source={images.backArrow}/>
            </Pressable>

            <View>
                <Text>{messages.alertWhenAvailable}</Text>
                {/* zakazivanje */}
            </View>

            <View>
                <Pressable>
                    <Text>{messages.accept}</Text>
                </Pressable>
                <Pressable>
                    <Text>{messages.decline}</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default ConfirmAllert;
