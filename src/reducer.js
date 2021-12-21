export const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            let temp = state.foods.map((item)=>{
                if (item.id === action.payload) {
                    return {...item, itemAmount: item.itemAmount + 1}
                }
                return item;
            })
            return {...state, foods: temp}
            
            break;
        case 'dec':
            let tempEl = state.foods.map((item)=>{
                if (item.id === action.payload && item.itemAmount > 0) {
                    return {...item, itemAmount: item.itemAmount - 1}
                }
                return item;
            })
            return {...state, foods: tempEl}
            break;

            case 'getTotal':
            let {totalItems, totalAmount} = state.foods.reduce((accumulator, curr_state)=> {
                let {itemAmount, price} = curr_state;
                let tempPrice = itemAmount*price;
                accumulator.totalItems += itemAmount;
                accumulator.totalAmount += tempPrice;
                return accumulator;

            },{totalItems:0, totalAmount:0})
            return {...state, totalItems, totalAmount};
            break;
        default:
            return state;
            break;
    }

}