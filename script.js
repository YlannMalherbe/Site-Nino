function position(active) {
    const navbar = document.getElementById('slider-nav');
    for (let i = 0; i < navbar.children.length; i++) {
        if (navbar.children[i].id == active) {
            navbar.children[i].className = 'nav-active'
        }
        else {
            navbar.children[i].className = 'nav-passive'
        }
    }
    const slider = document.getElementsByClassName('slider')[0];
    for (let i = 0; i < slider.children.length; i++) {
        if (navbar.children[i].id == active) {
            slider.children[i].className = 'img-active'
        }
        else {
            slider.children[i].className = 'img-passive'
        }
    }
}

function positiveModulo(number, divisor) {
    return ((number % divisor) + divisor) % divisor;
  }

function imageSuivante() {
    const navbar = document.getElementById('slider-nav');
    const slider = document.getElementsByClassName('slider')[0];
    let newActive = 0
    for (let i = 0; i < navbar.children.length; i++) {
        if (navbar.children[i].className == 'nav-active') {
            newActive = (i+1)%navbar.children.length
            navbar.children[i].className = 'nav-passive'
            slider.children[i].className = 'img-passive'
        }
    }

    navbar.children[newActive].className = 'nav-active'
    slider.children[newActive].className = 'img-active'

}

function imagePrecedente() {
    const navbar = document.getElementById('slider-nav');
    const slider = document.getElementsByClassName('slider')[0];
    let newActive = 0
    for (let i = 0; i < navbar.children.length; i++) {
        if (navbar.children[i].className == 'nav-active') {
            newActive = positiveModulo(i-1, navbar.children.length)
            navbar.children[i].className = 'nav-passive'
            slider.children[i].className = 'img-passive'
        }
    }

    navbar.children[newActive].className = 'nav-active'
    slider.children[newActive].className = 'img-active'
}