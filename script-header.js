function headerLinks() {
    const slider = document.getElementsByClassName('header-link-deroulant')[0];
    if(slider.children[1].className == 'header-visible') {
        slider.children[1].className = 'header-invisible'
    } else {
        headerLinksInvisible();
    }
}

function headerLinksInvisible() {
    const slider = document.getElementsByClassName('header-link-deroulant')[0];
    slider.children[1].className = 'header-visible'
}