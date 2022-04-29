function msg() {
    alert ("Wecome to my Javascript assignment page")
}


/*Create a function with a function name printSum( ) and print the sum of an array.*/

function printsum(n) {
    let sum=0;
    for (let x=0 ; x < n.length ; x++)
        sum +=n[x];
        return sum;
}
let array=[12,12,12];
console.log(printsum(array))


/*Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]

If a[i]>b[i] then alice is awarded 1point

If a[i]<b[i] then bob is awarded 1 point

If a[i]===b[i] then none of them gets a point

The comparison points should be the total points a person earned.*/

let Alice=[25,30,45]
let Bob=[50,30,60]
function compareAliceAndBob(){
    let totalPoints=[]
    let AlicePoints=0;
    let BobPoints=0;
    if (Alice[0] > Bob[0]){
        AlicePoints++
    }else if (Alice[0] < Bob[0]){
        BobPoints++
    }else if (Alice[0] === Bob[0]){
        AlicePoints==BobPoints==0
    }
    if (Alice[1] > Bob[1]){
        AlicePoints++
    }else if (Alice[1] < Bob[1]){
        BobPoints++
    }else if (Alice[1] === Bob[1]){
        AlicePoints==BobPoints==0
    }
    if (Alice[2] > Bob[2]){
        AlicePoints++
    }else if (Alice[2] < Bob[2]){
        BobPoints++
    }else if (Alice[2] === Bob[2]){
        AlicePoints==BobPoints==0
    }
    totalPoints.push(AlicePoints)
    totalPoints.push(BobPoints)
    console.log(totalPoints)
}
compareAliceAndBob()


/* Given an array of integers, calculate the ratio of its elements that are positive, negative and zero. Print the decimal value of each fraction on a new line with places after the decimal.*/

function PosNegInteger(n) {
    let PosNum=0;
    let NegNum=0;
    let ZeroNum=0;
    for (let x=0; x<n.length; x++){
        if (n[x] > 0){
            PosNum++
        }
        if (n[x] < 0){
            NegNum++
        }
        if (n[x] === 0){
            ZeroNum++
        }
    }
    console.log(parseFloat(PosNum/n.length))
    console.log(parseFloat(NegNum/n.length))
    console.log(parseFloat(ZeroNum/n.length))
}

let n=[6,-8,0]
PosNegInteger(n)


/*Create a function with a function name firstFunction( ) and return the sum of two integers(numbers) */

function firstFunction(a,b){
    let sum=a+b;
    return sum;
}

console.log(firstFunction(15,15))