//Remove duplicates from an array
function removeDuplicates(arr){
    let s=[...new Set(arr)];
    console.log(s);
}
let arr=[1,2,2,3,4,4,5,5,9,8,7,7]
removeDuplicates(arr)