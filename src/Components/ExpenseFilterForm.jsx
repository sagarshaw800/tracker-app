import React, {useContext} from 'react'
import { dataContext } from '../Utils/Context/DataContext';
import { SwitchContext } from '../Utils/Context/SwitchAppContext';

const ExpenseFilterForm = () => {

    const abc = useContext(SwitchContext);
    const jkl = useContext(dataContext);

    const provideData = (e) => {
        jkl.setFilterData({...jkl.filterData, date: e.target.value})
    }
    const provideData2 = (e) => {
        jkl.setFilterData({...jkl.filterData, sort: e.target.value})
    }

    return (
        <div className="expenseFilterForm container">
            <form>
                {/* <input type="text" name="searchExpenses" placeholder={abc[0].isBudget ? 'Amount' : 'Calorie' }/> */}
                <div className="sortBy">
                <label>Sort By </label>
                <select name="filterDropdown" id="filterDropdown"  onChange={provideData2}>
                    <option value="date" selected>Date</option>
                    <option value="amount">{abc[0].isBudget ? 'Amount' : 'Calorie' }</option>
                </select>
                </div>
                <div className="seeFor">
                    <label>See For the date - </label>
                    <input type="date" name="date" value={jkl.filterData.date} onChange={provideData}/>
                </div>
            </form>
        </div>
    )
}

export default ExpenseFilterForm


