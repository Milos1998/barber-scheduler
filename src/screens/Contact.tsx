import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../App';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { images } from '../constants/Images';
import { messages } from '../constants/Messages';
import { commonStyling } from '../constants/Styles';
import ButtonC from '../components/ButtonC';

export type ContactProps = {};
type Props = NativeStackScreenProps<RootStackParams, "Contact">

function Contact(props: Props) {
    return (
        <View style={commonStyling.screen}>
            <View style={commonStyling.header}>
                <ButtonC styles={[{width: "auto"}]} image={images.backArrow}/>
            </View>

            <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: "center" }}>
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>{messages.phone}</Text>
                    <ButtonC label={messages.phoneNum} styles={[styles.phoneButton]}/>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>{messages.address}</Text>
                    <Text style={styles.sectionContent}>{messages.addressValue}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default Contact;

const styles = StyleSheet.create({
    scroll: {
        padding: 20,
        top: -40,
    },
    section: {
        flex: -1,
        margin: 10,
        padding: 10,
        width: "100%",
        gap: 10,
        backgroundColor: "lavender"
    },
    sectionHeader: {
        fontSize: 20,
    },
    sectionContent: {
        fontSize: 20
    },
    phoneButton: {
        backgroundColor: "green",
        alignSelf: "center",
    }
});
