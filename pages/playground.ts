export default function play(){
    const name:string="john"
    const age:number=35
    function logPersonInfo(personName:string,personAge:number){
        const info =`Name: ${personName},age:${personAge}`
        console.log (info)
        return info
    }
    logPersonInfo(name,age)
}