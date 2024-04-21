import React from 'react';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
import { PaperProvider } from 'react-native-paper';
import CustomNavigationbar from './src/CustomNavigationbar';

const Stack = createStackNavigator ();
 const App=()=>{
  return(
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationbar {...props}/>,
          }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Details" component={DetailsScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
 }
 export default App;