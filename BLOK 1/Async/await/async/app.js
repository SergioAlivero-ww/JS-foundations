console.log("1");
setTimeout(() => console.log("2"), 10);
console.log("3");

const p = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(p);


async function getTodo() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data1 = await data.json();
    console.log(data1);
}
getTodo();


async function test() {
    console.log("A");
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log("B");
    const data1 = await data.json();
    console.log("C");
}
console.log("START");
test();
console.log("END");

async function getUser() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await data.json();
    console.log(user.name);
    console.log(user.email);
    console.log(user.address.city);
}
getUser();

// start, koniec, minęła 1 sekunda
console.log("start");
setTimeout(() => console.log("minęła sekunda"), 1000);
console.log("koniec");

// A, B, C
setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B")
    }, 1000)
}, 1000)

setTimeout(() => {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        console.log("C");
        setTimeout(() => {
            console.log("D")
        }, 1000)
    }, 5000)
}, 1000);