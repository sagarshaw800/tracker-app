import React from 'react'
import AddExpenseForm from '../../Components/AddExpenseForm'
import Navbar from '../../Components/Navbar'


const AddExpense = () => {
    return (
        <React.Fragment>
            <Navbar />
            <AddExpenseForm />
        </React.Fragment>
    )
}

export default AddExpense
