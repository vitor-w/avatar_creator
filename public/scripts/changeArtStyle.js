var avatar_base = document.querySelector('img#base');

$( '#art_style' ).change(function () {
    console.log($('#art_style option:selected').text());
    artStyle = $('#art_style option:selected').text();
    console.log(artStyle);

    avatar_base.src = `/images/${artStyle}/base_ver2.png`;

    
    changeCategory(category.folder, category.imgName, category.quantity);
});