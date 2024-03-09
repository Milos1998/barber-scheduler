import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { StyleSheet, Text, View } from 'react-native';
import ButtonC from '../../components/customElements/ButtonC';
import { commonStyling } from '../../constants/Styles';
import { store } from '../../Store';
import BarberView from '../../components/views/BarberView';
import CustomerView from '../../components/views/CustomerView';
import ScrollViewC from '../../components/customElements/ScrollViewC';

export type AllUsersProps = {};
type Props = NativeStackScreenProps<RootStackParams, "AllUsers">;

function AllUsers(props: Props) {
    const renderBarbers = () => {
        return store.barbers.map((barber, idx) => {
            return(
                <ButtonC key={idx} styles={[commonStyling.flexColumn, styles.user, styles.barber]}>
                    <BarberView {...barber} styles={[styles.text]}/>
                </ButtonC>
            );
        })
    }

    const renderCustomers = () => {
        return store.customers.map((customer, idx) => {
            return(
                <ButtonC key={idx} styles={[commonStyling.flexColumn, styles.user, styles.customer]}>
                    <CustomerView {...customer} style={styles.text}/>
                </ButtonC>
            );
        })
    }

    return (
        <View style={commonStyling.screen}>
            <Text style={styles.userCount}>{store.barbers.length + store.customers.length}</Text>

            <ScrollViewC>
                {renderBarbers()}
                {renderCustomers()}
            </ScrollViewC>
        </View>
    );
}

export default AllUsers;

const styles = StyleSheet.create({
    userCount: {
        paddingTop: 20,
        color: "gray",
        fontSize: 12,
    },
    user: {
        flex: -1,
        width: "80%",
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "baseline",
        borderColor: "black",
        borderWidth: 1,
    },
    customer: {
        backgroundColor: "lightsteelblue",
    },
    barber: {
        backgroundColor: "lightyellow",
    },
    text: {
        fontSize: 14,
    }
});
