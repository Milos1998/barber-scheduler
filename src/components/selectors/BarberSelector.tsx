import React from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import BarberView from '../views/BarberView';
import { store } from '../../Store';
import { commonStyling } from '../../constants/Styles';

type BarberSelectorProps = {
    containerStyles?: Object[],
    horizontal?: boolean,
}

function BarberSelector(props: BarberSelectorProps) {
    const scrollStyling = props.containerStyles !== undefined ? [commonStyling.scrollHorizontal, ...props.containerStyles] : [commonStyling.scrollHorizontal];

    const renderBarbers = () => {
        return store.barbers.map((barber, idx) => {
            return(
                <Pressable key={idx} style={styles.barberButton}>
                    <BarberView {...barber} styles={[styles.barberText]}/>
                </Pressable>
            );
        })
    }

    return (
        <ScrollView horizontal={props.horizontal ?? true} style={commonStyling.scroll} contentContainerStyle={scrollStyling}>
            {renderBarbers()}
        </ScrollView>
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
