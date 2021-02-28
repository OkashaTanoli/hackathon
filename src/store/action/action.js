import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CompanyRegister = (companyData, navigation) => {
    return (dispatch) => {
        // dispatch({type:'LoginError',payload:''})
        // console.log(companyData.companyName)

        const dataEmail = companyData.email
        const emailsplit = dataEmail.split('')
        for (var i = 0; i < emailsplit.length; i++) {
            if (emailsplit[i] === "!") {
                emailsplit.splice(i, 1, 1)
            } else if (emailsplit[i] === '@') {
                emailsplit.splice(i, 1, 2)
            } else if (emailsplit[i] === '#') {
                emailsplit.splice(i, 1, 3)
            } else if (emailsplit[i] === '$') {
                emailsplit.splice(i, 1, 4)
            } else if (emailsplit[i] === '%') {
                emailsplit.splice(i, 1, 5)
            } else if (emailsplit[i] === '^') {
                emailsplit.splice(i, 1, 6)
            } else if (emailsplit[i] === '&') {
                emailsplit.splice(i, 1, 7)
            } else if (emailsplit[i] === '*') {
                emailsplit.splice(i, 1, 8)
            } else if (emailsplit[i] === '(') {
                emailsplit.splice(i, 1, 9)
            } else if (emailsplit[i] === ')') {
                emailsplit.splice(i, 1, 0)
            } else if (emailsplit[i] === '/') {
                emailsplit.splice(i, 1, 10)
            } else if (emailsplit[i] === '<') {
                emailsplit.splice(i, 1, 11)
            } else if (emailsplit[i] === '>') {
                emailsplit.splice(i, 1, 12)
            } else if (emailsplit[i] === '"') {
                emailsplit.splice(i, 1, 13)
            } else if (emailsplit[i] === "'") {
                emailsplit.splice(i, 1, 14)
            } else if (emailsplit[i] === "{") {
                emailsplit.splice(i, 1, 15)
            } else if (emailsplit[i] === "}") {
                emailsplit.splice(i, 1, 16)
            } else if (emailsplit[i] === ".") {
                emailsplit.splice(i, 1, 17)
            } else if (emailsplit[i] === "+") {
                emailsplit.splice(i, 1, 18)
            } else if (emailsplit[i] === "-") {
                emailsplit.splice(i, 1, 19)
            } else if (emailsplit[i] === "_") {
                emailsplit.splice(i, 1, 20)
            } else if (emailsplit[i] === "=") {
                emailsplit.splice(i, 1, 21)
            } else if (emailsplit[i] === "|") {
                emailsplit.splice(i, 1, 22)
            } else if (emailsplit[i] === "`") {
                emailsplit.splice(i, 1, 23)
            } else if (emailsplit[i] === ";") {
                emailsplit.splice(i, 1, 24)
            } else if (emailsplit[i] === ":") {
                emailsplit.splice(i, 1, 25)
            } else if (emailsplit[i] === "]") {
                emailsplit.splice(i, 1, 26)
            } else if (emailsplit[i] === "[") {
                emailsplit.splice(i, 1, 27)
            } else if (emailsplit[i] === "~") {
                emailsplit.splice(i, 1, 28)
            }
        }
        const joining = emailsplit.join('')
        console.log(joining)

        auth()
            .createUserWithEmailAndPassword(companyData.email, companyData.pass)
            .then((val) => {

                database().ref('companyusers/' + joining).set({ ...companyData, key: joining }).then((val) => {
                    navigation.navigate('forCompany')
                    const jsonData = JSON.stringify(companyData)
                    AsyncStorage.setItem('companyData', jsonData)
                })
                    .catch((err) => {
                        console.log('error', err)
                    });
                console.log('done')

            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                if (error.code === 'auth/weak-password') {
                    alert('Enter strong password');
                }
            });
    }
}



