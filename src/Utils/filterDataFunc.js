
export const filterDataFunc = (data, filterData) => {
    // console.log(filterData);
    if(filterData.date !== '')
        return data.filter(item => item.date === filterData.date)
    else
        return data
}
