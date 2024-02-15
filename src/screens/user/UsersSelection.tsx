import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { RootStackParams } from '../../../App';
import { images } from '../../constants/Images';
import { messages } from '../../constants/Messages';

export type UsersSelectionProps = {};
type Props = NativeStackScreenProps<RootStackParams, "UsersSelection">

function UsersSelection(props: Props) {
    return (
        <View>
            <Pressable>
                <Image source={images.backArrow}/>
            </Pressable>

            <View>
                {/* Users mapira se u usera i dugme na ciji se klik gura user u neku globalnu promenljivu */}
            </View>

            <View>
                <Pressable>
                    <Text>{messages.accept}</Text>
                </Pressable>
                <Pressable>
                    <Text>{messages.cancel}</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default UsersSelection;
