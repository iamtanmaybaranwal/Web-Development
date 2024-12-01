console.log("this is the content for loops")

let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Tanmay",
    role: "Software Engineer",
    company: "Google"
}

for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
    }
