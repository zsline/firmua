export function tabs(){
    const tabs = document.querySelectorAll('.page__item');
    const windowInnerWidth =  document.documentElement.clientWidth;
    
    tabs.forEach(tab => {
        if(windowInnerWidth < 746){
            tab.classList.remove('active');
        }
        tab.addEventListener('click', (e) => {
            if(e.target.className == 'page__item--tab'){
                tabs.forEach(el => {
                    el.classList.remove('active');
                });
                e.target.parentElement.classList.add('active');
            }
        })
    })
}