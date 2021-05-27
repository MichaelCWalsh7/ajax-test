function getData(cb) {
    var xhr = new XMLHttpRequest();
    // var data; - this was for prevous lines of code for example, the setTimeout.

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    xhr.send();





    xhr.onreadystatechange = function () {
        // console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {

            cb(JSON.parse(this.responseText));

            // There are many ready states to an XMLHttpRequest, raning from 0 which UNSENT, to 4 which is DONE
            // First we check ready state of the request cleint.
            // Next is the status code, here 200 = OK. Request succeeded

            // document.getElementById("data").innerHTML = this.responseText;

            // console.log(typeof(this.responseText));   This returns 'string' to the console as it is just a string in the form of json
            // console.log(typeof(JSON.parse(this.responseText)));   This return 'object' to the console as now it is in json
            // console.log(JSON.parse(this.responseText));   Returns the json content, i.e various objects/properties
            // data = this.responseText;
            // console.log(data);   Returns the object as the new 'data' variable, however we can only use this WITHIN this function. 

            // setData(JSON.parse(this.responseText)); - This is for the deserialisation below. 
        }
    };
}

getData(function(data){
    console.log(data);
})

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);

// function setData(jsonData) {
//     data = jsonData;
//     console.log(data);
// } This code does something called 'deserialising' the json data

// setTimeout(function () {
//     console.log(data)
// }, 500)
/* The above function allows to take our data out of the function by executing after 500 miliseconds, giving the ready state plenty of time get to
and avoiding logging 'undefined.' */

// data.forEach(function (item) {
        //     // Object.keys(item).forEach(function(key) {
        //     //     console.log(key);
        //     // })
        //     // el.innerHTML += "<p>" + item.name; + "</p>"
        // });

/* Without the '.results' the html simply reads '[object Object]' with '.results', you get a list of 10 of these,
        so it still needs to be unpacked further. */
