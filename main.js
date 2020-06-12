function toggleMenu(){
  let showMenu = document.querySelector('.links');
  if(showMenu.style.display === "block"){
    showMenu.style.display = "none";
  } else {
    showMenu.style.display = "block";
  }
}

toggleMenu();
