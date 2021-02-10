
//1. Explained thorough version:
// for(let i=1; i<=100;i++){
//      if(i%15 == 0)console.log("CLXDTC"); //for numbers that are multiples of 3 and 5 print "CLXDTC"
//      else if(i%3 == 0)console.log("CLX"); //for numbers that are multiples of 3 prints "CLX"
//      else if(i%5 == 0)console.log("DTC"); //for numbers that are multiples of 5 prints "DTC"
//      else console.log(i);
// }


//2. Simplified version using the ternary operator:
// for(let i=0;i<100;)console.log((++i%3?'':'CLX')+(i%5?'':'DTC')||i)


//3. Reusable version:

const divisibleBy = function(index,num){
    if(index%num === 0){
        return true;
    }
}
const challengeCustom = function(str1, str2, n1, n2, start, end){
    for(let i=start;i<=end;i++){
        if(divisibleBy(i,(n1*n2))){
            console.log(str1+str2);
        } else if(divisibleBy(i,n1)){
            console.log(str1);
        } else if(divisibleBy(i,n2)){
            console.log(str2)
        }else console.log(i);
    }
    return
}
challengeCustom("CLX", "DTC", 3, 5, 1, 100);