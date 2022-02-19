const txt = document.querySelector('h1');
txt.innerHTML = txt.textContent.replace(/\S/g, "<span>$&</span>");

const ltrs = document.querySelectorAll('span');
for(let i = 0; i < ltrs.length; i++){
    ltrs[i].addEventListener('mouseover', function(){
        ltrs[i].classList.add('active');
    })
}

const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>")


const letters = document.querySelectorAll('span');
for(let i = 0; i < letters.length; i++){
    letters[i].addEventListener('mouseover', function(){
        letters[i].classList.add('active');
    })
}