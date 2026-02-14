import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HistoryScreen } from "../screens/HistoryScreen";
import { NewEntryScreen } from "../screens/NewEntryScreen";
import { AnalyticsScreen } from "../screens/AnalyticsScreen";

export type TabParamList = {
  History: undefined;
  NewEntry: undefined;
  Analytics: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="NewEntry" component={NewEntryScreen} options={{ title: "New" }} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
    </Tab.Navigator>
  );
}
