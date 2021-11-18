import React, {useContext} from 'react'
import { dataContext } from '../Utils/Context/DataContext';
import { SwitchContext } from '../Utils/Context/SwitchAppContext';
import { getDate } from '../Utils/getDate';
import { MdDelete } from 'react-icons/md';
import { AiTwotoneEdit } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';
import { Link } from "react-router-dom";

const ExpenseItemList = () => {

    const abc = useContext(SwitchContext);
    const jkl = useContext(dataContext);


    const deleteItem = (e) => {
        if(e.target.parentElement.parentElement.id === 'btns')
        {
            let deleteId = e.target.parentElement.parentElement.className;
            abc[0].isBudget ? 
                jkl.dispatchBudget({type:'delete', deleteId: deleteId})
                :
                jkl.dispatchFitness({type:'delete', deleteId: deleteId})
        }
    }
 
    const editHandler = (e) => {
        let tag;
        if(e.target.parentElement.parentElement.parentElement.id === 'btns')
            tag = e.target.parentElement.parentElement.parentElement;
        else if(e.target.parentElement.parentElement.id === 'btns')
            tag = e.target.parentElement.parentElement;
        else if(e.target.parentElement.id === 'btns')
            tag = e.target.parentElement;

            let editItem;
                jkl.data.forEach(element => {
                    if(element.id === tag.className)
                        {editItem = element;
                    }
                });
                setTimeout(() => {
                    document.querySelector('#description').value = editItem.descp;
                    document.querySelector('#amount').value= editItem.amount;
                    document.querySelector('#date').value= editItem.date;
                    document.querySelector('#note').value= editItem.note;
                }, 200);
            
                let deleteId = tag.className;
                abc[0].isBudget ? 
                    jkl.dispatchBudget({type:'delete', deleteId: deleteId})
                    :
                    jkl.dispatchFitness({type:'delete', deleteId: deleteId})
    }

    // console.log(jkl.data);

    return (
        <div className="listWrapper">
            {
                jkl.data.map(item => 
                    <li className="expenseList" key={item.id}>
                        <div className="expense">
                            <div className="expenseName">{item.descp}</div>
                            <div className="expenseDate">{getDate(item.date)}</div>
                        </div>
                        <div className="right">
                        <div className="amount">
                            {abc[0].isBudget ? <BiRupee /> : '' }
                            {item.amount} {abc[0].isBudget ? '' : 'cal' }
                        </div>
                        <div id='btns' className={item.id}>
                            <Link to="/addExpense" onClick={editHandler}><AiTwotoneEdit className="edit"/></Link>
                            <MdDelete className="delete" onClick={deleteItem}/>
                        </div>
                        </div>
                    </li>
                )
            }
        </div>
    )
}


export default ExpenseItemList


// if(e.target.parentElement.parentElement.parentElement.id === 'btns')
// {
//     let editItem;
//     jkl.data.forEach(element => {
//         if(element.id === e.target.parentElement.parentElement.parentElement.className)
//             {editItem = element;
//         }
//     });
//     setTimeout(() => {
//         document.querySelector('#description').value = editItem.descp;
//         document.querySelector('#amount').value= editItem.amount;
//         document.querySelector('#date').value= editItem.date;
//         document.querySelector('#note').value= editItem.note;
//     }, 200);

//     let deleteId = e.target.parentElement.parentElement.parentElement.className;
//     abc[0].isBudget ? 
//         jkl.dispatchBudget({type:'delete', deleteId: deleteId})
//         :
//         jkl.dispatchFitness({type:'delete', deleteId: deleteId})
// }