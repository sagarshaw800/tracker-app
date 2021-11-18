export const changeTheme = (e) => {
    if(e.target.classList.contains('green'))
    {
        document.querySelectorAll('.theme').forEach((item) => item.style.border="5px solid #ccc");
        e.target.style.border = "5px solid #1d3557";
        document.documentElement.style.setProperty('--secondary-color',`#b5e48c`);
    }
    if(e.target.classList.contains('orange'))
    {
        document.querySelectorAll('.theme').forEach((item) => item.style.border="5px solid #ccc");
        e.target.style.border = "5px solid #1d3557";
        document.documentElement.style.setProperty('--secondary-color',`#d1b3c4`);
    }
    if(e.target.classList.contains('blue'))
    {
        document.querySelectorAll('.theme').forEach((item) => item.style.border="5px solid #ccc");
        e.target.style.border = "5px solid #1d3557";
        document.documentElement.style.setProperty('--secondary-color',`#a8dadc`);
    }
    if(e.target.classList.contains('pink'))
    {
        document.querySelectorAll('.theme').forEach((item) => item.style.border="5px solid #ccc");
        e.target.style.border = "5px solid #1d3557";
        document.documentElement.style.setProperty('--secondary-color',`#fec5bb`);
    }
    if(e.target.classList.contains('yellow'))
    {
        document.querySelectorAll('.theme').forEach((item) => item.style.border="5px solid #ccc");
        e.target.style.border = "5px solid #1d3557";
        document.documentElement.style.setProperty('--secondary-color',`#f0f3bd`);
    }

}



