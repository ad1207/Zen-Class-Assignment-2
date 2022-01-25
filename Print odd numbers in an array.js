//Print odd numbers in an array
function solve(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            console.log(arr[i])
        }
    }
}
arr=[1,2,3,4,5,6,7,8,9]
solve(arr)