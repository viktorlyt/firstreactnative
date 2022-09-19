import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FullPostScreen } from '../screens/FullPostScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'News' }} />
        <Stack.Screen name='FullPost' component={FullPostScreen} options={{ title:  'Article' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};