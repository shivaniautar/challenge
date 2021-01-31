
//1. Explained thorough version:
// for(let i=1; i<=100;i++){
//      if(i%15 == 0)console.log("CLXDTC"); //for numbers that are multiples of 3 and 5 print "CLXDTC"
//      else if(i%3 == 0)console.log("CLX"); //for numbers that are multiples of 3 prints "CLX"
//      else if(i%5 == 0)console.log("DTC"); //for numbers that are multiples of 5 prints "DTC"
//      else console.log(i);
// }


//2. Simplified version using the ternary operator:
for(let i=0;i<100;)console.log((++i%3?'':'CLX')+(i%5?'':'DTC')||i)
