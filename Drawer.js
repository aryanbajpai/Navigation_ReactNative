import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';

const Drawer = createDrawerNavigator();

const DrawerComp = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "My Dashboard",
          drawerLabel: "Dashboard Label",
          drawerActiveTintColor: "#333",
          drawerActiveBackgroundColor: "lightblue",
          drawerContentStyle: {
            backgroundColor: "#c6cdef",
          },
        }}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerComp;
