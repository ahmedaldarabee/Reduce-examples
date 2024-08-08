// Higher order function
// will return one value just as a result of your needs
// reduce function be as fibonacci algorithm

function reduceExampleOne(){
    let arr = [10,20,30,40,50,60];

    let addition = arr.reduce((accumulator,current,index,mainArray) => {
        console.log( '\n\nThe Current Element: ' , accumulator);
        console.log( 'The Next Element: ' , current);
        console.log('Sum of Accumulator and Current Element: ', accumulator + current);
        return accumulator + current;
    },55)

    // 55 be as the initial value if you want to define the initial value...!
    
    console.log("\n\nlast result of summation" , addition)
}

function reduceExampleTwo(){
    let name = ["A","@","h","@","m","@","e","@","d"];

    let removeAt = name.filter((ch)=>{
        return ch.startsWith('@') ? '' : ch; 
    
    }).reduce((acc,curr) => {
        return acc+curr;
    })

    console.log(removeAt);
}