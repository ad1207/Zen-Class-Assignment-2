//Rotate an array by k times
function Rotate(a, k)
{   var n=a.length
    k = k % n;
    let arr=[]
    for (let i = 0; i < n; i++) {
        if (i < k){
            arr.push(a[n + i - k])
        }
        else {
            arr.push(a[i - k])
        }
    }
    console.log(arr)
}
let array = [1, 2, 3, 4, 5];
let k=2;
Rotate(array,k)