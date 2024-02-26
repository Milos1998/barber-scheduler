import React from 'react';
import ButtonC from '../customElements/ButtonC';
import { store } from '../../Store';
import { StyleSheet } from 'react-native';
import ScrollViewC from '../customElements/ScrollViewC';

type HourSelectorProps = {};

function HourSelector(props: HourSelectorProps) {
    const renderHours = () => {
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
            const label = `${date.getHours()}:${date.getMinutes()}`;
            return (
                <ButtonC label={label} key={idx} styles={[styles.hours]}/>
            )
        });
    }

    return (
        <ScrollViewC innerStyle={[styles.scroll]}>
            {renderHours()}
        </ScrollViewC>
    );
}

export default HourSelector;

const styles = StyleSheet.create({
    hours: {
        width: 90,
        backgroundColor: "gainsboro"
    },
    scroll: {
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: "row",
        gap: 5,
        padding: 0,
    }
});
