export function stack_error(response) {
    if (typeof response.data === 'string') {
        toastr.error(response.status + ' ' + response.statusText)
    } else {
<<<<<<< HEAD
        let data = response.data;
=======
        let data = response.data.errors
>>>>>>> 9a115298f573500dcc8f72745b3b4a195c45bf4f
        let content = '';

        Object.keys(data).map(function(key, index) {
            let value = data[key];

            content += '<span style="color: #e74c3c">' + value[0] + '</span><br>';
        });

        swal({
            title: "Error Text!",
            type: 'error',
            html: content
        });
    }
}
