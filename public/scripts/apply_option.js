var avatar_view = document.querySelector('div.avatar_view');

var test = [1, 2, 3, 4];

async function postCharacteristics () {
    const avatar = [];

    for(characteristic of avatar_view.childNodes) {
        if (characteristic.alt != null) {
            avatar.push(characteristic.alt);
        }
    }

    console.log(avatar);

    const options = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(avatar)
    };

    const res = await fetch('/characteristics', options);
    const characteristics = await res.json();
    console.log(characteristics);

};


function applyOption(id, path, imgName) {

    var existingImg = document.querySelector(`div.avatar_view img#${id}`)

    if( existingImg != null ) {
        console.log('GERE');
        avatar_view.removeChild(existingImg); 
    }

    console.log(avatar_view.childNodes);
    for( item of avatar_view.childNodes) {
        console.log(item.alt);
    }

    var option = document.createElement('img');
    console.log(path);
    option.id = `${id}`;
    option.src = `${path}/${imgName}.png`;
    option.alt = `${artStyle}-${imgName}`;

    avatar_view.appendChild(option);

    if( existingImg != null ) {

        for(option of avatar_view.childNodes) {
            if (option.src == existingImg.src) {
                console.log('removed: ');
                console.log(option.src);
                avatar_view.removeChild(option);
                console.log(existingImg.src);
            }
        }
    }

    postCharacteristics();
}