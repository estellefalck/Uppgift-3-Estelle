

let cityNames = ["kiruna", "uppsala", "malmo", "gothenburg", "stockholm"];

for (let i = 0; i < cityNames.length; i++) {
    let city = cityNames[i]; 
    
    for (let j = 0; j < city.length; j++) {
        let letter = city[j]; 
        console.log(letter);
    }
}
