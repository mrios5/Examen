fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(res => res.json())
    .then(data => {
       // console.log(data.results)
      data.results.forEach(element => {
            console.log(`Nombre: ${element.name}      Url: ${element.url} `)
        });
        const arraydata = data.results.map(poke => poke.name)
        console.log(arraydata)
    })
    .catch(error => console.log(error))  

    //async await

const ObtNombres = async() => {
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        const data = await (await res).json()
        console.log(data)
        const arraydata = data.results.map(poke => poke.name)
        console.log(arraydata)
    } catch(error){
        console.log(error)
    }
}

ObtNombres()