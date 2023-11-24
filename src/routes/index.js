import { createStackNavigator } from '@react-navigation/stack'

import Home from "../screens/Home"
import Cadastro from '../screens/Cadastro'
import Login from '../screens/Login'
import Vacinas from '../screens/Vacinas'

const Stack = createStackNavigator()

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Vacinas'
                component={Vacinas}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}