import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { StyleSheet, Text, View } from 'react-native';
import { commonStyling } from '../../constants/Styles';
import TimeInput from '../../components/customElements/TimeInput';
import { TimeSpan, store } from '../../Store';
import ScrollViewC from '../../components/customElements/ScrollViewC';
import { messages } from '../../constants/Messages';
import ButtonC from '../../components/customElements/ButtonC';
import { parseDate, parseTime } from '../../utils/TimeUtils';
import { images } from '../../constants/Images';

export type BusinessHoursEditorProps = {};
type Props = NativeStackScreenProps<RootStackParams, "BusinessHoursEditor">; 

function BusinessHoursEditor(props: Props) {
    const renderHourSpan = (timeSpans: TimeSpan[]) => {
        return timeSpans.map((timeSpan, idx) => {
            return (
                <View style={commonStyling.flexRow} key={idx}>
                    <Text>{`${parseTime(timeSpan.from)}:${parseTime(timeSpan.to)}`}</Text>
                    <ButtonC image={images.cancel} styles={[styles.button]} imageStyles={[styles.buttonImage]}/>
                </View>
            );
        });
    }

    const renderWorkingHours = () => {
        return store.currentUser.businessHours.workingHours.map((day, idx) => {
            return (
                <View key={idx} style={[commonStyling.leftAlignedView, styles.dayCont]}>
                    <Text>{messages.daysOfWeek[idx]}</Text>
                    {renderHourSpan(day)}
                    <View style={commonStyling.flexRow}>
                        <TimeInput onlyHours={true} onUpdate={() => {}}/>
                        <Text> - </Text>
                        <TimeInput onlyHours={true} onUpdate={() => {}}/>
                        <ButtonC image={images.confirm} styles={[styles.button]} imageStyles={[styles.buttonImage]}/>
                    </View>
                </View>
            )
        });
    }

    const renderExceptions = () => {
        return store.currentUser.businessHours.exceptions.map((exception, idx) => {
            return (
                <View style={commonStyling.flexRow} key={idx}>
                    <Text>{`${parseDate(exception.from)} ${parseTime(exception.from)}`}</Text>
                    <Text> - </Text>
                    <Text>{`${parseDate(exception.to)} ${parseTime(exception.to)}`}</Text>
                    <ButtonC image={images.cancel} styles={[styles.button]} imageStyles={[styles.buttonImage]}/>
                </View>
            );
        });
    }

    return (
        <View style={commonStyling.screen}>
            <ScrollViewC>
                {renderWorkingHours()}

                <View style={[commonStyling.leftAlignedView, styles.exceptionCont]}>
                        <Text>{messages.exceptions}</Text>
                        {renderExceptions()}
                        <TimeInput onlyHours={false} onUpdate={() => {}}/>
                        <TimeInput onlyHours={false} onUpdate={() => {}}/>
                        <ButtonC label={messages.add} styles={[styles.exceptionButton]}/>
                </View>
            </ScrollViewC>
 
            <View style={commonStyling.footer}>
                <ButtonC label={messages.add} styles={[commonStyling.confirmButton]}/>
                <ButtonC label={messages.cancel} styles={[commonStyling.declineButton]}/>
            </View>
        </View>
    );
}

export default BusinessHoursEditor;

const styles = StyleSheet.create({
    dayCont: {
        backgroundColor: "paleturquoise",
        marginVertical: 4,
        gap: 4,
    },
    exceptionCont: {
        backgroundColor: "chocolate",
        marginVertical: 4,
        gap: 4,
    },
    exceptionButton: {
        alignSelf: "center",
        backgroundColor: "coral",
    },
    button: {
        width: "auto",
        height: "auto",
        marginLeft: 10,
        backgroundColor: "red"
    },
    buttonImage: {
        flex: -1,
        height: 20,
        width: 20,
        resizeMode: "contain",
    }
});
