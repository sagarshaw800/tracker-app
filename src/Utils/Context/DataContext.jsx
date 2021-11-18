import React,{ useReducer, useContext, useState } from 'react'
import { filterDataFunc } from '../filterDataFunc';
import { sortFunc } from '../SortFunc';
import { SwitchContext } from './SwitchAppContext';

export const dataContext = React.createContext()

const initialState = []
const reducer = (state, action) => {
    switch(action.type){
        case 'add':
            return [...state, action.value]
            case 'delete':
                state.forEach((element,index) => {
                    if(element.id === action.deleteId)
                    state.splice(index,1)
                });
                return [...state]
            }
        }
        
        const DataContext = ({children}) => {
            
            const abc = useContext(SwitchContext);
            const [budgetData, dispatchBudget] = useReducer(reducer, initialState)
            const [fitnessData, dispatchFitness] = useReducer(reducer, initialState)
            const [filterData, setFilterData] = useState({date:''});
            // console.log(budgetData);
            // console.log(fitnessData);
            let data = abc[0].isBudget ? filterDataFunc(budgetData, filterData) : filterDataFunc(fitnessData, filterData)
            
    let totalBudget = data.reduce((acc,item) => acc+Number(item.amount), 0)
    let totalFitness = data.reduce((acc,item) => acc+Number(item.amount), 0)
    

    // data = sortFunc(data, filterData)
    sortFunc(data, filterData);

    return (
        <dataContext.Provider 
            value={{budgetData: budgetData,
                    dispatchBudget: dispatchBudget, 
                    fitnessData: fitnessData, 
                    dispatchFitness: dispatchFitness,
                    totalBudget: totalBudget,
                    totalFitness: totalFitness,
                    filterData: filterData,
                    setFilterData: setFilterData,
                    data: data}}>
            {children}
        </dataContext.Provider>
    )
}

export default DataContext
