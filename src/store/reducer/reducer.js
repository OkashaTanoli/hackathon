const Initial = {
    studentData:null,
    companyData:null,
    currentUser:{},
    jobs:null
}

export default (state = Initial, action) => {
    switch (action.type) {
        case 'StudentsData':
            return ({
                ...state,
                studentData:action.payload
        })
        case 'Jobs':
            return ({
                ...state,
                jobs:action.payload
        })
        case 'CompanyData':
            return ({
                ...state,
                companyData:action.payload
        })
        case 'CurrentUser':
            return ({
                ...state,
                currentUser:action.payload
        })

    }
    return state;
}