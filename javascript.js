
function passResult(){

    var value = document.getElementsByName("rating");

    for(i = 0; i < value.length; i++){

        if(value[i].checked){
            document.getElementById("thankcard").style.display= "grid";
            document.getElementById("print-result").innerHTML = "You selected " + value[i].value + " out of 5";
        }

    }

}