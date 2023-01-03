import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();




loadSprite("tlo", "kartka świateczna69.png")
loadSprite("balwanstefek", "bałwanstefan.png")



const background = add([
	sprite("tlo"),   
	pos(120, 80),    
	rotate(0),        
	origin("center"), 
])
const player = add([
	sprite("balwanstefek"),   
	pos(120, 80),    
	rotate(0),        
	origin("center"), 
])
