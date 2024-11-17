// arguments object - no longer bound with arrow functions
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

const user = {
    name: 'Chadapohn',
    cities: ['Chiang Mai', 'Phuket', 'Bangkok', 'Rayong', 'Surin'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city + '!';
        });
        return cityMessages;
        // const that = this;
        // this.cities.forEach((city) => {
        //     console.log(that.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }

}

console.log(multiplier.multiply());
