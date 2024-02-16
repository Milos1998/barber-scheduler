import { StyleSheet } from "react-native";

export const commonStyling = StyleSheet.create({
    screen: {
        backgroundColor: "snow",
        height: "100%",
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
    flexRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    flexColumn: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow"
    },
});
