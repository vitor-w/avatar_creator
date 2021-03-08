async function postCharacteristics () {

    const avatar_view = document.querySelector('section.avatar_view');

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

    const avatar_view = document.querySelector('section.avatar_view');

    const existingImg = document.querySelector(`section.avatar_view img#${id}`)

    if(existingImg) {

        avatar_view.removeChild(existingImg);

        if(`${URL}/${path}/${imgName}.png` == existingImg.src) {
            return;
        }
    }

    var option = document.createElement('img');
    
    option.id = `${id}`;
    option.src = `${path}/${imgName}.png`;
    option.alt = `${artStyle}-${imgName}`;

    avatar_view.appendChild(option);

    postCharacteristics();
}