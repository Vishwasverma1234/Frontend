import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import RegisterScreen from '../features/auth/screens/RegisterScreen';
import LoginScreen from '../features/auth/screens/LoginScreen';
import HomeScreen from '../features/auth/screens/HomeScreen';
import AddEntryScreen from '../features/auth/screens/AddEntryScreen';
import IncomeSavingsScreen from '../features/auth/screens/IncomeSavingsScreen';
import LoanScreen from '../features/auth/screens/LoanScreen';
import ExpensesScreen from '../features/auth/screens/ExpensesScreen';
import NotificationsScreen from '../features/auth/screens/NotificationsScreen';
import BottomNavigation from '../components/bottomNavigation';

// initialise a stack nav obj (for def and config stack based transitions)
const Stack = createStackNavigator();

// create a component for the navigator
const AppNavigator = () => {
    const {token} = useContext(AuthContext)
    //console.log('Login Screen:', LoginScreen);
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Add an Entry" component={AddEntryScreen}/>
                <Stack.Screen name="Income and Savings" component={IncomeSavingsScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Expenses" component={ExpensesScreen} />
                <Stack.Screen name="Loans" component={LoanScreen}/>
                <Stack.Screen name="Notifications" component={NotificationsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;