const count = str=>{
    charCount ={};
    for(x in str){
        const char = str[x];
        charCount[char] = (charCount[char] ||0)+1
    }
    return charCount
}

console.log(count("hello world"));