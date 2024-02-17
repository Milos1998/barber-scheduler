import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { images } from '../../constants/Images';
import { store } from '../../Store';
import ButtonC from '../../components/ButtonC';
import { commonStyling } from '../../constants/Styles';

export type ViewHoursProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ViewHours">

function ViewHours(props: Props) {
    const renderDates = () => {
        const startHours = store.selectedDate;
        startHours.setHours(store.startHours, store.startMinutes);

        const endHours = new Date(startHours);
        endHours.setHours(store.endHours, store.endMinutes);

        const hours: Date[] = [];
        while(startHours.getTime() <= endHours.getTime()) {
            hours.push(new Date(startHours));
            startHours.setMinutes(startHours.getMinutes() + store.minutesIncrement);
        }

        return hours.map((date, idx) => {
            const dateStyles = [];
            dateStyles.push(styles.hour);

            return (
                <ButtonC label={`${date.getHours()}:${date.getMinutes()}`} key={idx} styles={dateStyles}/>
            )
        })
    }

    return (
        <View style={commonStyling.screen}>
            <View style={commonStyling.header}>
                <ButtonC image={images.backArrow} styles={[commonStyling.headerButton]}/>
            </View>

            <ScrollView style={commonStyling.scroll} contentContainerStyle={commonStyling.scrollInner}>
                {renderDates()}
            </ScrollView>
        </View>
    );
}

export default ViewHours;

const styles = StyleSheet.create({
    hour: {
        borderWidth: 1,
        borderColor: "black",
    },
    unavailableHour: {
        backgroundColor: "dimgray"
    }
});
