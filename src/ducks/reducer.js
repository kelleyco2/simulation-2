let initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    monthlyMortgage: 0,
    desiredRent: 0
}

const STEP_ONE = 'STEP_ONE'
const STEP_TWO = 'STEP_TWO'
const STEP_THREE = 'STEP_THREE'
const CANCEL = 'CANCEL'

export default function reducer(state = initialState, action){
    switch (action.type) {
        case STEP_ONE:
            return { ...state, ...action.payload}
        case STEP_TWO:
            return { ...state, img: action.payload}
        case STEP_THREE:
            return { ...state, ...action.payload}
        case CANCEL:
            return action.payload
        default:
            return state;
    }
}

export function stepOne(obj){
    return {
        type: STEP_ONE,
        payload: obj
    }
}

export function stepTwo(img){
    return {
        type: STEP_TWO,
        payload: img
    }
}

export function stepThree(obj){
    return {
        type: STEP_THREE,
        payload: obj
    }
}

export function cancel(){
    return {
        type: CANCEL,
        payload: initialState
    }
}