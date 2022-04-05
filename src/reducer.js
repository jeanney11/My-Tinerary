export const inicialState = {
    cities: [],
    itineraries: [],
    user:null,
    filterCity: []

}

export const actionType={
    CITIESDB: "CITIESDB",
    ITINERARIESDB: "ITINERARIESDB",
    USERDB:"USERDB",
    FILTER: "FILTER",

}

const reducer=(state, action)=>{
    console.log(action)
    switch(action.type){
        case "CITIESDB": 
        return{
            ...state,
            cities:action.cities,
            filterCity:action.cities
        }
        case "ITINERARIESDB": 
        return{
            ...state,
            itineraries:action.itineraries
        }

        case "USERDB":
            console.log(action.user) 
        return{
            ...state,
            user:action.user
        }

        case "FILTER": 
        const filterCity=[]
                if (action.value.filterBy ==="Cities"){
                   filterCity.push(...state.cities.filter(city=>city.name.toLowerCase().startsWith(action.value.value.toLowerCase().trim())))
                }else{
                    filterCity.push(...state.cities.filter(city=>city.continents.toLowerCase().startsWith(action.value.value.toLowerCase().trim())))  
                }
        
        return{
            ...state,
            filterCity:filterCity
        }


        default:return state;
    }
        
    }
    


export default reducer;

