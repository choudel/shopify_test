interface Person{
    name:string
    age:number
}
interface businessPerson extends Person{
    salary:number
}
interface AcademicPerson extends Person{
    publications:string[]
}

export default function play(){
    const person : businessPerson ={
        name:"philip",
        age:23,
        salary:1000
    }
    const person2:AcademicPerson={
        name:"john",
        age:35,
        publications:["lorem","ipsum"]
    }
    function logPerson(person:Person){
        console.log(person)
    }
    logPerson(person)
    logPerson(person2)
}