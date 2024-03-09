import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login, { LoginProps } from './src/screens/Login';
import Appointments, { AppointmentsProps } from './src/screens/customer/Appointments';
import Contact, { ContactProps } from './src/screens/Contact';
import Ban, { BanProps } from './src/screens/Ban';
import ServiceEditor, { ServiceEditorProps } from './src/screens/edit/ServiceEditor';
import OrderScreen, { OrderScreenProps } from './src/screens/customer/OrderScreen';
import BarbersMenu, { BarbersMenuProps } from './src/screens/barber/BarbersMenu';
import AllAppointments, { AllAppointmentsProps } from './src/screens/barber/AllAppointments';
import AllServices, { AllServicesProps } from './src/screens/barber/AllServices';
import AllUsers, { AllUsersProps } from './src/screens/barber/AllUsers';
import UserEditor, { UserEditorProps } from './src/screens/edit/UserEditor';
import { store } from './src/Store';
import AllBans, { AllBansProps } from './src/screens/barber/AllBans';
import AllNotes, { AllNotesProps } from './src/screens/barber/AllNotes';
import BusinessHoursEditor, { BusinessHoursEditorProps } from './src/screens/edit/BusinessHoursEditor';
import SetNote, { SetNoteProps } from './src/screens/barber/SetNote';
import SetBan, { SetBanProps } from './src/screens/barber/SetBan';

export type RootStackParams = {
  Login: LoginProps
  Ban: BanProps
  Appointments: AppointmentsProps
  Contact: ContactProps
  ServiceEditor: ServiceEditorProps
  AllServices: AllServicesProps
  AllUsers: AllUsersProps
  UserEditor: UserEditorProps
  OrderScreen: OrderScreenProps
  BarbersMenu: BarbersMenuProps
  AllAppointments: AllAppointmentsProps
  AllBans: AllBansProps
  AllNotes: AllNotesProps
  BusinessHoursEditor: BusinessHoursEditorProps
  SetNote: SetNoteProps,
  SetBan: SetBanProps
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Ban'>
        <Stack.Screen name="Login" component={ Login }/>
        <Stack.Screen name="Ban" component={ Ban }/>
        <Stack.Screen name="Appointments" component={ Appointments }/>
        <Stack.Screen name="Contact" component={ Contact }/>
        <Stack.Screen name="ServiceEditor" component={ ServiceEditor }/>
        <Stack.Screen name="AllServices" component={ AllServices }/>
        <Stack.Screen name="AllUsers" component={ AllUsers }/>
        <Stack.Screen name="UserEditor" component={ UserEditor } initialParams={{user: store.currentUser}}/>
        <Stack.Screen name="OrderScreen" component={ OrderScreen }/>
        <Stack.Screen name="BarbersMenu" component={ BarbersMenu }/>
        <Stack.Screen name="AllAppointments" component={ AllAppointments }/>
        <Stack.Screen name="AllBans" component={ AllBans }/>
        <Stack.Screen name="AllNotes" component={ AllNotes }/>
        <Stack.Screen name="BusinessHoursEditor" component={ BusinessHoursEditor }/>
        <Stack.Screen name="SetNote" component={ SetNote }/>
        <Stack.Screen name="SetBan" component={ SetBan }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
