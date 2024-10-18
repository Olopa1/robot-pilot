async function move_robot(direction){
    const url = "http://192.168.0.179:8000/move-robot?side=";   
    try{
        const response = await fetch(url+direction);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);

    }catch(error){
        console.log(error.message)
    }    
}