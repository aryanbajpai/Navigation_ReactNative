import { NavigationContainer } from "@react-navigation/native";
import StackComp from "./Stack";
import DrawerComp from "./Drawer";
import TabComp from "./Tab";



export default function App() {
  return (
    <NavigationContainer>
        {/* <StackComp /> */}
        {/* <DrawerComp /> */}
        <TabComp />
    </NavigationContainer>
  );
}
