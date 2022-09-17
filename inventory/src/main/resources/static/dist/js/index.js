$(document).ready (function () {
    inventoryList();
});


const inventoryList = () => {
    alert("INSIDE DATA")

    $.ajax({
        type: "GET",
        url: http+"/data",  
        contentType: "application/json; charset=utf-8",
        
        success: function(successData) {
            console.log("LIST",successData);
        },

        error: function(error) {
            console.log("ERROR", error);
        }
    })
}



