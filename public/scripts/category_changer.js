var category_options_box = document.querySelector('div.category_options_box');

function changeCategory(folder, imgName, quantity) {

    category_options_box.innerHTML = "";

    for(var i = 1; i <= quantity; i++) {
        var option = document.createElement('div');
        option.classList.add('category_option');

        var img = document.createElement('img');
        img.src = `./public/images/${folder}/${imgName}${i}-1.png`;
        img.alt = `${imgName}${i}`;

        option.appendChild(img);

        category_options_box.appendChild(option);
    }
}