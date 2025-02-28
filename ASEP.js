function theme(){
    if(document.body.style.backgroundColor == 'white'){
        document.body.style.backgroundColor = 'black';
        document.querySelector('.t51')
        .innerHTML = 'change to light theme';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.querySelector('.t51')
        .innerHTML = 'change to dark theme';
        document.body.style.color = 'black';
    }
}