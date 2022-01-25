//Return all the palindromes in an array
function palidrome(string){
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function pali(arr){
    for(let j=0;j<arr.length;j++){
        if(palidrome(arr[j])==true){
            console.log(arr[j])
        }
    }
}
arr=['palindrome','malayalam','helleh','manadu']
pali(arr)