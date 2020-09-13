function main() {
    function getDataGlobal() {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response => {
            if(!response.ok) {
                throw Error("Error");
            }
            return response.json();
        })
        .then(data => {
            document.querySelector("#positiv-data").innerHTML = `${data.cases}`
            document.querySelector("#recovered-data").innerHTML = `${data.recovered}`
            document.querySelector("#death-data").innerHTML = `${data.deaths}`
        })
        .catch(error => {
            console.log(error);
        })
    }

    function getDataCountry() {
        fetch('https://disease.sh/v3/covid-19/countries')
        .then(response => {
            if(!response.ok) {
                throw Error("Error");
            }
            return response.json();
        })
        .then(data => {
            const dataCountry = document.querySelector("#data-country");
            data.forEach(data => {
                dataCountry.innerHTML += `
                <tr>
                    <td><img src="${data.countryInfo.flag}" width="20px"> ${data.country}</td>
                    <td>${data.cases}</td>
                    <td>${data.active}</td>
                    <td>${data.recovered}</td>
                    <td>${data.deaths}</td>
                </tr>
                `
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    getDataGlobal();
    getDataCountry();
}

export default main;
