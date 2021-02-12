$(document).ready(function() {
    // Gloval variable
    var element = $("#html-content-holder");
    var getCanvas;

    var body = document.body;

    // $("#btn-Preview-Image").on('click', function() {
    //     html2canvas(element, {
    //         onrendered: function(canvas) {
    //             $("#previewImage").append(canvas);
    //             getCanvas = canvas;
    //         }
    //     });
    // });

    // function download_img () {

    //     html2canvas(element, {
    //         onrendered: function(canvas) {
    //             $("#previewImage").append(canvas);
    //             getCanvas = canvas;
    //             console.log('before ' + getCanvas);
    //         }
    //     });

    //     // Now browser starts downloading
    //     // it intead of just showing it

    //     console.log('after ' + getCanvas);

    //     var imageData = getCanvas.toDataURL("image/png");

    //     var newData = imageData.replace(
    //     /^data:image\/png/, "data:application/octet-stream");

    //     $("#btn-Convert-Html2Image").attr(
    //     "download", "avatar.png").attr(
    //     "href", newData);

    //     html2canvas(element, {
    //         onrendered: function(canvas) {
    //             $("#previewImage").append(canvas);
    //             getCanvas = canvas;
    //             console.log('test');
    //         }
    //     });

    //     // Now browser starts downloading
    //     // it intead of just showing it

    //     var imageData = getCanvas.toDataURL("image/png");

    //     var newData = imageData.replace(
    //     /^data:image\/png/, "data:application/octet-stream");

    //     $("#btn-Convert-Html2Image").attr(
    //     "download", "avatar.png").attr(
    //     "href", newData);

    //     console.log(1);
    // };

    $("#btn-Convert-Html2Image").on('click', function() {
  
        let avatar_content = document.querySelector("div.avatar_view"); 

        let avatar_image = document.querySelector('div#html-content-holder');
        avatar_image.setAttribute('class', 'avatar_image');

        avatar_content.childNodes.forEach(element => {
            // console.log(element);
            node = element.cloneNode( true );
            console.log(node);
            avatar_image.appendChild(node);
        });
        // avatar_image.appendChild(avatar_content.childNodes[1]);

        console.log(avatar_image);

        body.appendChild(avatar_image);

        html2canvas(element, {
            onrendered: function(canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
            }
        });

            // Now browser starts downloading
            // it intead of just showing it

            console.log(getCanvas);

        setTimeout(() => {
            var imgageData =  
            getCanvas.toDataURL("image/png"); 
            
            // Now browser starts downloading  
            // it instead of just showing it 
            var newData = imgageData.replace( 
            /^data:image\/png/, "data:application/octet-stream"); 

            function download() {
                axios({
                    url: newData,
                    method: 'GET',
                    responseType: 'blob'
                })
                .then((res) => {
                    const url = window.URL
                    .createObjectURL(new Blob([res.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', 'avatar.png');
                        document.body.appendChild(link);
                        link.click();
                });
            }


            download();

            console.log($("#btn-Convert-Html2Image"));
        }, 3000);
    });
});

            // $("#btn-Convert-Html2Image").attr(
            // "download", "avatar.png").attr(
            // "href", newData);