
Number 11:

function firstLast6(arr){
    if(arr[0] == 6 || arr[arr.length-1]==6){
        return true;
    }else return false;
}

Number 12:

function has23(num){
    if(num[0]==2 || num[0]==3){
     return true;
    }
    if(num[1]==2||num[1]==3){
        return true;
    }else return false;
}
//Number 13:
function fix23(num){
    if (num[0]==2&&num[1]==3){
        var num[1]=0;
        return num;
    }
    if(num[1]==2 && num[2]==3){
        num[2]= 0;
        return num;
    } else return num;
}

//Number 14:

function countYZ(word){
    var add = 0;
    var last = word.charAt(word.length-1);
    if (last == "z" || last == "y"){
       add = add + 1;
    }
    if (last == "Z" || last == "Y"){
        add = add + 1;
    }
    for(var i = 0; i < word.length; i++) {
        if(word[i]==" "  && (word[i-1]== "y" || word[i-1]== "z")) {
            add = add +1;
        }
        if(word[i]==" "  && (word[i-1]== "Y" || word[i-1]== "Z")) {
            add = add +1;
        }
    }



    return add;
}

//Number 15:

function endOther(one,two){
    var one = one.toLowerCase();
    var two = two.toLowerCase();
    var endTwo= two.lastIndexOf(one);
    var endOne= one.lastIndexOf(two);
    var first = one.length;
    var second= two.length;

    if (first<=second && endTwo==second-first){
        return true;

    }
    if(first>=second && endOne==first-second){
        return true;
    }
    return false;
}

//Number 16:

function starOut(word){
    var newWord= "";
    for(var i = 0; i < word.length; i++) {

        if(word[i] != "*" && word[i+1] != "*" && word[i-1]!= "*") {
            newWord = newWord+= word[i];
        }

    }
    return newWord;
}
//Number 17:

function getSandwich(sandwich){
    var bottomBun=sandwich.lastIndexOf('bread');
    var topBun=sandwich.indexOf('bread');
    var beginning= topBun + 5;
    var end= bottomBun;
    if(topBun>-1 && bottomBun>0 && topBun!=bottomBun){
        return sandwich.substring(beginning,end);
    }
    else return "";

}

//number 18:
 function canBalance(arr) {

    //2 loops
     var sum1 = "";
     var sum2="";
     for(var i = 0; i< arr.length;i++) {
         sum1=sum1+arr[i];
         for(var j = i+1; j< arr.length;j++) {
             sum2=0;
             sum2= sum2 + arr[i+1];
          }
         if(sum1=sum2){

             return true;



         }
     } return false;

 }

//number 19:
function countClumps(number){
     var clump=0;
     for(var i=0;i<number.length;i++){
         if (number[i]==number[i+1] && number[i]!=number[i+2]){
             clump=clump+1;
         }
     }
     return clump;
}

//number 20:
function evenlySpaced(a,b,c){


    var arr = [a,b,c];
    arr.sort();
    if(arr[1] - arr[0] == arr[2]- arr[1] ) {
        return true;
    }
    return false;


}





//sum the i loop like sum1 = sum1 + arr[i]
//sum the j loop
//reset the j loop sum and start over
// sum2 = 0;
//see if they are equal, if so return true
//return false

// word = hibreadhibread
// word.indexOf("bread")  2
// word.lastindexOf("bread")  9




var x = 2
var x = "Alondra"
var x = true
 //var x = [1,2,4,5,34,5,3,2,3,456,55,4,3]
 var x = ["hi","bye",2]

var y = x[2]

x.length //13

for(var i = 0; i < x.length; i++) {

    if(x[i] == "A") {
        return true;
    }

}



function firstLast6(num){
    var str= "";
    var last = str.charAt(str.length-1);
    var first = str.charAt();
    if (last==6 || first ==6){
        return true;
    }
    if (first != 6 && last != 6){
        return false;
    }

}