module.exports = golfScore

function golfScore(par, strokes){
    const names = ["Hole-in-one!", "Eagle", "Birdie", 
"Par", "Bogey", "Double Bogey", "Go Home!"];
if (strokes-par===0 && par>1 ){
    return names[3];
} else if(strokes-par<-1 && strokes>1){
    return names[1];
} else if(strokes===par-1){
    return names[2];
} else if(strokes===par+1){
    return names[4];
} else if(strokes===par+2){
    return names[5];
} else if(strokes===par+3){
    return names[6];
} else if(strokes===1){
    return names[0];
} 
   
}


console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));