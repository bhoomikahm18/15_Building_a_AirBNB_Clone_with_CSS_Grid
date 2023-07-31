const floatingBTN = document.querySelector('.footerBtn');

floatingBTN.addEventListener('click',e => {
    // console.log('click!!');
    const footer = document.querySelector('.footer');

    if(footer.classList.contains('active')){

        footer.classList.remove('active');

        e.target.innerText = 'Terms, Privacy, Currency & more';
    }
    else{
        footer.classList.add('active');

        e.target.innerText = 'X Close';
    }
})