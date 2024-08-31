import { Text, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNav from "./screens/StackNav";
import DrawerNav from "./screens/DrawerNav";
import HomePage from "./screens/HomePage";
import TabNav from "./screens/TabNav";
import DrawerComp from "./Drawer";

const Stack = createNativeStackNavigator();

const StackComp = () => {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //for all the screens
        headerStyle: {
          backgroundColor: "#3d1f1d",
        },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold", fontSize: 21 },
        headerRight: () => (
          <Pressable
            onPress={() => alert("Menu button clicked!")}
            accessibilityLabel="Menu"
            accessibilityHint="Opens the menu"
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          </Pressable>
        ),

        contentStyle: {
          backgroundColor: "#df643f",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          title: "Welcome LOGO",
        }}
      />

      <Stack.Screen name="Stack" component={StackNav} />
      <Stack.Screen
        name="Drawer"
        component={DrawerComp}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Tab" component={TabNav} />
    </Stack.Navigator>
  );
};

export default StackComp;




{/* <Stack.Navigator
  initialRouteName="Home"
  screenOptions={{
    //for all the screens
    headerStyle: {
      backgroundColor: "#3d1f1d",
    },
    headerTintColor: "#fff",
    headerTitleStyle: { fontWeight: "bold", fontSize: 21 },
    headerRight: () => (
      <Pressable
        onPress={() => alert("Menu button clicked!")}
        accessibilityLabel="Menu"
        accessibilityHint="Opens the menu"
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
      </Pressable>
    ),

    contentStyle: {
      backgroundColor: "#df643f",
    },
  }}
>
  <Stack.Screen
    name="Home"
    component={HomePage}
    options={{
      title: "Welcome Home",
      //forSingle Screen only
      // headerStyle: {
      //   backgroundColor: '#3d1f1d'
      // },
      // headerTintColor: '#fff',
      // headerTitleStyle: { fontWeight: 'bold', fontSize: 21},
      // headerRight: () => (
      //   <Pressable onPress={() => alert('Menu button pressed!')}>
      //     <Text style={{color: '#fff', fontSize: 16}}>Menu</Text>
      //   </Pressable>
      // ),
      // contentStyle:{
      //   backgroundColor: '#df643f'
      // }
    }}
  />

  <Stack.Screen name="Stack" component={StackNav} />
  <Stack.Screen
    name="Drawer"
    component={DrawerComp}
    options={{ headerShown: false }}
    // initialParams={{
    //   name: "Default Name",
    // }}

    //Can be used when passing Static Data
    // options={({ route }) => ({    //To pass Dynamic Title through NAVIGATION
    //   title: route.params.name
    // })}
  />
  <Stack.Screen name="Tab" component={TabNav} />
</Stack.Navigator>; */}
