console.log('foo')
const buttonShows = document.querySelectorAll('.showORHide');
console.log(buttonShows);
buttonShows.forEach(element => {
    element.addEventListener('click', function(){
        const target = document.querySelector('#' + element.getAttribute('data-room'));
        if(!target.classList.contains('not-active')){
            target.classList.add('not-active');
            element.classList.add('not-active');
        } else {
            target.classList.remove('not-active');
            element.classList.remove('not-active');
        }
    });

    console.log(element);
});