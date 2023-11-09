// ===============================
// 
//            Objects I
//       
// ===============================


console.log("%c leve 1_2", "color: blue; background-color: gold");

const person = 
{
    name: "Walter",
    alter: 54,
    sagNameAlter: () =>
    {
        // window.alert(`Hallo mein Name ist ${person.name} und ich bin ${person.alter} Jahre alt`);
    }
}

person.sagNameAlter();
console.log(person.name);
console.log(person.alter);


console.log("%c leve 1_4", "color: blue; background-color: gold");

let unsereHaustiere = 
[
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

const dogNames = Object.values(unsereHaustiere);
console.log(dogNames);

const newDogNames = {...unsereHaustiere};
console.log(newDogNames);
newDogNames[0].names = ["Balu", "Snoopy"];
console.log(newDogNames[0].names);

console.log("%c leve 1_5", "color: blue; background-color: gold");

let unserLager = 
{
    schreibtisch: 
    {
	    schublade: "Hefter"
    },
    schrank: 
    {
	    "Obere Schublade": 
        {
  	        Ordner1: "Dokumente",
  	        Ordner2: "Geheimnisse"
	    },
	    "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schreibtisch.schublade);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schrank["Obere Schublade"].Ordner2);

console.log("%c leve 1_7", "color: blue; background-color: gold");

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

const myMusicList = document.body.querySelector('#myMusicList');

myMusic.forEach((elt) => 
{
    myMusicList.innerHTML += `<div>${elt.artist} </div>`;
    myMusicList.innerHTML += `<div>${elt.title} </div>`;
    myMusicList.innerHTML += `<div>${elt.medium} </div>`;
    myMusicList.innerHTML += '<br>';
});

console.log("%c leve 1_8", "color: blue; background-color: gold");

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

console.log(studentData);

const selectedInfos = studentData.map((elt) => {
    console.log(elt.name);
    console.log(elt.coop);
    console.log(elt.emails);
});

const returnCity = studentData.map((elt) => {
    return elt.address.city;
});

console.log(returnCity);

console.log("%c leve 2_1", "color: blue; background-color: gold");

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];


let label = [];

edelMetallPreise.forEach((elt) => {
    label.push(elt.name);
});

console.log(label);

const label2 = edelMetallPreise.map((elt) => 
{
    return elt.name;
}); 

console.log(label2);

let prices = [];

edelMetallPreise.forEach((elt) => {
    prices.push(elt.preiseGramEuro);
});

console.log(prices);

const prices2 = edelMetallPreise.map((elt) => 
{
    return elt.preiseGramEuro;
}); 

console.log(prices2);

let changes2 = [];

edelMetallPreise.forEach((elt) => {
    changes2.push(elt.veraenderung);
});

console.log(changes2);

const changes = edelMetallPreise.map((elt) => 
{
    return elt.veraenderung;
}); 

console.log(changes);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const moreThan50 = edelMetallPreise.filter((elt) => elt.preiseGramEuro > 50 ? elt : null);
console.log(moreThan50);

console.log("%c leve 2_2", "color: blue; background-color: gold");

const singers = 
[
	{ name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
	{ name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
];

const sortedArray = singers.sort((elt1, elt2) => elt1.name > elt2.name ? 1 : -1);
console.log(sortedArray);

console.log("%c leve 2_3 und 2_4", "color: blue; background-color: gold");

// document.body.innerHTML = `<h1>Singers</h1> <div id="table-container"></div>`;

// const singers2 = [
//     { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" }, 
//     { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
// 	{ name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B"},
// 	{ name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock"},
// 	{ name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica"},
// 	{ name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock"},
// 	{ name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop"},
// 	{ name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock"},
// ];

const tableContainer = document.body.querySelector("#table-container");
const rowTitleContainer = document.body.querySelector("#row-title-container");
tableContainer.innerHTML = '<table style="width: 70%" id="tableOutput"></table>'

const tableOutput = document.body.querySelector('#tableOutput');

const rowTitel = Object.keys(singers[0]);

const showRowTitel = () => 
{
    rowTitleContainer.innerHTML += `
    <table style="width: 60%">
        <tr>
            <th id="sortName">${rowTitel[0]}</th>
            <th id="sortCountry">${rowTitel[1]}</th>
            <th>${rowTitel[2]}</th>
            <th id="sortGenre">${rowTitel[3]}</th> 
        </tr>
    </table>`
}

showRowTitel();

const showSingers = (array) =>
    array.forEach((band) => {
    tableOutput.innerHTML += `
    <tr>
        <tr>
            <td>${band.name}</td>
            <td>${band.country}</td>
            <td>${band.period_active.start} - ${band.period_active.end}</td>
            <td>${band.genre}</td>
        </tr>
    </tr>    
    </table>`
});

showSingers(singers);

const sortName = document.body.querySelector('#sortName');

sortName.addEventListener('click', () => {
    const sortedNames = singers.sort((elt1, elt2) => elt1.name > elt2.name ? 1 : -1);
    tableOutput.innerHTML = "";
    showSingers(sortedNames);
});

sortCountry.addEventListener('click', () => {
    const sortedCountrys = singers.sort((elt1, elt2) => elt1.country > elt2.country ? 1 : -1);
    tableOutput.innerHTML = "";
    showSingers(sortedCountrys);
});

sortGenre.addEventListener('click', () => {
    const sortedGenre = singers.sort((elt1, elt2) => elt1.genre > elt2.genre ? 1 : -1);
    tableOutput.innerHTML = "";
    showSingers(sortedGenre);
});

console.log("%c leve 2_5", "color: blue; background-color: gold");

const searchInput = document.body.querySelector('#searchInput');
const searchBtn = document.body.querySelector('#searchBtn');

searchBtn.addEventListener('click', () => {
    const showName = singers.filter((elt) => {
        if(elt.name.toLowerCase().includes(searchInput.value.toLowerCase()))
        {
            return elt;
        }
    });
    tableOutput.innerHTML = "";
    showSingers(showName);
});