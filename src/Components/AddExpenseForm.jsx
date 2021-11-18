import React, {useContext, useState} from 'react'
import { dataContext } from '../Utils/Context/DataContext';
import { SwitchContext } from '../Utils/Context/SwitchAppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {

    const abc = useContext(SwitchContext);
    const jkl = useContext(dataContext);

    const[item, setItem] = useState({id: uuidv4(), descp:'', amount:'', date:'', note:''})
    // console.log(item);


    const submitHandler= (e) => {
        e.preventDefault();
        if(item.descp !== '' && item.amount !== '' && item.date !== '')
        {
            abc[0].isBudget ? 
                jkl.dispatchBudget({type:'add', value:item}) 
                : 
                jkl.dispatchFitness({type:'add', value:item})
            setItem({id: uuidv4(), descp:'', amount:'', date:'', note:''})
            document.querySelector('#description').value='';
            document.querySelector('#amount').value='';
            document.querySelector('#date').value='';
            document.querySelector('#note').value='';
        }
    }

    return (
        <div className="addExpenseForm container">
            <h1>Add {abc[0].isBudget ? 'Expense' : 'Activity' }</h1>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    id="description"
                    name="description" 
                    className="description" 
                    placeholder="Description" 
                    autoComplete="off"
                    // value={item.descp}
                    onChange={(e) => {setItem({...item, descp:e.target.value,
                                                amount:document.querySelector('#amount').value,
                                                date:document.querySelector('#date').value,
                                                note:document.querySelector('#note').value})}}/>
                <input 
                    type="number" 
                    id="amount" 
                    name="amount" 
                    className="amount" 
                    placeholder={abc[0].isBudget ? 'Amount' : 'Calorie' } 
                    autoComplete="off"
                    // value={item.amount}
                    onChange={(e) => {setItem({...item, amount:e.target.value,
                                                        descp:document.querySelector('#description').value,
                                                        date:document.querySelector('#date').value,
                                                        note:document.querySelector('#note').value})}}/>
                <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    className="date" 
                    autoComplete="off"
                    // value={item.date}
                    onChange={(e) => {setItem({...item, date:e.target.value,
                                                        descp:document.querySelector('#description').value,
                                                        amount:document.querySelector('#amount').value,
                                                        note:document.querySelector('#note').value})}}/>
                <textarea 
                    id="note" 
                    name="note" 
                    cols="30" 
                    rows="8" 
                    placeholder= {abc[0].isBudget ? 'Add a note for your expense (optional)' : 'Add a note for your activity (optional)'}
                    autoComplete="off"
                    // value={item.note}
                    onChange={(e) => {setItem({...item, note:e.target.value,
                                                        descp:document.querySelector('#description').value,
                                                        amount:document.querySelector('#amount').value,
                                                        date:document.querySelector('#date').value})}}>
                </textarea>
                <button type="submit">Add {abc[0].isBudget ? 'Expense' : 'Activity'}</button>
            </form>
        </div>
    )
}

export default AddExpenseForm
