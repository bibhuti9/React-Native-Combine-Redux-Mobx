import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform, Text} from 'react-native';

import {navigationRef} from './src/utilities/navigation';
import BottomStack from './src/Navigators/BottomStack';
import StatusBarC from './src/components/commonComponent/StatusBar/StatusBarC';
import {COLORS} from './src/theme/color';
import {SafeAreaProvider} from 'react-native-safe-area-context';

console.log(`Application run in ${Platform.OS == 'ios' ? 'IOS' : 'android'}`);

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBarC backgroundColor={COLORS.primary} />
      <NavigationContainer
        ref={navigationRef}
        onReady={() => <Text>Loading</Text>}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomStack" component={BottomStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
