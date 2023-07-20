function prime(numbers){
    var count = 0
    if(numbers<=1){
        return false;
    }
    for (let i =2;i<=numbers;i++){
        if(numbers%i ==0){
            count += 1;
        }
        
    }
    if (count == 1){
        console.log("prime number")
    }
    else{
        console.log("not a prime number")
    }
}
prime(7)