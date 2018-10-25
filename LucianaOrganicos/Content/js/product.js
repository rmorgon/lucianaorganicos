$(document).ready(function () {
    $("#txtproduct").focus();

    $("#productform").validate({
        debug: true,
        rules: {
            txtproduct: { required: true, maxlength: 30 },
            txtcategory: { required: true, maxlength: 30 }
        },
        messages: {
            txtproduct: { required: "Descrição do produto é obrigatório!" },
            txtcategory: { required: "Categoria é obrigatório!" }
        }
    });

    

    $("#btnSave").click(function () {

        if ($("#productform").valid() == false)
            return;

        var vmProductModel= {
            Id: $("#txtid").val(),
            Product: $("#txtproduct").val(),
            Category: $("#txtcategory").val()
        };
        var url = rootPath + "/Product/Save";
        $.ajax({
            type: "POST",
            url: url,
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(vmProductModel),
            success: function (data) {
                if (data.Success) {
                    $.notify({ message: data.message }, { type: 'success' });
                    productloadtable();
                }
            },
            error: function (e) {
                $.notify({ message: data.message }, { type: 'warning' });

            }
        });
    });

    function productloadtable() {
        var url = rootPath + "/Product/GetAll";
        $.ajax({
            type: "GET",
            url: url,
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            //data: JSON.stringify(vmProductModel),
            success: function (data) {
                if (data.Success) {
                    var lines = '';

                    for (var i = 0; i < data.Products.length; i++) {
                        lines += '<tr onclick=loadproductbyid(' + data.Products[i].Id + ')>';
                        lines += '<td>' + data.Products[i].Id + '</td>';
                        lines += '<td>' + data.Products[i].Product + '</td>';
                        lines += '<td>' + data.Products[i].Category + '</td>';
                        lines += '</tr>';
                    }

                    //$("#tblproduct tbody").empty();
                    $("#tblproduct tbody").append(lines);
                }
            },
            error: function (e) {
                $.notify({ message: data.message }, { type: 'warning' });

            }
        });
    }

    function loadproductbyid(productid) {
        var url = rootPath + "/Product";
        $.ajax({
            type: "POST",
            url: url,
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            data: {
                id: productid
            },
            success: function (data) {
                if (data.Success) {
                    var lines = '';

                    for (var i = 0; i < data.Products.length; i++) {
                        lines += '<tr onlick=loadproductbyid(' + data.Products[i].Id + ')>';
                        lines += '<td>' + data.Products[i].Id + '</td>';
                        lines += '<td>' + data.Products[i].Product + '</td>';
                        lines += '<td>' + data.Products[i].Category + '</td>';
                        lines += '</tr>';
                    }

                    $("#tblproduct tbody").empty();
                    $("#tblproduct tbody").append(lines);
                }
            },
            error: function (e) {
                $.notify({ message: data.message }, { type: 'warning' });

            }
        });
    }

    $("#btnLoad").click(function () {
        productloadtable();
    });
})