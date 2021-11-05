async function fetchData() {
    let data;
    try{
   let response = await fetch('https://api.github.com/users/unipartdigital', {mode: "cors"})
   data = await response.json()
   console.log("fetched")
    }
    catch (err) {
        data = {"Error:": "No data found"}
        console.log(err)
    }

    const container = document.getElementById("container")
    const table = document.createElement("table")

    for (let prop in data) {
        let row = document.createElement("tr")
        row.innerHTML = `<td>${prop}</td><td>${data[prop]}</td>`
        table.appendChild(row)
    }

    container.appendChild(table) 

}

fetchData()
