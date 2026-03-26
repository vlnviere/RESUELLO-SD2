let input = parseInt(prompt("Enter a number: "));

for(let i = 0; i <= input; i++){
    if(i % 3 == 0 && i % 5 != 0){
    console.log("COUNT: "+ i + " - COCO");
    }else if(i % 3 != 0 && i % 5 == 0){
    console.log("COUNT: "+ i + " - MELON");
    }else if(i % 3 == 0 && i % 5 == 0){
    console.log("COUNT: "+ i + " - COCO MELON");
    }else{
    console.log("COUNT: "+ i);
    }
}