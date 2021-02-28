import React from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import database from '@react-native-firebase/database'




const deleteStd = ( key)=>{
    database().ref('companyusers/'+ key).remove()
    alert('The student is deleted you would have to wait to see in data base it is deleted')
}

function ForAdminCompany({ navigation, company }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10, backgroundColor: '#00383b', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ width: 50, height: 50, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                    <Ionicons name='arrow-back' size={40} color='white' />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 23, fontWeight: '700', color: 'white' }} >Company Data for Admin</Text>
                </View>

                <Ionicons name='menu-outline' size={40} color='white' />


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('jobsforadmin') }} activeOpacity={0.8} style={{ backgroundColor: '#006e0d', width: '90%', alignItems: 'center', padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>See Jobs</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>

                <View style={{ padding: 10 }}>
                    
                    {
                        company === null ?
                        false:
                       company.map((value, key) => {
                        const dataTwo = value[1]
                        return (

                            <View key={key} style={{ justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: 2, paddingBottom: 10, paddingTop: 10, marginBottom: 10 }}>
                                <View style={{ width: '100%', alignItems: 'center' }}>
                                    <View style={{ padding: 10, backgroundColor: 'gray', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ color: 'white', fontSize: 14 }}>{key + 1}</Text>
                                    </View>
                                    <View style={{ height: 3, width: '20%', backgroundColor: 'gray', marginTop: 10, marginBottom: 10 }}></View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Company Name : </Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={{ fontSize: 18 }}>{dataTwo.companyName}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>CEO Name : </Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={{ fontSize: 18 }}>{dataTwo.ceoName}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Established Year : </Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={{ fontSize: 18 }}>{dataTwo.companyEst}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Company Email : </Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={{ fontSize: 18 }}>{dataTwo.email}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Total Employees : </Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={{ fontSize: 18 }}>{dataTwo.totalEmp}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => { deleteStd(dataTwo.key) }} style={{ backgroundColor: '#00383b', padding: 5, borderRadius: 5 }}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        )

                    })}


                </View>

            </ScrollView>
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        company: state.companyData,
    }
}

export default connect(mapStateToProps, null)(ForAdminCompany)