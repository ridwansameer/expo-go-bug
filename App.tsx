import { FlatList, StyleSheet, Text, View } from 'react-native';
import { QuizComponent } from './components/NewQuiz.component';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './screens/Details.screen';

const Stack = createNativeStackNavigator();

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen name='Home' component={HomeScreen} />
    //     <Stack.Screen name='Details' component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEE2B0',
  },
});
