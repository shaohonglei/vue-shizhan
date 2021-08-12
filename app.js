
function newArr(array){ 
    var arrs = []; 
    for(var i = 0; i < array.length; i++){ 
        if (arrs.indexOf(array[i]) == -1){ 
            arrs.push(array[i])
        }; 
    } 
    return arrs; 
}
var arr = [1,1,2,5,5,6,8,9,8];
console.log(newArr(arr))