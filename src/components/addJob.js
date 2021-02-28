import React,{useState} from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import database from '@react-native-firebase/database'


const sendData = (job,nav )=>{
    const num = Math.random()*76432743432432
    const round = Math.floor(num)
    database().ref('jobs/'+ round).set({...job,key:round}).then(()=>{
        console.log('done')
        alert('sent')
    })
    .catch((err)=>{
        console.log(err)
    })
}

function AddJob({ navigation }) {
        const [getCompanyName,setCompanyName] = useState(null)
    const [getJobTitle,setJobTitle] = useState(null)
    const [getCompanyEmail,setCompanyEmail] = useState(null)
    const [getSalary,setSalary] = useState(null)
    const [getHours,setHours] = useState(null)
    const [getDesc,setDesc] = useState(null)

    const job = {
        companyName : getCompanyName,
        jobTitle : getJobTitle,
        companyEmail : getCompanyEmail,
        salary : getSalary,
        hours: getHours,
        desc : getDesc
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: 10, backgroundColor: '#00383b', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ width: 50, height: 50, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                    <Ionicons name='arrow-back' size={40} color='white' />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 23, fontWeight: '700', color: 'white' }}>Add Job</Text>
                </View>
                <View>

                </View>
            </View>
            <ScrollView>

                <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Company Name</Text>
                        <TextInput value={getCompanyName} onChangeText={(e)=>{setCompanyName(e)}} placeholder="Enter Company Name" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Job Title</Text>
                        <TextInput  value={getJobTitle} onChangeText={(e)=>{setJobTitle(e)}} placeholder="Enter Job Title" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Company Email</Text>
                        <TextInput  value={getCompanyEmail} onChangeText={(e)=>{setCompanyEmail(e)}} placeholder="Enter Company Email" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Working Hours</Text>
                        <TextInput value={getHours} onChangeText={(e)=>{setHours(e)}} placeholder="Enter Working Hours" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Salary Package Per Month</Text>
                        <TextInput value={getSalary} onChangeText={(e)=>{setSalary(e)}} keyboardType='numeric' placeholder="Enter salary" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '90%', marginBottom: 15 }}>
                        <Text style={{ color: 'gray', marginBottom: 5 }}>Enter Job Description</Text>
                        <TextInput value={getDesc} onChangeText={(e)=>{setDesc(e)}} numberOfLines={5} placeholder="Enter Job Description" style={{ borderColor: '#aba9a9', borderWidth: 0.5, padding: 8, borderRadius: 5, fontSize: 17 }} />
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                        <TouchableOpacity onPress={()=>sendData(job,navigation)} activeOpacity={0.8} style={{ width: '90%', backgroundColor: '#00383b', borderRadius: 30, padding: 10, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 29, fontWeight: '700' }}>Add Job</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default AddJob