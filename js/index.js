const ul = document.querySelector('ul');
ul.addEventListener('click', selectList);
ul.addEventListener('mousedown', (e) => e.preventDefault());

let last = null;

function selectList(e) {
    let target = e.target;

    if (target.tagName != "LI") {
        return;
    }

    if(e.ctrlKey || e.metaKey) {
        target.classList.toggle('selected');
    } else if(e.shiftKey) {
        selectFromLast(target);
    } else {
        deleteSelected();
        target.classList.add('selected');
    }

    last = target;
}

function deleteSelected() {
    const lis = document.querySelectorAll('li');

    for(let i = 0; i < lis.length; i++) {
        lis[i].classList.remove('selected');
    }
}

function selectFromLast(target) {
    const lis = document.querySelectorAll('li');
    let prev = 0;
    let cur = null;

    lis.forEach( (el, i) => {
        if(el == target) {
            cur = i;
        } else if(el === last) {
            prev = i;
        }
    });
    const indexes = [prev, cur].sort((a,b) => a - b);

    for(let i = indexes[0]; i <= indexes[1]; i++ ) {
        lis[i].classList.add('selected');
    }
}
