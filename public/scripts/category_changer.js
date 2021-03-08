function categoryChanger({ folder, imgName, quantity }) {
    var category_options_box = document.querySelector('div.category_options_box');

    let path = `images/${artStyle}/${folder}`;

    category_options_box.innerHTML = "";

    for(var i = 1; i <= quantity; i++) {
        
        let option = document.createElement('div');
        option.classList.add('category_option');
        option.setAttribute('onclick', `applyOption('${imgName}', '${path}', '${imgName}${i}-2')`);

        let img = document.createElement('img');
        img.src = `${path}/${imgName}${i}-1.png`;
        img.alt = `${artStyle} ${imgName} ${i}`;

        option.appendChild(img);

        category_options_box.appendChild(option);
    }
}

function changeCategory( folder, imgName, quantity ) {
    category.folder = folder;
    category.imgName = imgName;
    category.quantity = quantity;

    console.log(folder, imgName, quantity);

    console.log(category);

    categoryChanger(category);
}