/* ---------------------------------- Libs ---------------------------------- */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
/* ---------------------------------- Pages --------------------------------- */
import Timeline from "../screens/Timeline"
import MyPages from "../screens/MyPages";
import RankUp from "../screens/RankUp";

/* ------------------------------- Components ------------------------------- */
import MyTabBar from '../components/header/MyTabBar';

const { Screen, Navigator } = createMaterialTopTabNavigator();

export default function StackRoutes() {
    return (
        <Navigator initialRouteName={'Timeline'} tabBar={props => <MyTabBar {...props} />} screenOptions={{
            tabBarLabelStyle: { fontSize: 22 },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: 'powderblue' },
        }}>
            <Screen name="Timeline" component={Timeline} />
            <Screen name="Rank Up" component={RankUp} />
            <Screen name="My Page" component={MyPages} />
        </Navigator>
    );
}

