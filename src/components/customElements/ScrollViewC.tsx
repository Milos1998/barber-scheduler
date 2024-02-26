import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, View } from 'react-native';

type Props = ScrollViewProps & {
    wrapperStyle?: Object[],
    innerStyle?: Object[],
};

function ScrollViewC(props: Props) {
    const wrapperStyle: Object[] = [];
    const innerStyle: Object[] = [];

    if (props.horizontal) {
        wrapperStyle.push(styles.scrollHorizontal);
        innerStyle.push(styles.scrollInnerHorizontal);
    } else {
        wrapperStyle.push(styles.scroll);
        innerStyle.push(styles.scrollInner);
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

const styles = StyleSheet.create({
    scroll: {
        width: "100%",
        flex: 1,
        padding: 20,
    },
    scrollHorizontal: {
        width: "100%",
        flex: -1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    scrollInner: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        gap: 10,
    },
    scrollInnerHorizontal: {
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        gap: 10,
    },
});
