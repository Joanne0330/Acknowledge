import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Provider as PaperProvider} from 'react-native-paper';

// Likely remove App Navigator once finishing updating react-navigation to V.5
import AppNavigator from './src/navigation';
// Main App Screens
import ViewAchievements from './src/screens/ViewAchievements';
import AddAchievement from './src/screens/AddAchievement';
import GraphAchievements from './src/screens/GraphAchievements';
import Profile from './src/screens/Profile';

// Authentication Screens
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
// Replaces createAppContainer from react-navigation V.4
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux'

const AuthStack = createStackNavigator()
const AchievementStack = createStackNavigator()
const GraphStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();

import { Provider } from 'react-redux'

import store from './src/redux/store'

function AuthenticationStackScreen() {
  const user = useSelector(state => state.user)
  return (

      <AuthStack.Navigator
        initialRouteName='ViewAchievements'
        screenOptions={{
          gestureEnabled: true,
          headerShown: false
        }}
        >
        if user.uid == undefined {

        <>
          <AuthStack.Screen
            name='Login'
            component={Login}
          />
          <AuthStack.Screen
            name='Signup'
            component={Signup}
          />
        </>}
        </AuthStack.Navigator>

  ) }

  function AchievementsStackScreen() {
    return (
      <AchievementStack.Navigator>
      <AchievementStack.Screen
          name='ViewAchievements'
          component={ViewAchievements}
        />
      <AchievementStack.Screen
        name='AddAchievement'
        component={AddAchievement}
      />
      </AchievementStack.Navigator>
    );
  }

function GraphStackScreen() {
  return (
    <GraphStack.Navigator>
    <GraphStack.Screen
      name='Graph Achievements'
      component={GraphAchievements}
    />
    </GraphStack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
      <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Feed"
           tabBarOptions={{
             activeTintColor: '#42f44b',
           }}>
           <Tab.Screen
             name="ViewAchievements"
             component={AchievementsStackScreen}
             options={{
               tabBarLabel: 'View Achievements',
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons name="home" color={color} size={size} />
               ),
             }}
           />
           <Tab.Screen
             name="GraphAchievements"
             component={GraphStackScreen}
             options={{
               tabBarLabel: 'Graph Achievements',
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons
                   name="settings"
                   color={color}
                   size={size}
                 />
               ),
             }}
           />
           <Tab.Screen
             name="Profile"
             component={Profile}
             options={{
               tabBarLabel: 'Profile',
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons
                   name="settings"
                   color={color}
                   size={size}
                 />
               ),
             }}
           />
         </Tab.Navigator>
       </NavigationContainer>

      </PaperProvider>
    </Provider>

  );
}
export default App;
