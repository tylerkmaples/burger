$(document).ready(function() {

    $('.devour').on('click', function() {
        var id = $(this).data('id');
        var devoured = {
            devoured: true
        };
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devoured
        }).then(
            function() {
                console.log('devoured burger', id);
            }
        );
    });

    $('.delete').on('click', function() {
        var id = $(this).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        })
        .then(
            function() {
                console.log('deleted burger', id);
            }
        );
    });

});