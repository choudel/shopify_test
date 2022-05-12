export default function play(){
   const names:string[]=["filip","john"]
   const numbers: Array<number>=[1,2,3]
    const random= Math.random() > 0.5 ? "hello":[1,2]
    if(typeof random ==="string"){const upper = random.toUpperCase();console.log(upper)}else{console.log(random)}
    console.log(random.length)    
}