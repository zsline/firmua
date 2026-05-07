import * as aux from "../inc/auxiliary.js"



const modal = document.querySelector('.home-modal');
const modalBoxes = document.querySelectorAll('.box-item');
const modalInner = document.querySelector('.home-modal__inner');
const modalClose = document.querySelector('.home-modal__close');



export function homeModal(){
    if(modal){
        modalBoxes.forEach(el => {
            el.addEventListener('click', (e) => {
                modal.classList.add('open');
                    createInner(el, e);
            });
            modalClose.addEventListener('click', ()=>{
                modal.classList.remove('open');
            })
        });
    }
}

function createInner(el, e) {
    modalInner.innerHTML = '';
    let title = '';
    if(e.target.tagName !== 'LI'){
        createList(el);
        return;
    } else {
        title = e.target.innerText;
    }
        const div = document.createElement('div');
        div.className = 'home-modal__inner--title';
        div.textContent = aux.sentenceCase(title);
        modalInner.appendChild(div);
}

function createList(el) {
    modalInner.innerHTML = '';
    const listTitles = el.querySelectorAll('li');
    listTitles.forEach(title => {
        let html = `
        <div class="home-modal__inner--item">
            <div class="home-modal__inner--title">
                ${title.innerText}
            </div>
        </div>
        `;
        modalInner.insertAdjacentHTML('beforeend', html);
    });
}


