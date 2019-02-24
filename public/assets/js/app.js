$(document).ready(function() {

    $('.devour').on('click', function(e) {
        e.preventDefault();
        let id = $(this).data('id');
        let devoured = {
            devoured: true
        };
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devoured
        }).then(
            function() {
                console.log('devoured burger', id);
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });

    $('.delete').on('click', function(e) {
        e.preventDefault();
        let id = $(this).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        })
        .then(
            function() {
                console.log('deleted burger', id);
                // Reload the page to get the updated list
                location.reload();
            }
        )
        .catch(
            
        )

    });

});