const StudentRegister = (studentData, navigation) => {
    return (dispatch) => {
        // dispatch({type:'LoginError',payload:''})
        // console.log(studentData)


        const dataEmail = studentData.email
        const emailsplit = dataEmail.split('')
        for (var i = 0; i < emailsplit.length; i++) {
            if (emailsplit[i] === "!") {
                emailsplit.splice(i, 1, 1)
            } else if (emailsplit[i] === '@') {
                emailsplit.splice(i, 1, 2)
            } else if (emailsplit[i] === '#') {
                emailsplit.splice(i, 1, 3)
            } else if (emailsplit[i] === '$') {
                emailsplit.splice(i, 1, 4)
            } else if (emailsplit[i] === '%') {
                emailsplit.splice(i, 1, 5)
            } else if (emailsplit[i] === '^') {
                emailsplit.splice(i, 1, 6)
            } else if (emailsplit[i] === '&') {
                emailsplit.splice(i, 1, 7)
            } else if (emailsplit[i] === '*') {
                emailsplit.splice(i, 1, 8)
            } else if (emailsplit[i] === '(') {
                emailsplit.splice(i, 1, 9)
            } else if (emailsplit[i] === ')') {
                emailsplit.splice(i, 1, 0)
            } else if (emailsplit[i] === '/') {
                emailsplit.splice(i, 1, 10)
            } else if (emailsplit[i] === '<') {
                emailsplit.splice(i, 1, 11)
            } else if (emailsplit[i] === '>') {
                emailsplit.splice(i, 1, 12)
            } else if (emailsplit[i] === '"') {
                emailsplit.splice(i, 1, 13)
            } else if (emailsplit[i] === "'") {
                emailsplit.splice(i, 1, 14)
            } else if (emailsplit[i] === "{") {
                emailsplit.splice(i, 1, 15)
            } else if (emailsplit[i] === "}") {
                emailsplit.splice(i, 1, 16)
            } else if (emailsplit[i] === ".") {
                emailsplit.splice(i, 1, 17)
            } else if (emailsplit[i] === "+") {
                emailsplit.splice(i, 1, 18)
            } else if (emailsplit[i] === "-") {
                emailsplit.splice(i, 1, 19)
            } else if (emailsplit[i] === "_") {
                emailsplit.splice(i, 1, 20)
            } else if (emailsplit[i] === "=") {
                emailsplit.splice(i, 1, 21)
            } else if (emailsplit[i] === "|") {
                emailsplit.splice(i, 1, 22)
            } else if (emailsplit[i] === "`") {
                emailsplit.splice(i, 1, 23)
            } else if (emailsplit[i] === ";") {
                emailsplit.splice(i, 1, 24)
            } else if (emailsplit[i] === ":") {
                emailsplit.splice(i, 1, 25)
            } else if (emailsplit[i] === "]") {
                emailsplit.splice(i, 1, 26)
            } else if (emailsplit[i] === "[") {
                emailsplit.splice(i, 1, 27)
            } else if (emailsplit[i] === "~") {
                emailsplit.splice(i, 1, 28)
            }
        }
        const joining = emailsplit.join('')
        console.log(joining)

        auth()
            .createUserWithEmailAndPassword(studentData.email, studentData.pass)
            .then((val) => {

                database().ref('studentusers/' + joining).set({ ...studentData, key: joining }).then((val) => {

                    navigation.navigate('forstudent')
                    const jsonData = JSON.stringify(studentData)
                    AsyncStorage.setItem('companyData', jsonData)
                })
                    .catch((err) => {
                        console.log('error', err)
                        alert(err)
                    });

            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                if (error.code === 'auth/weak-password') {
                    alert('Enter strong password');
                }
            });
    }
}



const GettingForCompany = () => {
    return async (dispatch) => {
        try {
            const jsonValue = await AsyncStorage.getItem('companyData')
            const pureVal = JSON.parse(jsonValue)
            dispatch({ type: 'CurrentUser', payload: pureVal })

        } catch (e) {
            console.log('error', e)
        }


    }
}

const GettingForCompanyFromFirebase = () => {
    return (dispatch) => {


        database()
            .ref('studentusers')
            .on('value', snapshot => {
                Object.keys(snapshot.val());

                Object.values(snapshot.val());

                const obj = Object.entries(snapshot.val());
                dispatch({ type: 'StudentsData', payload: obj })

            });





        database()
            .ref('companyusers')
            .on('value', snapshot => {
                Object.keys(snapshot.val());

                Object.values(snapshot.val());

                const obj = Object.entries(snapshot.val());
                dispatch({ type: 'CompanyData', payload: obj })

            });





        database()

            .ref('jobs')
            .on('value', snapshot => {
                Object.keys(snapshot.val());

                Object.values(snapshot.val());

                const obj = Object.entries(snapshot.val());
                dispatch({ type: 'Jobs', payload: obj })

            });





    }
}


const Login = (data, navigation) => {
    return (dispatch) => {
        if (data.type === 'Admin') {
            data.email === 'admin123@gmail.com' && data.pass === 'admin12345' ?
                navigation.navigate('foradmin')
                :
                alert('you are someone else')
        }
        else {
            auth().signInWithEmailAndPassword(data.email, data.pass)
                .then((userCredential) => {
                    var user = userCredential.user;
                    user.email

                    const dataEmail = user.email

                    if (data.type === 'Student') {
                        navigation.navigate('forstudent')
                    }
                    else if (data.type === 'Company') {
                        navigation.navigate('forCompany')
                    }
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage)
                    alert(errorMessage)
                });

        }

    }

}


const Signout = (navigation) => {
    return (dispatch) => {
        auth()
            .signOut()
            .then(() => {
                alert('User signed out!')
                navigation.navigate('Login')
            });
    }
}
const Signout2 = (navigation) => {
    return (dispatch) => {
        alert('User signed out!')
        navigation.navigate('Login')
    }
}



export {
    CompanyRegister,
    StudentRegister,
    GettingForCompany,
    GettingForCompanyFromFirebase,
    Login,
    Signout,
    Signout2
}