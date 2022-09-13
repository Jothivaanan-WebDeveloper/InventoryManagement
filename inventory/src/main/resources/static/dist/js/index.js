
const inventoryList = () => {
    alert("INSIDE INV")

    $.ajax({
        type: "get",
        url: "http://localhost8080/data",  
        contentType: "application/json; charset=utf-8",
        
        success: function(successData) {
            console.log("LIST",successData);
        },

        error: function(error) {
            console.log("ERROR", error);
        }
    })
}

$(document).ready (function () {
    inventoryList();
});

