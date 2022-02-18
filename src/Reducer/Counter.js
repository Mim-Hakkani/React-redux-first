const initialSteate =10 ;

const updatedNumber = (state=initialSteate,action)=>{

    switch(action.type){
        case'Increment' : return state =state+1
        case'Decrement' : return state =state-1
        default : return state
    }

}
export default updatedNumber;