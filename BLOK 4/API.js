

async function pobierzUser(){
    const odpowiedz = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const dane = await odpowiedz.json();
    console.log(dane);
}
pobierzUser();

async function pobierzUsers(){
const odpowiedz = await fetch("https://jsonplaceholder.typicode.com/users");
const dane = await odpowiedz.json();
console.log(dane);
}
pobierzUsers();

async function pobierzPost() {
  const odpowiedz = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const dane = await odpowiedz.json();
  console.log(dane.title);
}
pobierzPost();

async function pobierzPost() {
  const odpowiedz = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const dane = await odpowiedz.json();
  const {title, body} = dane;
  console.log(title);
  console.log(body);
}
pobierzPost();


async function pobierzImiona(){
    const odpowiedz = await fetch("https://jsonplaceholder.typicode.com/users");
    const dane = await odpowiedz.json();
    const imiona = dane.map((x) => {
       return x.name;
    })
    console.log(imiona);
}
pobierzImiona();

async function filteredUsers(){
    const answer = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await answer.json();
    const titlesOnly = data.filter((x) => {
       return x.userId === 1;
    }).map((x) => {
        return x.title;
    })
    console.log(titlesOnly)
}
filteredUsers();