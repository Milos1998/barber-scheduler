import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login, { LoginProps } from './src/screens/Login';
import Appointments, { AppointmentsProps } from './src/screens/apointment/Appointments';
import Contact, { ContactProps } from './src/screens/Contact';
import Ban, { BanProps } from './src/screens/Ban';
import ServiceEditor, { ServiceEditorProps } from './src/screens/edit/ServiceEditor';
import OrderScreen, { OrderScreenProps } from './src/screens/order/OrderScreen';
import BarbersMenu, { BarbersMenuProps } from './src/screens/barber/BarbersMenu';
import AllAppointments, { AllAppointmentsProps } from './src/screens/barber/AllAppointments';
import AllServices, { AllServicesProps } from './src/screens/barber/AllServices';
import AllUsers, { AllUsersProps } from './src/screens/barber/AllUsers';
import UserEditor, { UserEditorProps } from './src/screens/edit/UserEditor';
import { store } from './src/Store';

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
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AllServices'>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
