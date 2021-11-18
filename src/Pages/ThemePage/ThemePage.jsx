import React, {useContext} from 'react';
import Navbar from '../../Components/Navbar';
import { changeTheme } from "../../Utils/ChangeTheme";
import { SwitchContext } from '../../Utils/Context/SwitchAppContext';


const ThemePage = () => {
    
    const abc = useContext(SwitchContext);

    return (
        <div className="themePage">
            <Navbar />
            <div className="switchApp container">
                <button 
                    onClick={() => abc[0].setIsBudget(!abc[0].isBudget)}>
                    Switch to  
                    {abc[0].isBudget ? <> Fitness Tracker</>: <> Budget Tracker</>}
                </button>
            </div>
            <div className="themeBar container">
                <div className="theme green" onClick={changeTheme}></div>
                <div className="theme orange" onClick={changeTheme}></div>
                <div className="theme blue" onClick={changeTheme}></div>
                <div className="theme pink" onClick={changeTheme}></div>
                <div className="theme yellow" onClick={changeTheme}></div>
            </div>
        </div>
    )
}

export default ThemePage