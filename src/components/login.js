import React, { useState,useEffect } from 'react'
import { Text, View, TextInput, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {GettingForCompanyFromFirebase,Login} from '../store/action/action'


function Logining({navigation,GettingForCompanyFromFirebase,Login}) {

    const [getLoginType, setLoginType] = useState(null)
    const [getEmail,setEmail] = useState(null)
    const [getPass,setPass] = useState(null)


    const data ={
        type:getLoginType,
        email:getEmail,
        pass:getPass
        
    }

    useEffect(()=>{
        GettingForCompanyFromFirebase()
    })

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#00777d', }}>
            <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'white', borderRadius: 40}}>
                    <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('../images/logo.png')} style={{ width: 100, height: 100 }} resizeMode='contain' />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View style={{ width: '90%' }}>
                            <Text style={{ color: 'gray' }}>Select Login Type</Text>
                            <DropDownPicker
                                items={[
                                    { label: 'Admin', value: 'Admin' },
                                    { label: 'Student', value: 'Student' },
                                    { label: 'Company', value: 'Company' },
                                ]}
                                placeholder='Select Login Type'
                                placeholderStyle={{ fontSize: 17, color: '#5e5e5e' }}
                                defaultValue={getLoginType}
                                labelStyle={{ fontSize: 17 }}
                                containerStyle={{ width: "100%", marginBottom: 20 }}
                                style={{ backgroundColor: '#fafafa', backgroundColor: 'rgba(0, 119, 125,0.6)', padding: 15 }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => { setLoginType(item.value) }}
                            />
                        </View>
                        <View style={{ width: '90%' }}>
                            <Text style={{ color: 'gray' }}>Enter Email</Text>
                            <TextInput value={getEmail} onChangeText={(e)=>{setEmail(e)}} style={styles.input} placeholder='Enter Email' />
                        </View>
                        <View style={{ width: '90%' }}>
                            <Text style={{ color: 'gray' }}>Enter Password</Text>
                            <TextInput  value={getPass} onChangeText={(e)=>{setPass(e)}} secureTextEntry={true} style={styles.input} placeholder='Enter Password' />
                        </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity onPress={()=>{Login(data,navigation)}} activeOpacity={0.8} style={{ width: '60%', backgroundColor: '#00383b', borderRadius: 25, padding: 10, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: '700' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                        <View style={{ width: '90%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ height: 1, backgroundColor: 'gray', width: '35%' }}></View>
                            <View>
                                <Text>OR</Text>
                            </View>
                            <View style={{ height: 1, backgroundColor: 'gray', width: '35%' }}></View>
                        </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('companysignup')}}  activeOpacity={0.8} style={{ width: '90%', backgroundColor: '#00383b', borderRadius: 25, padding: 10, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: '700' }}>Company Signup</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('collegesignup')}} activeOpacity={0.8} style={{ width: '90%', backgroundColor: '#00383b', borderRadius: 25, padding: 10, alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 25, fontWeight: '700' }}>Student Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: 'rgba(0, 119, 125,0.6)',
        borderRadius: 25,
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18,
        marginBottom: 20
    }
})

const mapDispatchToProps = (dispatch) => ({
    GettingForCompanyFromFirebase: () => dispatch(GettingForCompanyFromFirebase()),
    Login: (data,navigation) => dispatch(Login(data,navigation))
})

export default connect(null,mapDispatchToProps) (Logining)