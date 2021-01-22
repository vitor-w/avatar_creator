var avatar_view = document.querySelector('div.avatar_view');

function applyOption(id, folder, imgName) {

    var existingImg = document.querySelector(`img#${id}`)

    if( existingImg != null ) {
        console.log('GERE');
        avatar_view.removeChild(existingImg); 
    }

    console.log(avatar_view.childNodes);

    var option = document.createElement('img');
    option.id = `${id}`;
    option.src = `./public/images/${folder}/${imgName}.png`;
    option.alt = `${imgName}`;

    avatar_view.appendChild(option);

    if( existingImg != null ) {

        for(option of avatar_view.childNodes) {
            if (option.alt == existingImg.alt) {
                avatar_view.removeChild(option);
                console.log(existingImg.alt);
            }
        }
    }
}