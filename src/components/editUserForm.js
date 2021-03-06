import React, { useState,useEffect } from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { StudentRegister } from '../store/action/action'
import database from '@react-native-firebase/database'



const updating = (bio,key,props) => {
    database()
        .ref('studentusers/'+key)
        .update(bio)
        .then(() => {
            props.navigation.navigate('foradmin')
        });
}


function EditUser(props) {


    const [getGroup, setGroup] = useState(props.route.params.group)
    const [getGender, setGender] = useState(props.route.params.gender)
    const [getName, setName] = useState(props.route.params.name)
    const [getFatherName, setFatherName] = useState(props.route.params.fatherName)
    const [getClass, setClass] = useState(props.route.params.class)
    const [getMarks, setMarks] = useState(props.route.params.marks)
    const [getAge, setAge] = useState(props.route.params.age)
    const [getContact, setContact] = useState(props.route.params.contact)
    const [getExp, setExp] = useState(props.route.params.experience)



    const StudentBio = {
        name: getName,
        fatherName: getFatherName,
        class: getClass,
        marks: getMarks,
        age: getAge,
        email: props.route.params.email,
        pass: props.route.params.pass,
        contact: getContact,
        experience: getExp,
        group: getGroup,
        gender: getGender


    }
    const key = props.route.params.key


    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10, backgroundColor: '#00383b', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ width: 50, height: 50, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                    <Ionicons name='arrow-back' size={40} color='white' />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 23, fontWeight: '700', color: 'white' }} >Edit User</Text>
                </View>
                <View>

                </View>
            </View>
            <ScrollView>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Your Name</Text>
                        <TextInput value={getName} onChangeText={(e) => { setName(e) }} placeholder='Enter Name' style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>

                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Your Father's Name</Text>
                        <TextInput value={getFatherName} onChangeText={(e) => { setFatherName(e) }} placeholder="Enter Father's Name" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                        <View style={{ width: '45%', marginBottom: 15 }}>
                            <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Your Class</Text>
                            <TextInput value={getClass} onChangeText={(e) => { setClass(e) }} keyboardType='numeric' placeholder="Enter Your Class" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                        </View>
                        <View style={{ width: '45%', marginBottom: 15 }}>
                            <Text style={{ color: 'gray', marginBottom: 5 }}>Select Your Group</Text>
                            <DropDownPicker
                                items={[
                                    { label: 'ICS', value: 'ICS' },
                                    { label: 'Pre-Eng', value: 'Pre-Eng' },
                                    { label: 'Pre-Med', value: 'Pre-Med' },
                                    { label: 'Arts', value: 'Arts' },
                                    { label: 'Commerce', value: 'Commerce' },
                                ]}
                                placeholder='Select Group'
                                placeholderStyle={{ fontSize: 17, color: '#5e5e5e' }}
                                defaultValue={getGroup}
                                labelStyle={{ fontSize: 17 }}
                                containerStyle={{ width: "100%", height: 45 }}
                                style={{ backgroundColor: 'transparent' }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => { setGroup(item.value) }}
                            />
                        </View>
                    </View>
                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: '45%', marginBottom: 15 }}>
                            <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Matric Marks</Text>
                            <TextInput value={getMarks} onChangeText={(e) => { setMarks(e) }} keyboardType='numeric' placeholder='Enter Marks' style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                        </View>
                        <View style={{ width: '45%', marginBottom: 15 }}>
                            <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Your Age</Text>
                            <TextInput value={getAge} onChangeText={(e) => { setAge(e) }} keyboardType='numeric' placeholder='Enter Age' style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                        </View>
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Select Gender</Text>
                        <DropDownPicker
                            items={[
                                { label: 'Male', value: 'Male' },
                                { label: 'Female', value: 'Female' },

                            ]}
                            placeholder='Select Gender'
                            placeholderStyle={{ fontSize: 17, color: '#5e5e5e' }}
                            defaultValue={getGender}
                            labelStyle={{ fontSize: 17 }}
                            containerStyle={{ width: "100%", height: 45 }}
                            style={{ backgroundColor: 'transparent' }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => { setGender(item.value) }}
                        />
                    </View>

                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Contact Number</Text>
                        <TextInput value={getContact} onChangeText={(e) => { setContact(e) }} keyboardType='numeric' placeholder="Enter Contact " style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Your Experience</Text>
                        <TextInput value={getExp} onChangeText={(e) => { setExp(e) }} numberOfLines={5} placeholder="Enter Experience" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '100%', height: 1, backgroundColor: '#b8b8b8', marginBottom: 20, marginTop: 10 }}>

                    </View>
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                        <TouchableOpacity onPress={() => { updating(StudentBio,key,props) }} activeOpacity={0.8} style={{ width: '90%', backgroundColor: '#00383b', borderRadius: 30, padding: 10, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 29, fontWeight: '700' }}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const mapDispatchToProps = (dispatch) => ({
    // StudentRegister:(studentData,navigation)=>dispatch(StudentRegister(studentData,navigation))
})




export default connect(null, mapDispatchToProps)(EditUser)