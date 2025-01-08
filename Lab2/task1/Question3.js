
const employee={
    name: "Abhinash",
     role: "Developer",
    age: 20,
    location:"IN"
} 
console.log(employee)

function updateEmployeeDetails(employee,newrole){
    return{
        ...employee,//using spread operator it returns entire employee object 
        role:newrole// it updates role of hikm
    }
}
console.log(updateEmployeeDetails(employee,'senoir Developer'))
//console.log(employee)