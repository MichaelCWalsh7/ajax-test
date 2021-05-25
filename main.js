var xhr = new  XMLHttpRequest();
var data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

// YOU NEED TO GO BACK AND REVIEW WTF IS HAPPENING WITH THIS VARIABLE IN THE PARENTHESIS!!!!!!
function setData(jsonData) {
    data = jsonData;
    console.log(data);
}


xhr.onreadystatechange = function() {
    if ( this.readyState == 4 && this.status == 200) {

        // There are many ready states to an XMLHttpRequest, raning from 0 which UNSENT, to 4 which is DONE
        // First we check ready state of the request cleint.
        // Next is the status code, here 200 = OK. Request succeeded

        // document.getElementById("data").innerHTML = this.responseText;

        // console.log(typeof(this.responseText));   This returns 'string' to the console as it is just a string in the form of json
        // console.log(typeof(JSON.parse(this.responseText)));   This return 'object' to the console as now it is in json
        // console.log(JSON.parse(this.responseText));   Returns the json content, i.e various objects/properties
        // data = this.responseText;
        // console.log(data);   Returns the object as the new 'data' variable, however we can only use this WITHIN this function. 

        setData(JSON.parse(this.responseText));
    }
};

