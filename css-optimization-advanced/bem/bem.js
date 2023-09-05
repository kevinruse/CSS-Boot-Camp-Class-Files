window.addEventListener('load', (event)=> {
    let foodGroups = document.querySelectorAll('nav>a>img');
    let cards = document.querySelectorAll('#main .card');
    let nav = document.querySelector('title-block__nav');
    for (let i = 0; i < foodGroups.length; i++) {
        foodGroups[i].addEventListener('click', function (event) {
            let group = event.target.id;
            console.log(group)
            let selectedGroup = event.target;

            selectedGroup.setAttribute('data-selected', true);

            let groupString = group.substring(0, group.indexOf("L"));
            console.log(selectedGroup);

            let opaqueElements = document.getElementsByClassName('opaque');
                for (let i = 0; i < opaqueElements.length; i++) {
                    opaqueElements[i].classList.remove('opaque');
                }
            document.getElementById(groupString).classList.add('opaque');
        }, false);
    }
});

