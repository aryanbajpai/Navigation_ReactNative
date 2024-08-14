import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";
import CourtList from "./screens/CourseList";
import Ionicons from "@expo/vector-icons/Ionicons"; // Ensure this package is installed
import StackComp from "./Stack";

const Tab = createBottomTabNavigator();

const TabComp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "below-icon", // Position label below the icon
        tabBarShowLabel: true, // Show labels
        tabBarActiveTintColor: "midnightblue", // Active tab color
        tabBarInactiveTintColor: "blue", // Inactive tab color
      }}
    >
      <Tab.Screen 
        name="Course List" 
        component={CourtList} // Ensure this component is correctly imported and used
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" size={23} color={color} /> // You can add an icon for this tab if needed
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "My Profile", // Custom label
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={23} color={color} />
          ),
          tabBarBadge: 3, // Notification badge
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Settings} // Ensure this component is correctly imported and used
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={23} color={color} /> // Icon for the settings tab
          ),
        }}
      />


      {/*NESTED ROUTES (NAVIGATION) */}
      
      <Tab.Screen 
        name="Stack Comp" 
        component={StackComp} // Ensure this component is correctly imported and used
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu" size={23} color={color} /> // Icon for the settings tab
          ),
          headerShown: false,
        }}
      />

    </Tab.Navigator>
  );
};

export default TabComp;
