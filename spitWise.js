// a -> 40
// b -> 20
// c -> 30
// d -> 70
// e -> 70
// total: 230.
// per share = 230 / 5 = 46
// 20,   30,  40, 70, 70
// +26, +16, +6,  -24, -24

const sortSpends = (spends, perPersonCost) => {
    let spendsArray = [];
    for(const key in spends) {
        spendsArray.push({name: key, amount: spends[key]})
    }
    spendsArray = spendsArray.sort((a, b) => a.amount - b.amount)
    
    return spendsArray.map((person) => ({...person, balance: perPersonCost - person.amount}))
    
}

const splitWise = (spends) => {
    let total = 0;
    let perPersonCost = 0;
    let numberOfPerson = 0;
    for(const key in spends) {
        total += spends[key];
        numberOfPerson++;
    }
    perPersonCost = total / numberOfPerson;
    const spendsSortedArray = sortSpends(spends, perPersonCost);
    console.log(`Total expenditure: ${total}`);
    console.log(`Cost per person: ${perPersonCost}`);
    spendsSortedArray.forEach((person) => console.log(`${person.name} spent ${person.amount} amount`))
    let i = 0;
    let j = 0;
    while(i < spendsSortedArray.length && j < spendsSortedArray.length) {
        if(spendsSortedArray[i]?.balance === 0) {
            i++
        }
        if(spendsSortedArray[j]?.balance >= 0) {
            j++
        }
        if(spendsSortedArray[i]?.balance !== 0 && spendsSortedArray[j]?.balance < 0){
            let amountToPay = 0;
            if(spendsSortedArray[i].balance > Math.abs(spendsSortedArray[j].balance)) {
                amountToPay = Math.abs(spendsSortedArray[j].balance);
                spendsSortedArray[i].balance = spendsSortedArray[i].balance - Math.abs(spendsSortedArray[j].balance);
                spendsSortedArray[j].balance = 0;
            } else {
                amountToPay = spendsSortedArray[i].balance;
               spendsSortedArray[i].balance = 0;
               spendsSortedArray[j].balance = spendsSortedArray[j].balance + amountToPay;
            }
            console.log(`${spendsSortedArray[i].name} needs to pay ${amountToPay} to ${spendsSortedArray[j].name}`)
        }
    }
}

const spendObject = {
    "ajit": 40,
    "amey": 20,
    "abhay": 30,
    "akshay": 70,
    "vikas": 70
}
const spendObject2 = {
    "ajit": 10,
    "amey": 10,
    "abhay": 11,
}
splitWise(spendObject2)
