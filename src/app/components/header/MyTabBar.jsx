/* ---------------------------------- Libs ---------------------------------- */
import { Animated, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
/* --------------------------------- Styles --------------------------------- */
import { styles } from "../../style/headBar";

export default function MyTabBar({ state, descriptors, navigation, position }) {
    return (
        <SafeAreaView style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                });

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : { selected: false }}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.button}
                    >
                        <Text style={styles.text}>
                            {label}
                        </Text>
                        <Animated.View style={{ opacity }}>
                            <View style={styles.view} />
                        </Animated.View>
                    </TouchableOpacity>
                );
            })}
        </SafeAreaView>
    );
}
