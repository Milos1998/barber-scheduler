import React from 'react';
import { Pressable, ScrollView } from 'react-native';
import { commonStyling } from '../../constants/Styles';
import { store } from '../../Store';
import ServiceView from '../views/ServiceView';

type ServiceSelectorProps = {
    styles?: Object[]
}

function ServiceSelector(props: ServiceSelectorProps) {
    const scrollStyling: Object[] = [commonStyling.scrollHorizontal];
    if (props.styles !== undefined) scrollStyling.push(...props.styles)

    const renderServices = () => {
        return store.services.map((service, idx) => {
            return(
                <Pressable key={idx} style={[commonStyling.flexColumn]}>
                    <ServiceView {...service}/>
                </Pressable>
            );
        })
    }

    return (
        <ScrollView horizontal={true} style={commonStyling.scroll} contentContainerStyle={scrollStyling}>
            {renderServices()}
        </ScrollView>
    );
}

export default ServiceSelector;
