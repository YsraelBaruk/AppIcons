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
        <ItenMenu name="Font Awesome" component={FontAwesome}/>
        <ItenMenu name="Zocial" component={Zocial}/>
        <ItenMenu name="Simple Line Icons" component={SimpleLineIcons}/>
      </Menu>
    </NavigationContainer>
  );
}