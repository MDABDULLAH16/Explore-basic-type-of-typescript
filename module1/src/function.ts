function add(num1:number, num2:number) {
    return num1+ num2
}
add(3, 4);

// arrow function
const arrow = (num1: number, num2: number): number => num1 + num2;

// function in object, its call method
const poorUser = {
    fistName: 'Abdullah',
    balance: 614,
    addRoll(balance: number) :string {
        return `this is my bank Balance ${this.balance + balance}`;
        
    }
}

// map function
const arr: number[] = [12, 43, 44, 78];

const newArray :number[] = arr.map((elem:number):number =>  elem*elem)