import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "./components/FontAwesome";
import Zocial from "./components/Zocial";
import SimpleLineIcons from "./components/SimpleLineIcons";

const Menu = createBottomTabNavigator().Navigator;
const ItenMenu = createBottomTabNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <ItenMenu name="FontAwesome" component={FontAwesome}/>
        <ItenMenu name="Zocial" component={Zocial}/>
        <ItenMenu name="SimpleLineIcons" component={SimpleLineIcons}/>
      </Menu>
    </NavigationContainer>
  );
}