const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + '/');
    xhr.send();

    xhr.onreadystatechange = function () {
        // console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {

            cb(JSON.parse(this.responseText));
        }
    };
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });
    return `<td>${tableHeaders}</td>`;
    
}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");
    
    // The above two lines clear the html before printing the next one with a new button click. 
    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        })

        // data.forEach(function (item) {
        //     // Object.keys(item).forEach(function(key) {
        //     //     console.log(key);
        //     // })
        //     // el.innerHTML += "<p>" + item.name; + "</p>"
        // });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;

        /* Without the '.results' the html simply reads '[object Object]' with '.results', you get a list of 10 of these,
        so it still needs to be unpacked further. */


    });
}