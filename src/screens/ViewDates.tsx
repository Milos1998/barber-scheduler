import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { Image, Pressable, View } from 'react-native';
import { images } from '../constants/Images';

export type ViewDatesProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ViewDates">

function ViewDates(props: Props) {
    return (
        <View>
            <Pressable>
                <Image source={images.backArrow}/>
            </Pressable>

            {/* dugmici */}
        </View>
    );
}

export default ViewDates;