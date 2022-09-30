const formHandler = async (event) => {
  event.preventDefault();
  

  const monster = document.querySelector("#monster").value.trim();
  const character_type = document.querySelector("#type").value.trim();
  const weapons = document.querySelector("#weapon").value.trim();
  const description = document.querySelector("#description").value.trim();
  const health = document.querySelector("#health").value.trim();
  
  if(monster && character_type && weapons && description && health){
    const response = await fetch("/create_monster", {
      method: "POST", 
      body: JSON.stringify({
        monster, 
        character_type, 
        weapons, 
        description, 
        health,
      }),
      headers: {"Content-Type" : "application/json"},
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create monster');
    }
  }
};




document.querySelector("#createMonster").addEventListener('submit', formHandler);