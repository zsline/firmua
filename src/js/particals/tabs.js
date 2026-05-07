export function tabs(){
    const tabs = document.querySelectorAll('.page__item');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            if(e.target.className == 'page__item--tab'){
                tabs.forEach(el => {
                    el.classList.remove('active');
                });
                e.target.parentElement.classList.add('active');
                // const parent = e.target.parentElement;
                // parent.scrollIntoView({
                // behavior: 'smooth',
                // block: 'start'
                // });
            }
        })
    })
}