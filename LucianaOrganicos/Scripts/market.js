$(document).ready(function () {
    $("#marketform").validate({
        debug: true,
        rules: {
            txtdate: { required: true },
            txtmarket: { required: true, maxlength: 50 }
        },
        messages: {
            txtdate: { required: "Data é obrigatório!" },
            txtmarket: { required: "Nome da feira é obrigatório!" }
        }
    });

    $("#btnclear").click(function () {
        var textBox = $("#txtmarket").get(0);
        textBox.setCustomValidity("O conteúdo não parece correto!");
    })
});