const checkLogin = () => {
    let username = $("#text-username").val();
    let password = $("#pass-password").val();

    console.log(username, password);
    

    $.ajax ({
        type:"GET",
        url: http+"/login?username="+username+"&password="+password,
        contentType: "application/json",

        success: function () {
            window.location.href = 'dashboard';
        } ,
        error: function (errorData) {
            alert("ERROR",errorData);
        }


    });
}