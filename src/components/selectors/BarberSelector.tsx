import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import BarberView from '../views/BarberView';
import { store } from '../../Store';
import ScrollViewC from '../customElements/ScrollViewC';

type BarberSelectorProps = {
    styles?: Object[],
    horizontal?: boolean,
    buttonStyling?: Object[],
}

function BarberSelector(props: BarberSelectorProps) {
    const renderBarbers = () => {
        return store.barbers.map((barber, idx) => {
            const buttonStyle: Object[] = [styles.barberButton];
            if (props.buttonStyling !== undefined) buttonStyle.push(...props.buttonStyling);

            return(
                <Pressable key={idx} style={buttonStyle}>
                    <BarberView {...barber} styles={[styles.barberText]}/>
                </Pressable>
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
    barberButton: {
        flex: -1,
        padding: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "antiquewhite",
        borderRadius: 10,
    },
    barberText: {
        fontSize: 13,
    }
});
