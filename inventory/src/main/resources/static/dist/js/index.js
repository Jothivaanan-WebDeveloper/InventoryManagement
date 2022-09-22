$(document).ready (function () {

    let dataList;
    let deleteId;

    inventoryList();

    // $(function () {
    //     alert(dataList);

       
        // $('#example2').DataTable({
        //   "paging": true,
        //   "lengthChange": false,
        //   "searcgong": false,
        //   "ordering": true,
        //   "info": true,
        //   "autoWidth": false,
        //   "responsive": true,
        // });
    //   });
});

const addDetails = () => {

    let inventoryDetails = Array.from(document.querySelectorAll('#form-id input')).reduce((acc, input) => ({...acc,[input.id]:input.value}),{});

    $.ajax({

        url: http+"/data",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(inventoryDetails),

        success: function(successData) {

            resetForm();
            inventoryList();
            toastr.info('Details added successfully.', 'Done!', {timeOut: 3000});
        }
    })
}

const generateTable = (dataList) => {

    $("#example1").DataTable({
        "destroy": true,
        "responsive": true,
        "lengthChange": false,
         "autoWidth": false,
                 
          "data": dataList,

          "columns": [
           {"data": "employeeCode"},
           {"data": "employeeName"},
           {"data": "systemInfo"},
           {"data": "headphoneInfo"},
           {"data": "keyboardInfo"},
           {"data": "mouseInfo"},
           {"data": "laptopStand"},
           {
            "data":"id",
                render: function(dataId) {
                    return '<button class="btn btn-secondary btn-sm" onClick="deleteConfirmation('+dataId+')">Delete</button>';
                }
            }
          ],

       buttons: ["excel","colvis"]
      

    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
}


const inventoryList = () => {
   
    $.ajax({
        type: "GET",
        url: http+"/data",  
        contentType: "application/json; charset=utf-8",
        
        success: function(successData) {
            console.log("LIST",successData);
            dataList = successData;
            console.log("DATALIST",dataList);
            generateTable(dataList);
        },

        error: function(error) {
            console.log("ERROR", error);
        }
    });
}

const deleteConfirmation = (id) => {
    deleteId = id;
    $('#delete-model').modal('show');
}

const deleteDetails = () => {
    alert(deleteId);
    $('#delete-model').modal('hide');

    $.ajax({
        type: "DELETE",
        url: http+"/data?id="+deleteId,  
        contentType: "application/json; charset=utf-8",
        
        success: function(successData) {
            alert(successData);
            toastr.info('Record deleted successfully.', 'Done!', {timeOut: 3000});
            inventoryList();
        },

        error: function(error) {
            console.log("ERROR", error);
        }
    })
}


const resetForm = () => {

    var validator = $( "#form-id" ).validate();
    validator.resetForm();  
    $('#form-card').CardWidget('toggle');
}

