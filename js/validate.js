document.addEventListener('DOMContentLoaded', function(event) {

    (function() {
     
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        var emailreg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

       let userinputs = document.getElementsByClassName("userinput");
        console.log(userinputs);
        


        for (var i = 0; i < userinputs.length; i++) {
            userinputs[i].onkeyup = function () {
                console.log(this);
                if (this.name == 'username')
                {
                    console.log(this.value.length > 3);
                } else {
                    console.log(this.value.match(emailreg));
                }

            };

        };
    }());
});