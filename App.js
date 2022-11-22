import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "./components/TelaFontAwesome";
import Zocial from "./components/TelaZocial";
import SimpleLineIcons from "./components/TelaSimpleLineIcons";

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