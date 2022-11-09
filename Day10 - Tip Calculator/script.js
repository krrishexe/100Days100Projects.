const billTotalInputDiv = document.getElementById('billTotalInput')
const tipInputDiv= document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')
const people = document.getElementById('people')

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill =()=>{

    const bill = Number(billTotalInputDiv.value);

        // get the tip from user & convert it into a percentage (divide by 100)

    let tipPercent = Number(tipInputDiv.value / 100);

        // get the total tip amount

    let tipAmount = tipPercent * bill;

        // calculate the total (tip amount + bill)

    const total = tipAmount + bill ;

        // calculate the per person total (total divided by number of people)

    const perPersonTotal = total / numberOfPeople;

        // update the perPersonTotal on DOM & show it to user

    perPersonTotalDiv.innerText=`$${perPersonTotal}`

}

const increasePeople=()=>{
    
    numberOfPeople +=1;
    numberOfPeopleDiv.innerText = `${numberOfPeople}`
    calculateBill();

}
const decreasePeople = () =>{
    if(numberOfPeople<=1){
        return ;
    }
    else{
        numberOfPeople-=1;
        numberOfPeopleDiv.innerText = `${numberOfPeople}`
        calculateBill();
    }
}