import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login, { LoginProps } from './src/screens/Login';
import NotificationScreen, { NotificationScreenProps } from './src/screens/NotificationScreen';
import SelectService, { SelectServiceProps } from './src/screens/serviceScreens/SelectService';
import SelectBarber, { SelectBarberProps } from './src/screens/serviceScreens/SelectBarber';
import ViewDates, { ViewDatesProps } from './src/screens/serviceScreens/ViewDates';
import ViewHours, { ViewHoursProps } from './src/screens/serviceScreens/ViewHours';
import ConfirmAppointment, { ConfirmAppointmentProps } from './src/screens/serviceScreens/ConfirmAppointment';
import Appointments, { AppointmentsProps } from './src/screens/apointment/Appointments';
import Contact, { ContactProps } from './src/screens/Contact';
import ConfirmCancelation, { ConfirmCancelationProps } from './src/screens/apointment/ConfirmCancelation';
import ConfirmAllert, { ConfirmAllertProps } from './src/screens/allert/ConfirmAllert';
import ConfirmAllertRemoval, { ConfirmAllertRemovalProps } from './src/screens/allert/ConfirmAllertRemoval';
import SetInfo, { SetInfoProps } from './src/screens/setInfo/SetInfo';
import UsersSelection, { UsersSelectionProps } from './src/screens/user/UsersSelection';
import SetInfoConfirmation, { SetInfoConfirmationProps } from './src/screens/setInfo/SetInfoConfirmation';
import EditServices, { EditServicesProps } from './src/screens/editScreens/EditServices';
import Ban, { BanProps } from './src/screens/Ban';
import ServiceEditor, { ServiceEditorProps } from './src/screens/editScreens/ServiceEditor';
import EditBarbers, { EditBarbersProps } from './src/screens/editScreens/EditBarbers';
import BarberEditor, { BarberEditorProps } from './src/screens/editScreens/BarberEditor';

export type RootStackParams = {
  Login: LoginProps
  NotificationScreen: NotificationScreenProps
  Ban: BanProps
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
  UsersSelection: UsersSelectionProps
  SetInfo: SetInfoProps
  SetInfoConfirmation: SetInfoConfirmationProps
  EditServices: EditServicesProps
  ServiceEditor: ServiceEditorProps
  EditBarbers: EditBarbersProps
  BarberEditor: BarberEditorProps
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BarberEditor'>
        <Stack.Screen name="Login" component={ Login }/>
        <Stack.Screen name="NotificationScreen" component={ NotificationScreen }/>
        <Stack.Screen name="Ban" component={ Ban }/>
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
        <Stack.Screen name="UsersSelection" component={ UsersSelection }/>
        <Stack.Screen name="SetInfo" component={ SetInfo }/>
        <Stack.Screen name="SetInfoConfirmation" component={ SetInfoConfirmation }/>
        <Stack.Screen name="EditServices" component={ EditServices }/>
        <Stack.Screen name="ServiceEditor" component={ ServiceEditor }/>
        <Stack.Screen name="EditBarbers" component={ EditBarbers }/>
        <Stack.Screen name="BarberEditor" component={ BarberEditor }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
