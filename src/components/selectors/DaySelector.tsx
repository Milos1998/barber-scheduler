import React from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import BarberView from '../views/BarberView';
import { store } from '../../Store';
import { commonStyling } from '../../constants/Styles';
import DayButton from './DayButton';

type DaySelectorProps = {
    containerStyles?: Object[],
    horizontal?: boolean,
}

function DaySelector(props: DaySelectorProps) {
    const scrollStyling: Object[] = [commonStyling.scrollHorizontal];
    if (props.containerStyles !== undefined) scrollStyling.push(...props.containerStyles)

    const renderDays = () => {
        return store.datesSpan.map((date, idx) => {
            return(
                <DayButton date={date} key={idx} viewType="unselected"/>
            );
        })
    }

    return (
        <ScrollView horizontal={props.horizontal ?? true} style={commonStyling.scroll} contentContainerStyle={scrollStyling} showsHorizontalScrollIndicator={false}>
            {renderDays()}
        </ScrollView>
    );
}

export default DaySelector;
