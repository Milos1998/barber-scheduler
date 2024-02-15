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
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: "80%",
        height: 70,
        flex: -1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        gap: 10,
        borderRadius: 10
    },
    greenButton: {
        backgroundColor: "green"
    },
    redButton: {
        backgroundColor: "red"
    },
    input: {
        width: "80%",
        height: 70,
        padding: 15,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 20,
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
    text: {
        fontSize: 20,
    }
});
