let body = document.querySelector('body');
try{
    body.classList=localStorage.getItem("light");
} catch (e) {
    console.log(e)
}

let logo = document.querySelector('.container');
let menu = document.querySelector('.menu');

logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu');
});

let light = document.querySelector('.light');

light.addEventListener('click',function(){
    body.classList.toggle('lightmode');
    // document.getElementById('light').innerHTML = 'Sötét mód';
    localStorage.setItem("light",body.classList);
    document.querySelector('.light').innerHTML = body.classList.contains('lightmode')? 'Sötét mód':'Világos mód';
    // document.querySelector('.light').innerHTML = body.classList.contains('lightmode')? 'Dark mode':'Light mode';
});

let husvetitojas = document.querySelector('.husvetitojas');

husvetitojas.addEventListener('click',function(){
    window.alert('Szia Milán!');
});