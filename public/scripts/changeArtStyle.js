$( '#art_style' ).change(function () {
    const avatar_base = document.querySelector('img#base');
    
    artStyle = $('#art_style option:selected').text();

    avatar_base.src = `/images/${artStyle}/base_ver2.png`;

    
    changeCategory(category.folder, category.imgName, category.quantity);
});