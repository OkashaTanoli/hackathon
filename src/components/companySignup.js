import React, { useState } from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import {CompanyRegister} from '../store/action/action'


function CompanySignup({ navigation,CompanyRegister }) {

    const [getCompanyName,setCompanyName] = useState(null)
    const [getCEOName,setCEOName] = useState(null)
    const [getCompanyEst,setCompanyEst] = useState(null)
    const [getTotalComEmp,setTotalComEmp] = useState(null)
    const [getEmail,setEmail] = useState(null)
    const [getPass,setPass] = useState(null)
    const [getContact,setContact] = useState(null)



    const CompanyBio = {
        companyName : getCompanyName,
        ceoName : getCEOName,
        companyEst : getCompanyEst,
        totalEmp : getTotalComEmp,
        email : getEmail,
        pass : getPass,
        contact : getContact
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10, backgroundColor: '#00383b', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ width: 50, height: 50, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                    <Ionicons name='arrow-back' size={40} color='white' />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 23, fontWeight: '700', color: 'white' }} >Company Regestration</Text>
                </View>
                <View>

                </View>
            </View>
            <ScrollView>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Company Name</Text>
                        <TextInput value={getCompanyName} onChangeText={(e)=>{setCompanyName(e)}} placeholder='Enter Company Name' style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>

                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter CEO Name</Text>
                        <TextInput value={getCEOName} onChangeText={(e)=>{setCEOName(e)}} placeholder="Enter CEO Name" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Company Established Year</Text>
                        <TextInput value={getCompanyEst} onChangeText={(e)=>{setCompanyEst(e)}} keyboardType='numeric' placeholder="Enter Company Established Year" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Total Company Employees</Text>
                        <TextInput value={getTotalComEmp} onChangeText={(e)=>{setTotalComEmp(e)}} keyboardType='numeric' placeholder="Enter Total Employees" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Your Email</Text>
                        <TextInput value={getEmail} onChangeText={(e)=>{setEmail(e)}} keyboardType='email-address' placeholder="Enter Email" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Contact Number</Text>
                        <TextInput value={getContact} onChangeText={(e)=>{setContact(e)}} placeholder="Enter Contact Number" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Your Password</Text>
                        <TextInput value={getPass} onChangeText={(e)=>{setPass(e)}} secureTextEntry={true} placeholder="Enter Password" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>


                    <View style={{ width: '100%', height: 1, backgroundColor: '#b8b8b8', marginBottom: 20, marginTop: 10 }}>

                    </View>
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                        <TouchableOpacity onPress={()=>{CompanyRegister(CompanyBio,navigation)}} activeOpacity={0.8} style={{ width: '90%', backgroundColor: '#00383b', borderRadius: 30, padding: 10, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 29, fontWeight: '700' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}



const mapDispatchToProps = (dispatch) =>({
    CompanyRegister:(companyData,navigation)=>dispatch(CompanyRegister(companyData,navigation))
})


export default connect(null,mapDispatchToProps) (CompanySignup)