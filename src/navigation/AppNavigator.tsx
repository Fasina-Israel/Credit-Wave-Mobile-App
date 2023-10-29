
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../ducks';
import store from '../redux/store';
import AuthenticationScreen from '../screens/auth/index';
import OnboardScreen from '../screens/onBoard/OnboardScreen';


const AppNavigator = () => {

    const Stack = createNativeStackNavigator();
    const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

    const navigationRef = useNavigationContainerRef();

    const isUserOnboard = useSelector(auth.selectors.isUserOnboard)


    useEffect(() => {
        console.log("store", store.getState(), isUserOnboard)
    }, [isUserOnboard])
    return (
        <NavigationContainer
            ref={navigationRef}
            onStateChange={(state) =>
                AsyncStorage.setItem(
                    NAVIGATION_PERSISTENCE_KEY,
                    JSON.stringify(state)
                )
            }
        >
            <Stack.Navigator screenOptions={{ presentation: "modal" }}>
                {isUserOnboard ? (<Stack.Screen
                    name="AuthenticationPage"
                    component={AuthenticationScreen}
                    options={{ title: 'AuthenticationPage', headerShown: false }}
                />
                ) :
                    <Stack.Screen name="onBoardPage" component={OnboardScreen}
                        options={{ header: () => null }} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator