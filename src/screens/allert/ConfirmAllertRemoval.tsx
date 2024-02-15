import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Image, Pressable, Text, View } from 'react-native';
import { images } from '../../constants/Images';
import { messages } from '../../constants/Messages';

export type ConfirmAllertRemovalProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ConfirmAllertRemoval">

function ConfirmAllertRemoval(props: Props) {
    return (
        <View>
            <Pressable>
                <Image source={images.backArrow}/>
            </Pressable>

            <View>
                <Text>{messages.removeAllert}</Text>
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

export default ConfirmAllertRemoval;
