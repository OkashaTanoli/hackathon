import React from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import database from '@react-native-firebase/database'







const deleteStd = ( key)=>{
    database().ref('jobs/'+ key).remove()
    alert('The student is deleted you would have to wait to see in data base it is deleted')
}

function JobsForAdmin({ navigation, jobs }) {


    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10, backgroundColor: '#00383b', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ width: 50, height: 50, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                    <Ionicons name='arrow-back' size={40} color='white' />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 23, fontWeight: '700', color: 'white' }} >
                        Jobs For Admin
                    </Text>
                </View>

                <Ionicons name='menu-outline' size={40} color='white' />


            </View>

            <ScrollView>

                <View style={{ padding: 10 }}>
                    {
                    jobs === null?
                    alert('no data available')
                    :
                    jobs.map((value, key) => {
                        const dataTwo = value[1]

                        return (

                            <View key={key} style={{ justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: 3, paddingBottom: 10, paddingTop: 25 }}>
                                <View style={{ width: '100%', alignItems: 'center' }}>
                                    <View style={{ padding: 10, backgroundColor: 'gray', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ color: 'white', fontSize: 14 }}>
                                            {key+1}
                                </Text>
                                    </View>
                                    <View style={{ height: 3, width: '20%', backgroundColor: 'gray', marginTop: 10, marginBottom: 10 }}></View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Company Name :
                                </Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={{ fontSize: 18 }}>
                                            {dataTwo.companyName}
                                </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Job Title :
                                </Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={{ fontSize: 18 }}>
                                            {dataTwo.jobTitle}
                                </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Company Email :
                                </Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={{ fontSize: 18 }}>
                                            {dataTwo.companyEmail}
                                </Text>
                                    </View>
                                </View>
                                
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Salary Package :
                                </Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={{ fontSize: 18 }}>
                                            {dataTwo.salay}
                                </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Working Hours :
                                </Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={{ fontSize: 18 }}>
                                            {dataTwo.hours}
                                </Text>
                                    </View>
                                </View>
                                <View style={{ marginBottom: 30 }}>
                                    <View style={{ width: '100%' }}>
                                        <Text style={{ fontSize: 18, fontWeight: '700' }}>
                                            Job Description :
                                </Text>
                                    </View>
                                    <View style={{ width: '100%' }}>
                                        <Text style={{ fontSize: 18 }}>
                                            {dataTwo.desc}
                                </Text>
                                    </View>
                                </View>
                                <View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}>
                                    <TouchableOpacity activeOpacity={0.8} style={{ width: '90%', backgroundColor: '#00383b', borderRadius: 30, padding: 10, alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 29, fontWeight: '700' }}>Apply now</Text>
                                    </TouchableOpacity>
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
        jobs: state.jobs,
    }
}

export default connect(mapStateToProps, null)(JobsForAdmin)