//Convert all the strings to title caps in a string array
function TitleCase(string) {
    string = string.toLowerCase().split(' ');
    for (var i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1); 
    }
    console.log(string.join(' '))
}
TitleCase('hello world')