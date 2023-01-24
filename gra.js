import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();




loadSprite("tlo", "kartkaswiateczna69.png")
loadSprite("balwanstefek", "balwanstefan.png")

loadSound("muzyka","doszopyhej.mp3")



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

onKeyPress("space"), ()=>{
	play("muzyka")

})
