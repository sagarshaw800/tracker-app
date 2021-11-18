import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { SwitchContext } from '../Utils/Context/SwitchAppContext';
import { IoIosFitness } from 'react-icons/io';
import { FcMoneyTransfer } from 'react-icons/fc';


const Navbar = () => {

    const abc = useContext(SwitchContext);

    return (
        <div className="navbar ">
            <Link to="/">
                <div className="logo">{abc[0].isBudget ? <h1>Budget Tracker <FcMoneyTransfer /></h1>: <h1>Fitness Tracker <IoIosFitness /></h1>}</div>
            </Link>
            <div className="navBtns">
                <Link to="/theme">
                    <button>Theme</button>
                </Link>
                <button>Log In</button>
            </div>
        </div>
    )
}

export default Navbar
