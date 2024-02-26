import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParams } from '../../../App';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ButtonC from '../../components/customElements/ButtonC';
import { commonStyling } from '../../constants/Styles';
import { store } from '../../Store';
import { images } from '../../constants/Images';
import BarberView from '../../components/views/BarberView';
import CustomerView from '../../components/views/CustomerView';
import ScrollViewC from '../../components/customElements/ScrollViewC';

export type AllUsersProps = {};
type Props = NativeStackScreenProps<RootStackParams, "AllUsers">;

function AllUsers(props: Props) {
    const renderBarbers = () => {
        return store.barbers.map((barber, idx) => {
            return(
                <Pressable key={idx} style={[commonStyling.flexColumn, styles.user, styles.barber]}>
                    <BarberView {...barber}/>
                </Pressable>
            );
        })
    }

    const renderCustomers = () => {
        return store.customers.map((customer, idx) => {
            return(
                <Pressable key={idx} style={[commonStyling.flexColumn, styles.user, styles.customer]}>
                    <CustomerView {...customer}/>
                </Pressable>
            );
        })
    }

    return (
        <View style={commonStyling.screen}>
            <View style={commonStyling.header}>
                <ButtonC styles={[commonStyling.headerButton]} image={images.backArrow}/>
            </View>

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
        color: "gray",
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
    }
});
