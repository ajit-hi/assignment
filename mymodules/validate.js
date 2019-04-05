module.exports = function (phn){
    str = String(phn);
    str = str.trim();
    let pattern = /^\+91[0-9]{10}$|^0[0-9]{10}$|^[0-9]{10}$/;

    let result = str.match(pattern);
    
    if(result){
        return true;
    }else{
        return false;
    } 
}