import React,{useEffect} from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image,BackHandler } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import {Signout} from '../store/action/action'

function ForStudent({ navigation, company,Signout }) {

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
                    <Text style={{ fontSize: 23, fontWeight: '700', color: 'white' }} >Company Data</Text>
                </View>

                <Ionicons name='menu-outline' size={40} color='white' />


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingBottom: 10, borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                <View style={{ width: '50%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={()=>{Signout(navigation)}} activeOpacity={0.8} style={{ backgroundColor: '#990a00', width: '90%', alignItems: 'center', padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '50%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('jobs') }} activeOpacity={0.8} style={{ backgroundColor: '#006e0d', width: '90%', alignItems: 'center', padding: 10, borderRadius: 10 }}>
                        <Text style={{ fontSize: 25, fontWeight: '700', color: 'white' }}>See Jobs</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
              
                <View style={{ padding: 10 }}>
                {
                    company === null ?
                    alert('no data available'):
                company.map((value, key) => {
                    const dataTwo = value[1]
                    return(
                        
                    <View key={key} style={{ justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: 2, paddingBottom: 10, paddingTop: 10, marginBottom: 10 }}>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <View style={{ padding: 10, backgroundColor: 'gray', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ color: 'white', fontSize: 14 }}>{key+1}</Text>
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

const mapDispatchToProps = (dispatch) => ({
    Signout:(navigation)=>dispatch(Signout(navigation))
})

export default connect(mapStateToProps, mapDispatchToProps)(ForStudent)