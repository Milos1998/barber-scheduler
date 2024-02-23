import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login, { LoginProps } from './src/screens/login/Login';
import NotificationScreen, { NotificationScreenProps } from './src/screens/NotificationScreen';
import ConfirmAppointment, { ConfirmAppointmentProps } from './src/screens/apointment/ConfirmAppointment';
import Appointments, { AppointmentsProps } from './src/screens/apointment/Appointments';
import Contact, { ContactProps } from './src/screens/Contact';
import ConfirmCancelation, { ConfirmCancelationProps } from './src/screens/apointment/ConfirmCancelation';
import ConfirmAllert, { ConfirmAllertProps } from './src/screens/apointment/ConfirmAllert';
import ConfirmAllertRemoval, { ConfirmAllertRemovalProps } from './src/screens/apointment/ConfirmAllertRemoval';
import EditServices, { EditServicesProps } from './src/screens/edit/EditServices';
import Ban, { BanProps } from './src/screens/Ban';
import ServiceEditor, { ServiceEditorProps } from './src/screens/edit/ServiceEditor';
import EditBarbers, { EditBarbersProps } from './src/screens/edit/EditBarbers';
import BarberEditor, { BarberEditorProps } from './src/screens/edit/BarberEditor';
import OrderScreen, { OrderScreenProps } from './src/screens/order/OrderScreen';
import BarbersMenu, { BarbersMenuProps } from './src/screens/barber/BarbersMenu';
import AllAppointments, { AllAppointmentsProps } from './src/screens/barber/AllAppointments';

export type RootStackParams = {
  Login: LoginProps
  NotificationScreen: NotificationScreenProps
  Ban: BanProps
  ConfirmAppointment: ConfirmAppointmentProps
  Appointments: AppointmentsProps
  Contact: ContactProps
  ConfirmCancelation: ConfirmCancelationProps
  ConfirmAllert: ConfirmAllertProps
  ConfirmAllertRemoval: ConfirmAllertRemovalProps
  EditServices: EditServicesProps
  ServiceEditor: ServiceEditorProps
  EditBarbers: EditBarbersProps
  BarberEditor: BarberEditorProps
  OrderScreen: OrderScreenProps
  BarbersMenu: BarbersMenuProps
  AllAppointments: AllAppointmentsProps
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AllAppointments'>
        <Stack.Screen name="Login" component={ Login }/>
        <Stack.Screen name="NotificationScreen" component={ NotificationScreen }/>
        <Stack.Screen name="Ban" component={ Ban }/>
        <Stack.Screen name="ConfirmAppointment" component={ ConfirmAppointment }/>
        <Stack.Screen name="Appointments" component={ Appointments }/>
        <Stack.Screen name="Contact" component={ Contact }/>
        <Stack.Screen name="ConfirmCancelation" component={ ConfirmCancelation }/>
        <Stack.Screen name="ConfirmAllert" component={ ConfirmAllert }/>
        <Stack.Screen name="ConfirmAllertRemoval" component={ ConfirmAllertRemoval }/>
        <Stack.Screen name="EditServices" component={ EditServices }/>
        <Stack.Screen name="ServiceEditor" component={ ServiceEditor }/>
        <Stack.Screen name="EditBarbers" component={ EditBarbers }/>
        <Stack.Screen name="BarberEditor" component={ BarberEditor }/>
        <Stack.Screen name="OrderScreen" component={ OrderScreen }/>
        <Stack.Screen name="BarbersMenu" component={ BarbersMenu }/>
        <Stack.Screen name="AllAppointments" component={ AllAppointments }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
