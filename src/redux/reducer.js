const initialState = {
    list: ["Hello"],
    user: {
        username: 'Lucas',
        id: 1,
        password: 'pwencrypted'
    }   
}

const PRACTICE_FUNCTION = "PRACTICE_FUNCTION"

export const practiceFunction = (res) => {
    // console.log('res:', res)
    return {
        type: PRACTICE_FUNCTION,
        payload: res
    }
}

export default function reducer (state = initialState, action) {
    // const {type, payload} = action
    switch(action.type){
        case PRACTICE_FUNCTION:
            // console.log(action.payload)
            return {...state, list: [...state.list, action.payload[0], action.payload[1]]}
        default: 
            return state
    }
}