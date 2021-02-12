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


function applyOption(id, folder, imgName) {

    var existingImg = document.querySelector(`img#${id}`)

    if( existingImg != null ) {
        console.log('GERE');
        avatar_view.removeChild(existingImg); 
    }

    console.log(avatar_view.childNodes);
    for( item of avatar_view.childNodes) {
        console.log(item.alt);
    }

    var option = document.createElement('img');
    option.id = `${id}`;
    option.src = `/images/${folder}/${imgName}.png`;
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

    postCharacteristics();
}