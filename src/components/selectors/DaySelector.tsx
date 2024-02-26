import React from 'react';
import { store } from '../../Store';
import DayButton from './DayButton';
import ScrollViewC from '../customElements/ScrollViewC';

type DaySelectorProps = {
    containerStyles?: Object[],
}

function DaySelector(props: DaySelectorProps) {
    const renderDays = () => {
        return store.datesSpan.map((date, idx) => {
            return(
                <DayButton date={date} key={idx} viewType="unselected"/>
            );
        })
    }

    return (
        <ScrollViewC horizontal={true} innerStyle={props.containerStyles} showsHorizontalScrollIndicator={false}>
            {renderDays()}
        </ScrollViewC>
    );
}

export default DaySelector;
