import React from 'react';
import { Pressable } from 'react-native';
import { commonStyling } from '../../constants/Styles';
import { store } from '../../Store';
import ServiceView from '../views/ServiceView';
import ScrollViewC from '../customElements/ScrollViewC';

type ServiceSelectorProps = {
    styles?: Object[],
    horizontal?: boolean,
    buttonStyling?: Object[],
}

function ServiceSelector(props: ServiceSelectorProps) {
    const renderServices = () => {
        return store.services.map((service, idx) => {
            const buttonStyle: Object[] = [commonStyling.flexColumn];
            if (props.buttonStyling !== undefined) buttonStyle.push(...props.buttonStyling);

            return(
                <Pressable key={idx} style={buttonStyle}>
                    <ServiceView {...service}/>
                </Pressable>
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
