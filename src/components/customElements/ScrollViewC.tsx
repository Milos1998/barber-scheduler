import React from 'react';
import { ScrollView, ScrollViewProps, View } from 'react-native';
import { commonStyling } from '../../constants/Styles';

type Props = ScrollViewProps & {
    wrapperStyle?: Object[],
    innerStyle?: Object[],
};

function ScrollViewC(props: Props) {
    const wrapperStyle: Object[] = [];
    const innerStyle: Object[] = [];

    if (props.horizontal) {
        wrapperStyle.push(commonStyling.scrollHorizontal);
        innerStyle.push(commonStyling.scrollInnerHorizontal);
    } else {
        wrapperStyle.push(commonStyling.scroll);
        innerStyle.push(commonStyling.scrollInner);
    }

    if (props.wrapperStyle !== undefined) wrapperStyle.push(...props.wrapperStyle);
    if (props.innerStyle !== undefined) innerStyle.push(...props.innerStyle);

    return (
        <View style={wrapperStyle}>
            <ScrollView {...props} style={undefined} contentContainerStyle={innerStyle} />
        </View>
    );
}

export default ScrollViewC;
