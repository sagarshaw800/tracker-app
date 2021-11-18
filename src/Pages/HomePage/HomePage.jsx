import React from 'react'
import ExpenseDetails from '../../Components/ExpenseDetails'
import ExpenseFilterForm from '../../Components/ExpenseFilterForm'
import ExpenseWrapper from '../../Components/ExpenseWrapper'
import Navbar from '../../Components/Navbar'


const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ExpenseDetails />
            <ExpenseFilterForm />
            <ExpenseWrapper />
        </React.Fragment>
    )
}

export default HomePage
