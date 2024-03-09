import React from 'react';
import { StyleSheet } from 'react-native';
import BarberView from '../views/BarberView';
import { store } from '../../Store';
import ScrollViewC from '../customElements/ScrollViewC';
import ButtonC from '../customElements/ButtonC';

type BarberSelectorProps = {
    styles?: Object[],
    horizontal?: boolean,
    buttonStyling?: Object[],
}

function BarberSelector(props: BarberSelectorProps) {
    const renderBarbers = () => {
        return store.barbers.map((barber, idx) => {
            const buttonStyle: Object[] = [styles.button];
            if (props.buttonStyling !== undefined) buttonStyle.push(...props.buttonStyling);

            return(
                <ButtonC key={idx} styles={buttonStyle}>
                    <BarberView {...barber} styles={[styles.text]}/>
                </ButtonC>
            );
        })
    }

    return (
        <ScrollViewC horizontal={props.horizontal} innerStyle={props.styles}>
            {renderBarbers()}
        </ScrollViewC>
    );
}

export default BarberSelector;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "antiquewhite",
        width: "auto",
    },
    text: {
        fontSize: 14,
    },
});
