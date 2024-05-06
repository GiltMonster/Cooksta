import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home"

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes () {
    return (
        <Navigator initialRouteName='home' screenOptions={{
            headerStyle: {
                backgroundColor: '#F6B5D2',
            },
            headerTintColor: '#fafafa',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Screen name="Home" component={Home} />
        </Navigator>
    );
}