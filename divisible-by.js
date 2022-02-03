

/* for(let i=1;i<=50; i++){
    
     if(i%3==0 && i % 5==0){
        console.log('foo bar')
     }
    else if(i%3==0){
        console.log('foo');
    }
    
    
    else if(i%5 == 0){
        console.log(' bar')
    }
    else{
        console.log(i);
    }

}   */

function divisibleBy(numbers){
    for(let i=0;i<=numbers; i++){
        if(i%3==0 && i%5==0){
            console.log('I am divisible by 5 and 3')
        }
        else if(i%3==0){
            console.log('I am divisible by only 3')
        }
        else if(i%5==0)
        {
            console.log('I am divisible by onle 5')
        }
        else{
            console.log('Sorry ! I am not divisible by 5 and 3:',i)
        }
    }
}
 const myNumbers=divisibleBy(30)
 console.log(myNumbers)