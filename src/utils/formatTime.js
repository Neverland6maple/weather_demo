export default (str)=>{
    if(!str) return '';
    const timeObj = new Date(str);
    const year = timeObj.getFullYear();
    const month = timeObj.getMonth()+1;
    const date = timeObj.getDate();
    const h = timeObj.getHours();
    const m = timeObj.getMinutes();
    const s = timeObj.getSeconds();
    return year + '年' + month + '月' + date + '日' + h + ':'+  m + ':' + s;
}