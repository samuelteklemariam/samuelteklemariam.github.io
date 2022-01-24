window.addEventListener("DOMContentLoaded", function () {
    //get the form elements 
    var form = document.getElementById("my-form"); 
    
    var status = document.getElementById("status"); 

    //functions
    function sucess(){
        form.reset();
        // buttoon.style= "display: none";
        status.classList.add('success');
        status.innerHTML = "Thanks!";
    }

    function error(){
        status.classList.add('error');
        status.innerHTML = "Opps! There was a problem.";
    }

    //handle form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        this.insertAdjacentText(form.method, form.action, data, success, error);
    });

    //helper function
    function ajax(method, url, data, success, error){
        var xhr = new XMLHttpRequest();
        xhr.open(nethod, url);
        xhr.setRequestHeader("Accep", "application,json");
        xhr.onreadystatechange = function (){
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if(xhr.status == 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error (xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }

});
