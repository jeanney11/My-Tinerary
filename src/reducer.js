export const inicialState = {
    cities: [],
    itineraries: [],
    user:null,

}

export const actionType={
    CITIESDB: "CITIESDB",
    ITINERARIESDB: "ITINERARIESDB",
    USERDB:"USERDB",

}

const reducer=(state, action)=>{
    console.log(action)
    switch(action.type){
        case "CITIESDB": 
        return{
            ...state,
            cities:action.cities
        }
        case "ITINERARIESDB": 
        return{
            ...state,
            itineraries:action.itineraries
        }

        case "USERDB": 
        return{
            ...state,
            user:action.user
        }

        default:return state
    }
    
}

export default reducer;

