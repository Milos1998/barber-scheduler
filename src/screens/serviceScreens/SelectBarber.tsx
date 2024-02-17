import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { images } from '../../constants/Images';
import { store } from '../../Store';
import ButtonC from '../../components/ButtonC';
import { commonStyling } from '../../constants/Styles';
import BarberView from '../../components/BarberView';

export type SelectBarberProps = {};
type Props = NativeStackScreenProps<RootStackParams, "SelectBarber">

function SelectBarber(props: Props) {
    const renderBarbers = () => {
        return store.barbers.map((barber, idx) => {
            return(
                <Pressable key={idx} style={styles.barberButton}>
                    <BarberView {...barber}/>
                </Pressable>
            );
        })
    }

    return (
        <View style={commonStyling.screen}>
            <View style={commonStyling.header}>
                <ButtonC image={images.backArrow} styles={[commonStyling.headerButton]}/>
            </View>

            <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
                {renderBarbers()}
            </ScrollView>
        </View>
    );
}

export default SelectBarber;

const styles = StyleSheet.create({
    barberButton: {
        flex: -1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "antiquewhite",
        width: "80%",
        height: 70,
        borderRadius: 10,
    }
});
