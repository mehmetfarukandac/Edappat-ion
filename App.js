import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//Screens
import EducationScreen from './screens/Education';
import DetailsScreen from './screens/DetailsScreen';
import Content from './screens/Content';
import HomeScreen from './screens/Home';



const Stack = createNativeStackNavigator();



export default function App() {


  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="Education"
            component={EducationScreen}
            options={{
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          // initialParams={{ itemId: 42 }}
          />
          <Stack.Screen
            name="Content"
            component={Content}
            options={{
              headerStyle: {
                backgroundColor: '#F0F0F0',
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: "#000000"
              },
              headerTitleAlign: 'center'
            }}
          // initialParams={{ itemId: 42 }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
