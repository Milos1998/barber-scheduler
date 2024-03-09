import React from 'react';
import { StyleSheet } from 'react-native';
import { commonStyling } from '../../constants/Styles';
import { store } from '../../Store';
import ServiceView from '../views/ServiceView';
import ScrollViewC from '../customElements/ScrollViewC';
import ButtonC from '../customElements/ButtonC';

type ServiceSelectorProps = {
    styles?: Object[],
    horizontal?: boolean,
    buttonStyling?: Object[],
}

function ServiceSelector(props: ServiceSelectorProps) {
    const renderServices = () => {
        return store.services.map((service, idx) => {
            const buttonStyle: Object[] = [commonStyling.flexColumn, styles.button];
            if (props.buttonStyling !== undefined) buttonStyle.push(...props.buttonStyling);

            return(
                <ButtonC key={idx} styles={buttonStyle}>
                    <ServiceView {...service}/>
                </ButtonC>
            );
        })
    }

    return (
        <ScrollViewC horizontal={props.horizontal} innerStyle={props.styles}>
            {renderServices()}
        </ScrollViewC>
    );
}

export default ServiceSelector;

const styles = StyleSheet.create({
    button: {
        gap: 0,
        margin: 0,
        paddingHorizontal: 7,
        paddingVertical: 0,
        width: "auto",
    }
});
