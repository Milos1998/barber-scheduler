import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login, { LoginProps } from './src/screens/Login';
import Info, { InfoProps } from './src/screens/Info';
import SelectService, { SelectServiceProps } from './src/screens/SelectService';
import SelectBarber, { SelectBarberProps } from './src/screens/SelectBarber';
import ViewDates, { ViewDatesProps } from './src/screens/ViewDates';
import ViewHours, { ViewHoursProps } from './src/screens/ViewHours';
import ConfirmAppointment, { ConfirmAppointmentProps } from './src/screens/ConfirmAppointment';
import Appointments, { AppointmentsProps } from './src/screens/Appointments';
import Contact, { ContactProps } from './src/screens/Contact';
import ConfirmCancelation, { ConfirmCancelationProps } from './src/screens/ConfirmCancelation';
import ConfirmAllert, { ConfirmAllertProps } from './src/screens/ConfirmAllert';
import ConfirmAllertRemoval, { ConfirmAllertRemovalProps } from './src/screens/ConfirmAllertRemoval';

export type RootStackParams = {
  Login: LoginProps
  Info: InfoProps
  SelectService: SelectServiceProps
  SelectBarber: SelectBarberProps
  ViewDates: ViewDatesProps
  ViewHours: ViewHoursProps
  ConfirmAppointment: ConfirmAppointmentProps
  Appointments: AppointmentsProps
  Contact: ContactProps
  ConfirmCancelation: ConfirmCancelationProps
  ConfirmAllert: ConfirmAllertProps
  ConfirmAllertRemoval: ConfirmAllertRemovalProps
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ConfirmAllertRemoval'>
        <Stack.Screen name="Login" component={ Login }/>
        <Stack.Screen name="Info" component={ Info }/>
        <Stack.Screen name="SelectService" component={ SelectService }/>
        <Stack.Screen name="SelectBarber" component={ SelectBarber }/>
        <Stack.Screen name="ViewDates" component={ ViewDates }/>
        <Stack.Screen name="ViewHours" component={ ViewHours }/>
        <Stack.Screen name="ConfirmAppointment" component={ ConfirmAppointment }/>
        <Stack.Screen name="Appointments" component={ Appointments }/>
        <Stack.Screen name="Contact" component={ Contact }/>
        <Stack.Screen name="ConfirmCancelation" component={ ConfirmCancelation }/>
        <Stack.Screen name="ConfirmAllert" component={ ConfirmAllert }/>
        <Stack.Screen name="ConfirmAllertRemoval" component={ ConfirmAllertRemoval }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
