const burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', function(e){
  let target = e.target;
  let DropdownMenu = document.querySelector('.burger-menu .dropdown');
  DropdownMenu.classList.toggle('visible');
});
document.body.addEventListener('click', function(e){
  let target = e.target;
  if(!target.classList.contains('menu-icon')) {
    document.querySelector('.burger-menu .dropdown').classList.remove('visible');
  }
});