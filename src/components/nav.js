import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from './login'
import CollegeSignup from './collageSignup'
import CompanySignup from './companySignup'
import ForCompany from './forCompany'
import ForCompanyIndividual from './forCompanyIndividual'
import AddJob from './addJob'
import ForStudent from './forStudent'
import Jobs from "./jobs";
import ForAdmin from './forAdmin'
import ForAdminCompany from './forAdminCompany'
import JobsForAdmin from './jobsForAdmin'
import AdminCompanyIndividual from './adminCompanyIndividual'
import EditUser from './editUserForm'


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()



function Navig() {
    return (

        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen options={{
                    headerShown: false,
                }} name='Login' component={Login} />

                <Stack.Screen options={{
                    headerShown: false,
                }} name='foradmin' component={ForAdmin} />

                <Stack.Screen options={{
                    headerShown: false,
                }} name='edituser' component={EditUser} />


                <Stack.Screen options={{
                    headerShown: false,
                }} name='foradmincompany' component={ForAdminCompany} />
                <Stack.Screen options={{
                    headerShown: false,
                }} name='jobsforadmin' component={JobsForAdmin} />

                <Stack.Screen options={{
                    headerShown: false,
                }} name='addjob' component={AddJob} />
                <Stack.Screen options={{
                    headerShown: false,
                }} name='forstudent' component={ForStudent} />



                <Stack.Screen options={{
                    headerShown: false,
                }} name='forCompany' component={ForCompany} />


                <Stack.Screen options={{
                    headerShown: false,
                }} name='jobs' component={Jobs} />



                <Stack.Screen options={{
                    headerShown: false,
                }} name='collegesignup' component={CollegeSignup} />




                <Stack.Screen options={{
                    headerShown: false,
                }} name='companysignup' component={CompanySignup} />

                <Stack.Screen options={{
                    headerShown: false,
                }} name='forcompanyindividual' component={ForCompanyIndividual} />
                
                <Stack.Screen options={{
                    headerShown: false,
                }} name='admincompanyindividual' component={AdminCompanyIndividual} />




            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navig







