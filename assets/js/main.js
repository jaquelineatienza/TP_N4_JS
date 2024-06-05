const procesarPromesa = async (url) => {
    try {
        const respuesta = await fetch(url);
        const info = await respuesta.json();
        return info; // Retornamos la información para que pueda ser usada en el `then`
    } catch (error) {
        console.log("error");
    }
}
const url = 'https://rickandmortyapi.com/api/character';
const contendor = document.getElementById('contendor'); 

//funcion para traer los elementos del join 
procesarPromesa(url)
    .then((info) => {
        info.results.forEach(elemento => {
            contendor.innerHTML+= `
                <div class="personaje">
                <img src="${elemento.image}" />
                <h2>${elemento.name}</h2>
                </div>`;
        });
    })
    .catch((error) => {
        console.log("Error en la promesa:", error);
    });
