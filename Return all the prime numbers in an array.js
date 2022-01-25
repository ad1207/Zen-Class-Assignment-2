//Return all the prime numbers in an array
function primecheck(n){
    ans=true
    for(let i=2;i<n;i++){
        if (n % i == 0) {
                    ans = false;
                    break;
                }
    }
    return ans
}
function prime(arr){
    for(let j=0;j<arr.length;j++){
        if(primecheck(arr[j])==true){
            console.log(arr[j])
        }
    }
}
arr=[4,7,5,8,3]
prime(arr)