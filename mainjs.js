const darkModeButton = document.getElementById('themeToggle');
const body =   document.body
darkModeButton.addEventListener('click',()=>{
body.classList.toggle('dark-mode');
if (!body.classList.contains('dark-mode')){
  darkModeButton.textContent= 'Dark mode';
}else{
    darkModeButton.textContent= 'Light Mode';
}
})

const currentYear = dayjs().format('YYYY');
document.getElementById('currentYear').innerHTML = currentYear