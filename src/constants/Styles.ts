import { StyleSheet } from "react-native";

export const commonStyling = StyleSheet.create({
    screen: {
        backgroundColor: "snow",
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        flex: -1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
        paddingHorizontal: 20,
    },
    headerVertical: {
        flex: -1,
        alignItems: "center",
        width: "100%",
    },
    headerButton: {
        width: "auto",
    },
    footer: {
        flex: -1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        gap: 10,
        margin: 20,
    },
    confirmButton: {
        backgroundColor: "cornflowerblue",
    },
    declineButton: {
        backgroundColor: "orangered",
    },
    infoButton: {
        backgroundColor: "peachpuff",
    },
    scroll: {
        width: "100%",
        flex: 1,
    },
    scrollHorizontal: {
        width: "100%",
        flex: -1,
    },
    scrollInner: {
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        gap: 10,
        padding: 20,
        // backgroundColor: "red"
    },
    scrollInnerHorizontal: {
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignContent: "center",
        gap: 10,
        padding: 10,
        // backgroundColor: "blue"
    },
    flexColumn: {
        flex: -1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    leftAlignedView: {
        flex: -1,
        alignItems: "baseline",
        padding: 10,
        width: "100%",
        gap: 10,
    },
});
