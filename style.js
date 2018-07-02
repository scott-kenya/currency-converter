function convertCurrency()
{
    //we need the value when the user changes the values and the second one too

var from = document.getElementById('from').value;
var to = document.getElementById('to').value;

//we need to contact the api using xml http request

var xmlhttp = new XMLHttpRequest();

//typre the api url and the name of the two currencies seperated by comma

var url ="http://data.fixer.io/api/latest?access_key=badf2baf7ed44aa195ec97a9da9cf802&format=1" + from + "," + to;

//open the connections using get method. u need the url 

xmlhttp.open("GET", url, true);

//send the request

xmlhttp.send();

//then if its true call function and check the status and readystate within the function

xmlhttp.onreadystatechange = function(){
    //if readystate = 4 and status =200

if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {

    //means the response is ready so enter response

    var result = xmlhttp.responseText;

    //being a string format(text)we need to enter a javascript object

    //alert(result);

    var jsResult = JSON.parse(result);//we need to parse result into JSON

    //TIME FOR CALCULATIONS
    //WE NEED TO GET THE VALUE FROM RESILTS AND THE API RATES
//this will give us the value for one unit
    var oneUnit = jsResult.rates[to]/jsResult.rates[from];

    //we need to multiply it by the value entered into the text box

    var amt = document.getElementById("fromAmount").value;

    //multiply this amt by oneunit to display the amount into the text box
    //this will give us the required value
    document.getElementById("toAmount").value = (oneUnit*amt). t0Fixed(2);

        }
    }
}