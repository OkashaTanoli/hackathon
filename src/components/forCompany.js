import React, { useEffect } from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image, BackHandler } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { GettingForCompany, Signout } from '../store/action/action'
import { connect } from 'react-redux';


function ForCompany({ navigation, GettingForCompany, students, current, Signout }) {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
    })

    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10, backgroundColor: '#00383b', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Ionicons name='home' size={40} color='white' />
                <View>
                    <Text style={{ fontSize: 23, fontWeight: '700', color: 'white' }} >Students Data</Text>
                </View>

                <Ionicons name='menu-outline' size={40} color='white' />


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                <View style={{ width: '50%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { Signout(navigation) }} activeOpacity={0.8} style={{ backgroundColor: '#990a00', width: '90%', alignItems: 'center', padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '50%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('addjob') }} activeOpacity={0.8} style={{ backgroundColor: '#006e0d', width: '90%', alignItems: 'center', padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>Add Job</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>

                <View style={{ padding: 10 }}>
                    {

                        students.map((data, key) => {
                            const dataTwo = data[1]
                            return (
                                <View key={key} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: 2, paddingBottom: 10, paddingTop: 10 }}>
                                    <View style={{ width: 80, height: 80, borderRadius: 50, backgroundColor: '#028fa8', overflow: 'hidden', borderColor: 'black', borderWidth: 5, justifyContent: 'center', alignItems: 'center' }}>
                                        {dataTwo.gender === 'Female' ?
                                            <Image source={require('../images/female.png')} style={{ width: 70, height: 60 }} resizeMode='contain' />
                                            :
                                            <Image source={require('../images/male.png')} style={{ width: 70, height: 60 }} resizeMode='contain' />
                                        }
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 20, color: '#575757' }}>{dataTwo.name}</Text>
                                        <Text style={{ fontSize: 16, color: 'gray' }}>{dataTwo.email}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { navigation.navigate('forcompanyindividual', dataTwo) }} style={{ backgroundColor: '#00383b', padding: 5, borderRadius: 5 }}>
                                        <Text style={{ fontSize: 20, color: 'white' }}>View Details</Text>
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
        students: state.studentData,
        current: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => ({
    GettingForCompany: () => dispatch(GettingForCompany()),
    Signout: (navigation) => dispatch(Signout(navigation))
})


export default connect(mapStateToProps, mapDispatchToProps)(ForCompany)