function createStack() {
    const items = [];
    return {
        push(item){
            items.push(item)
        },
        pop(){
            return items.pop();
        }
    }
}

const stack = createStack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
console.log(stack.pop()); // pops 20
console.log(stack.items)
stack.items = [1,2,3]
console.log(stack.pop()) // pops 15 not 3. original stack array is not modified


// function createStack() {
//     return {
//         items: [],
//         push(item){
//             this.items.push(item)
//         },
//         pop(){
//             this.items.pop();
//         }
//     }
// }
//
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();// => 5
// console.log(stack.items)

