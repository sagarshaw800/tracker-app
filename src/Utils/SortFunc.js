import { numDate } from "./getDate"

export const sortFunc = (items, value) => {
    if(value.sort === 'amount')
    {
        return items.sort(function (a, b) {
            return b.amount - a.amount  
        })
    }
    if(value.sort === 'date')
    {
        return items.sort(function (a, b) {
            return numDate(b.date) - numDate(a.date)  
        })
    }
}