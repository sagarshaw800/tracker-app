let monthList=["","Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

export const getDate = (x) => {
    let year = Number(x.substring(0,4));
    let month = Number(x.substring(5,7));
    let date = Number(x.substring(8,10));

    return (date+` `+monthList[month]+` `+year)
}

export const numDate = (x) => {
    // console.log(x.substring(0,4)+x.substring(5,7)+x.substring(8,10));
    return Number(x.substring(0,4)+x.substring(5,7)+x.substring(8,10));
}

