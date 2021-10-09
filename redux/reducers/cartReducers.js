let defaultState={
    selecteditems:{
        items:[],
        restaurantName:""
    }

}

let cartReducer=(state=defaultState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":{

            let newState={...state}; // make copy of state
           if(action.payload.checkboxValue){
             
            newState.selecteditems={
                items:[...newState.selecteditems.items,action.payload],
                restaurantName: action.payload.restaurantName
            }
           
        }

        else{

            console.log("REMOVE DATA");
            newState.selecteditems={
                items:[
                    ...newState.selecteditems.items.filter(
                        (items)=>items.title !== action.payload.title,
                        // use item ko hata do jis pe abhi unchekc kia hai
                    )
                    ],
                    restaurantName:action.payload.restaurantName,

            }

        }
        console.log(newState, "new State cartadd ");
          
            return newState;
        
        }
    
        default:
            return state
    
    }
   

}
export default cartReducer;
