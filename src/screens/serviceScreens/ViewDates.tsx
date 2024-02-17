import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { ScrollView, StyleSheet, View } from 'react-native';
import { images } from '../../constants/Images';
import ButtonC from '../../components/ButtonC';
import { commonStyling } from '../../constants/Styles';
import { store } from '../../Store';

export type ViewDatesProps = {};
type Props = NativeStackScreenProps<RootStackParams, "ViewDates">

function ViewDates(props: Props) {
    const renderDates = () => {
        const startDate = new Date();

        const dates: Date[] = [];

        for(let i = 0; i < store.weeksDisplayed * 7; i++) {
            dates.push(new Date(startDate));
            startDate.setDate(startDate.getDate() + 1);
        }

        return dates.map((date, idx) => {
            const dateStyles = [];
            dateStyles.push(styles.date);
            if (date.getDay() === 0 || date.getDay() === 6) dateStyles.push(styles.unavailableDate);

            return (
                <ButtonC label={`${date.getDate()}/${date.getMonth() + 1}`} key={idx} styles={dateStyles}/>
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

export default ViewDates;

const styles = StyleSheet.create({
    date: {
        borderWidth: 1,
        borderColor: "black",
    },
    unavailableDate: {
        backgroundColor: "dimgray"
    }
});
