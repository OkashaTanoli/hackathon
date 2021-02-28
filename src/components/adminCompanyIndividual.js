import React, { useEffect } from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

function AdminCompanyIndividual(props) {
    useEffect(() => {
        console.log(props.route.params)
    })
    return (


        <View style={{ flex: 1 }}>
            <View style={{ padding: 10, backgroundColor: '#00383b', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ width: 50, height: 50, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                    <Ionicons name='arrow-back' size={40} color='white' />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 23, fontWeight: '700', color: 'white' }} >{`${props.route.params.name} Data`}</Text>
                </View>
                <View>
                    {props.route.params.gender === 'Male' ?
                        <Image source={require('../images/male.png')} style={{ width: 50, height: 50 }} resizeMode='contain' />
                        :
                        <Image source={require('../images/female.png')} style={{ width: 50, height: 50 }} resizeMode='contain' />
                    }
                </View>
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center', padding: 10 }}>

                    <TouchableOpacity onPress={() => { props.navigation.navigate('edituser', props.route.params) }} style={{ alignItems: 'center', width: '50%', backgroundColor: '#00383b', padding: 5, borderRadius: 5 }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Edit</Text>
                    </TouchableOpacity>

                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20, paddingBottom: 10 }}>
                        <View style={{ width: '40%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Name</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20 }}>{props.route.params.name}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20, paddingBottom: 10 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Father's Name</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20 }}>{props.route.params.fatherName}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20, paddingBottom: 10 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Class</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20 }}>{props.route.params.class}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20, paddingBottom: 10 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Group</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20 }}>{props.route.params.group}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20, paddingBottom: 10 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Matric Marks</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20 }}>{props.route.params.marks}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20, paddingBottom: 10 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Age</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20 }}>{props.route.params.age}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20, paddingBottom: 10 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Gender</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20 }}>{props.route.params.gender}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20, paddingBottom: 10 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Email</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 18 }}>{props.route.params.email}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop: 20, paddingBottom: 10 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Contact</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20 }}>{props.route.params.contact}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 20, paddingBottom: 40 }}>
                        <View style={{ width: '50%' }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>Experience : </Text>
                        </View>
                        <View style={{ width: '100%' }}>
                            <Text style={{ fontSize: 20 }}>{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{props.route.params.experience}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default AdminCompanyIndividual