var myNumber = 9
console.log(myNumber);

do {
    var get=true;
    var userNumber = +prompt('Попробуй угадать число:)', '');
    if(userNumber == null || userNumber == ""){
        get=false;
    }
    if (userNumber === myNumber) {
        var DoWantContinue= confirm('Угадал!!!! Next?');
        if(DoWantContinue){
         
            console.log('DoWantContinue'+myNumber);
        }else{
            get=false;
        }
    }
 } while (get);