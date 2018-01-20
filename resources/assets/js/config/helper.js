export function stack_error(response) {
    if (typeof response.data === 'string') {
        toastr.error(response.status + ' ' + response.statusText)
    } else {
<<<<<<< HEAD

        let data = response.data.errors
=======
        let data = response.data.errors;
>>>>>>> 4f383f004e6158d93f8bd73fa7d2bed2d2138929
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
