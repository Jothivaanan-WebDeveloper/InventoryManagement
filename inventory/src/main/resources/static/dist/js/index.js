$(document).ready (function () {
    inventoryList();
});

let updateId;
let deleteId;

const inventoryList = () => {

        $.ajax({
        type: "GET",
        url: http+"/data",  
        contentType: "application/json; charset=utf-8",
        
        success: function(successData) {
            console.log("LIST",successData);
            generate_table(successData);
        },

        error: function(error) {
            console.log("ERROR", error);
        }
    })
}

const generate_table = (data) => {
    $("#table-id").DataTable({
        "destroy":true,
        "responsive": true,
        "lengthChange": false,
        "autoWidth": false,

        //  "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
        
            data :data,
            
            columns : [
                // {data : 'id'},
                {data: 'employeeCode'},
                {data: 'employeeName'},
                {data: 'systemInfo'},
                {data: 'headphoneInfo'},
                {data: 'keyboardInfo'},
                {data: 'mouseInfo'},
                {data: 'laptopStand'},
                {data: null,
                // "bSortable": false,  
                    "mRender": function (i) {
                        return '<button class="btn btn-secondary btn-sm" onclick="onEdit('+ i.id +')">' + 'Edit' + '</button> <button class="btn btn-primary btn-sm " data-toggle="modal" data-target="#modal-default" onclick="deleteConfirmation('+ i.id +')">' + 'Delete' + '</button>';    
                    }}
            ]

            });
            // console.log(data);

}

// function check(){
   
// }

const addDetails = () => {

    const inventoryDetails = {
        employeeCode : $("#text-employeeCode").val(),
        employeeName : $("#text-employeeName").val(),
        systemInfo : $("#text-systemInfo").val(),
        headphoneInfo : $("#text-headphone").val(),
        keyboardInfo : $("#text-keyboard").val(),
        mouseInfo : $("#text-mouse").val(),
        laptopStand : $("#text-stand").val()
    };
    // let inventoryDetails = Array.from(document.querySelectorAll('#form-id input')).reduce((acc, input) => ({...acc,[input.id]:input.value}),{});
    // alert(JSON.stringify(inventoryDetails));

    $.ajax({
        type: "POST",
        url: http+"/data",  
        dataType: 'json',
        async:false,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(inventoryDetails),

        
        success: function(successData) {
            resetForm();
            console.log("LIST",successData);
            toastr.success("User Added Succesfully", "Done!", { timeOut: 4000 });
            inventoryList();
        },

        error: function(error) {
            console.log("ERROR", error);
        }
    })
}

const onEdit = (id)=> {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Edge, Firefox, Opera
    
    
    $('#my-card').CardWidget('expand');
    $('#card-heading').text("Update Details");
    $('#btn-add').text("Update");

    $.ajax({
        url: http + "/id?id=" +id,
        type: 'GET',
        dataType: 'json',
        async: false,
        contentType: "application/json;charset=utf-8",
        

        success: function(successdata) {
            $("#update-id").val(successdata.id);
            $("#txtName").val(successdata.name);
            $("#text-employeeCode").val(successdata.employeeCode);
            $("#text-employeeName").val(successdata.employeeName);
            $("#text-systemInfo").val(successdata.systemInfo);
            $("#text-headphone").val(successdata.headphoneInfo);
            $("#text-keyboard").val(successdata.keyboardInfo);
            $("#text-mouse").val(successdata.mouseInfo);
            $("#text-stand").val(successdata.laptopStand); 
            
        },
        error: function(request, message, error) {
           alert("Data Processing Error");
           
        }
    });
}

const updateEmployee = (updateId) =>{
    // alert("update function");
    // alert(updateId);

    const emp = {
        id:updateId,
        employeeCode : $("#text-employeeCode").val(),
        employeeName : $("#text-employeeName").val(),
        systemInfo : $("#text-systemInfo").val(),
        headphoneInfo : $("#text-headphone").val(),
        keyboardInfo : $("#text-keyboard").val(),
        mouseInfo : $("#text-mouse").val(),
        laptopStand : $("#text-stand").val()
    }

    $.ajax({
        url: http + "/data",
        type: "PUT",
        dataType: 'json',
        async: false,
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(emp),

        success: function() {
            resetForm();
            inventoryList();
            toastr.success("User Added Succesfully", "Done!", { timeOut: 4000 });
            
        },
        error: function(request, message, error) {
           alert("Data Processing Error");
           
        }
});
}


const deleteConfirmation = (id) =>{
    deleteId=id;
    $('#modal-default').modal("show");
}

const onDelete =() => {
    
    $('#modal-default').modal("hide");

    $.ajax({
        type: 'DELETE',
        url: http + "/data?id="+deleteId,
        // dataType: 'json',
        // async: false,     
        contentType: "application/json;charset=utf-8",
    
        success: function(successData) {
            console.log(successData);
            toastr.success("Deleted Succesfully", "Done!", { timeOut: 4000 });
            inventoryList();
        },
        error: function(error) {
            console.log("ERROR",error);
        
        }
    });
}

const resetForm = () => {

    var validator = $( "#form-id" ).validate();
    validator.resetForm();  
    $("#form-id").trigger("reset");
    $('#my-card').CardWidget('collapse');
    $('#btn-add').text("Add");
    $('#card-heading').text("Add Details");

}
