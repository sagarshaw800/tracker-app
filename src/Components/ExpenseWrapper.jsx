import React, {useContext} from 'react'
import { SwitchContext } from '../Utils/Context/SwitchAppContext';
import ExpenseItemList from './ExpenseItemList'

const ExpenseWrapper = () => {

    const abc = useContext(SwitchContext);

    return (
        <div className="expenseWrapper">
            <div className="header">
                <h3>{abc[0].isBudget ? 'Expense' : 'Activity' }</h3>
                <h3>{abc[0].isBudget ? 'Amount' : 'Calorie' }</h3>
            </div>
            <ExpenseItemList />
        </div>
    )
}

export default ExpenseWrapper
