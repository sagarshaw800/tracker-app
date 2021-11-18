import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { dataContext } from '../Utils/Context/DataContext';
import { SwitchContext } from '../Utils/Context/SwitchAppContext';

const ExpenseDetails = () => {

    const abc = useContext(SwitchContext);
    const jkl = useContext(dataContext);

    return (
        <div className="expenseDetails">
            <h1>Viewing 
                <div className="red"> {abc[0].isBudget ? <> {jkl.data.length} </> : <> {jkl.data.length} </>}</div> 
                {abc[0].isBudget ? <> Expenses </>: <> Activities </>}
                 totalling 
                 <div className="red"> {abc[0].isBudget ? <> {jkl.totalBudget} </> : <> {jkl.totalFitness} </>}</div> 
                 {abc[0].isBudget ? <> rupees</>: <> Calories burnt</>}</h1>
            <Link to="/addExpense" >
                <button>Add {abc[0].isBudget ? <> Expense</>: <> Activity</>}</button>
            </Link>
        </div>
        
    )
}

export default ExpenseDetails
