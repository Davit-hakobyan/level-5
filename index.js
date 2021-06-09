//4
function f(arr){
    let obj={},b = arr.length;
    for(let m of arr){
        if(!obj.hasOwnProperty(m)){
           obj[m]=1;
        }else{
           obj[m]=obj[m]+1;
        }
    }   
    for(let key in obj){
        if(obj[key]!==1){
            while(obj[key]){
                arr.push(+key);
                obj[key]--;
            }
        }else{
            arr.push(+key)
        }
    }
    arr.splice(0,b);
    return arr;
}

