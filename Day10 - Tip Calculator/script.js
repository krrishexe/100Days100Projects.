const billTotalInputDiv = document.getElementById('billTotalInput')
const tipInputDiv= document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill =()=>{

}

const increasePeople=()=>{
    
    numberOfPeople +=1;
    numberOfPeopleDiv.innerText = `${numberOfPeople}`
    calculateBill();

}
const decreasePeople = () =>{
    if(numberOfPeople<=1){
        return 
    }
    else{
        numberOfPeople-=1;
        numberOfPeopleDiv.innerText =`${numberOfPeople}`
        calculateBill();
    }
}