/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */


// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
const getRandom = ((min, max) => {
    const minCeil = Math.ceil(min)
    const maxFloored = Math.floor(max)

    return Math.floor(Math.random() * (maxFloored - minCeil) + minCeil)
})
const freelancer = () => {
        const indxName = Math.floor(Math.random() * NAMES.length)
        const indxOcc = Math.floor(Math.random() * OCCUPATIONS.length)
        const ranPrice = getRandom(PRICE_RANGE.min, PRICE_RANGE.max)
        
        const output = {
            name: NAMES[indxName],
            occupation:OCCUPATIONS[indxOcc] ,
            price: ranPrice
        }
        return output
    }

const state = ((count) => {
    let output = []        
    for(let i = 0;i < count; i++){
        obj = freelancer()
    }
    return output;
})

const prices = ((count) => {
    let output = []
    for(let i = 0;i < count; i++){
        obj = freelancer()
        output.push(obj.price)
    }
    return output;
})

const avgPrice = (nums) => {
    let sum = nums.reduce((accumulator, current) =>
         accumulator + current, 0)
    return sum/nums.length;
}

const test = prices(NUM_FREELANCERS)

$app = document.querySelector("#app")
function render(){
    const header = document.querySelector("header")
    const headerP = document.createElement("p")
    header.appendChild(headerP)
    headerP.innerHTML = `The average rate is \$${avgPrice(test).toFixed(2)}`
    const table = document.createElement("table")
    table.attribute("id", "tableFreelancers")

    //table header
    const tbody = document.createElement("tbody")
    const thead = document.createElement("thead")
    const headerRow = document.createElement("tr")

    if (test.length > 0) {
        for (const key in test[0]){
            const th = document.createElement("th")
            th.innerText = key
            header.ariaRowCount.appendChild((th))
        }
        tbody.appendChild(tr)
    }
    table.appendChild(tbody)

    //Create table body
    test.forEach((dataRow) => {
        //create a table row
        const tr = document.createElement("tr")
        //populate each table row
        for(const key in dataRow){
            const td = document.createElement("td")
            //Populate each rows cell
            td.innerText = dataRow(key)
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    })
    //Append tale to #appid
    $app.appendChild(table)
}

render();