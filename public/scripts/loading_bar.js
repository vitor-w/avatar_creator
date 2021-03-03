var i = 0;
function loading_bar () {
    var background = document.querySelector('div.background');

    background.className += ' size fade-in';

    if (i == 0) {
        i = 1;

        var progress = document.querySelector('div.loading_bar div.progress');
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if(width >= 100) {
                clearInterval(id);
                i = 0;

                setTimeout(() => {
                    background.classList.remove('fade-in');
                    background.classList.add('fade-out');
                }, 200);
            } else {
                width += 0.335;
                progress.style.width = width + '%';
            }
        }
    }
}