$(document).ready(function () {

    // --------------- Dupliplicate Data 1 Jquery ---------------

    // Hide the table initially
    $('#myTable').hide();

    $('#btn-brd').css('border-bottom', '4px solid #b4e0fe')

    // Show the table when the "Show Table" button is clicked
    $('#showBtn').click(function () {
        $('#myTable').show();
        $('#btn-brd').css('border-bottom', 'none')
    });

    // Hide the table when the "Hide Table" button is clicked
    $('#hideBtn').click(function () {
        $('#myTable').hide();
        $('#btn-brd').css('border-bottom', '4px solid #b4e0fe')
    });




   // --------------- Dupliplicate Data 2  Jquery ---------------

    // Hide the table initially
    $('#myTable1').hide();

    $('#btn-brd1').css('border-bottom', '4px solid #b4e0fe')

    // Show the table when the "Show Table" button is clicked
    $('#showBtn1').click(function () {
        $('#myTable1').show();
        $('#btn-brd1').css('border-bottom', 'none')
    });

    // Hide the table when the "Hide Table" button is clicked
    $('#hideBtn1').click(function () {
        $('#myTable1').hide();
        $('#btn-brd1').css('border-bottom', '4px solid #b4e0fe')
    });
    

});