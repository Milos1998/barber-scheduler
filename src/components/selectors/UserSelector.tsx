import React from 'react';
import { StyleSheet } from 'react-native';
import { store } from '../../Store';
import ScrollViewC from '../customElements/ScrollViewC';
import CustomerView from '../views/CustomerView';
import ButtonC from '../customElements/ButtonC';
import { messages } from '../../constants/Messages';

type UserSelectorProps = {
    isMultiselect: boolean,
    wrapperStyle?: Object[],
    innerStyle?: Object[],
    horizontal?: boolean,
    buttonStyling?: Object[],
}

function UserSelector(props: UserSelectorProps) {
    const buttonStyle: Object[] = [styles.button];
    if (props.buttonStyling !== undefined) buttonStyle.push(...props.buttonStyling);
    const renderUsers = () => {
        return store.customers.map((user, idx) => {
            return(
                <ButtonC key={idx} styles={buttonStyle} textStyles={[styles.text]}>
                    <CustomerView {...user} style={styles.text}/>
                </ButtonC>
            );
        })
    }

    const multiSelectButton = <ButtonC label={messages.allUsers} styles={[...buttonStyle, styles.allButton]} textStyles={[styles.text]}/>;

    return (
        <ScrollViewC horizontal={props.horizontal} innerStyle={props.innerStyle} wrapperStyle={props.wrapperStyle}>
            {props.isMultiselect && multiSelectButton}
            {renderUsers()}
        </ScrollViewC>
    );
}

export default UserSelector;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "antiquewhite",
        width: "auto",
    },
    text: {
        fontSize: 14,
    },
    allButton: {
        backgroundColor: "aquamarine",
        width: "auto",
    },
});
