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
	pos(120, 10),    
	rotate(0),        
	origin("center"), 
])

add([
	play("muzyka")
])

// onKeyPress("space", ()=>{
// 	play("muzyka")

// })

onUpdate(()=>{

	// if(player.pos.x <300) 
	// player.pos.x=player.pos.x+1

	if(player.pos.y <170) 

	
		player.pos.y=player.pos.y+4
		player.pos.y=player.pos.y-2
	
})