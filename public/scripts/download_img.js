$(document).ready(function() {
    // Global variable
    var element = $("#html-content-holder");
    var getCanvas;

    const body = document.body;

    $("#btn-Convert-Html2Image").on('click', function() {

        loader(true);
  
        let avatar_content = document.querySelector("section.avatar_view"); 

        let avatar_image = document.querySelector('div#html-content-holder');
        avatar_image.setAttribute('class', 'avatar_image');

        avatar_image.innerHTML = null;

        avatar_content.childNodes.forEach(element => {
            // console.log(element);
            node = element.cloneNode( true );
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

        console.log(getCanvas);

        setTimeout(() => {
            var imageData =  
            getCanvas.toDataURL("image/png"); 
            
            // Now browser starts downloading  
            // it instead of just showing it 
            var newData = imageData.replace( 
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
                        loader(false);
                        console.log('response');
                });
            }

            download();

            console.log($("#btn-Convert-Html2Image"));
        }, 3000);
    });
});