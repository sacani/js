function resolveAfter2Seconds(){
  return new Promise( resolve => {
	  setTimeout( () => {
      resolve( "resolved" )
		  }, 2000 )	
	})
}

async function asyncCall(){
  console.log( new Date(), "calling ..." )
  const result = await resolveAfter2Seconds()
	console.log( new Date(), result )
}	

asyncCall()
