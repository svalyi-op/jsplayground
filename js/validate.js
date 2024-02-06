document.addEventListener('DOMContentLoaded', function(event) {

    (function() {
     
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        var emailreg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let outPut = document.getElementById('outPut');

       let userinputs = document.getElementsByClassName("userinput");
        function getNameValid(data) {
            var xhttp = new XMLHttpRequest();
            const url = "http://localhost:3002/?"+data;
            xhttp.open("GET", url)
            xhttp.onreadystatechange = function() {//Call a function when the state changes.
                if(xhttp.readyState == 4 && xhttp.status == 200) {
                        resp = JSON.parse(xhttp.responseText);
                    if(resp.error == true) {
                        outPut.innerHTML = resp.errorMessage;
                    } else {
                        outPut.innerHtml = '';
                    }
                }
        }
        xhttp.send();
       }
        
        function handleUserInput(input) {
            if (input.name == 'username' && input.value.length > 3)
            {
                let name = input.value;

                sendData = '&name='+name;
                getNameValid(sendData);

            } else if(input.name == 'usermail' && input.value.length > 3){
                console.log(input.value.match(emailreg));
            }

        }


        for (var i = 0; i < userinputs.length; i++) {
            userinputs[i].onkeyup = function () {
                handleUserInput(this)
            };
        };
    }());
});