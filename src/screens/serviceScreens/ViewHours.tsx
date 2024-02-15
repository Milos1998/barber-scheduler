import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Image, Pressable, View } from 'react-native';
import { images } from '../../constants/Images';

export type ViewHoursProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ViewHours">

function ViewHours(props: Props) {
    return (
        <View>
            <Pressable>
                <Image source={images.backArrow}/>
            </Pressable>

            {/* dugmici */}
        </View>
    );
}

export default ViewHours;