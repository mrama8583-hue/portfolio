const darkModeButton = document.getElementById('themeToggle');
const body =   document.body
darkModeButton.addEventListener('click',()=>{
body.classList.toggle('dark-mode');
if (!body.classList.contains('dark-mode')){
  darkModeButton.innerHTML= 'Dark mode'
}else{
    darkModeButton.innerHTML= 'Light Mode'
}
})
