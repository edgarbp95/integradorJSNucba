const containerSeries = document.getElementById("container-series")
const buttonLogin = document.getElementById("login");
const content = document.getElementById("content");
const logo = document.getElementById("logo");

const series = [
    {
        nombre:"Stranger Things",
        primerEpisodio:"15 de julio de 2016",
        temporadas:"4",
        descripcion:"Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.",
        autor:"Hermanos Duffer",
        url:"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/05/stranger-things.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1",
    },
    {
        nombre:"Euphoria",
        temporadas:"2",
        descripcion:"Un grupo de estudiantes de secundaria navega entre drogas, relaciones sexuales, traumas, redes sociales, amor y amistad.",
        autor:"Marcell Rév; Drew Daniels; Adam Newport-Berra; André Chemetoff",
        url:"https://images.squarespace-cdn.com/content/v1/59973af5f14aa1ab06cba333/1568078311150-U19TZIVG0S5XWXBT2241/Euphoria+.jpg?format=2500w",
    },
    {
        nombre:"The Boys",
        primerEpisodio:"26 de julio de 2019",
        temporadas:"3",
        descripcion:"Cuando los superhéroes abusan de sus superpoderes en lugar de usarlos para el bien, unos muchachos se embarcan en una búsqueda heroica para exponer sus secretos.",
        autor:"Hermanos Duffer",
        url:"https://m.media-amazon.com/images/G/01/pv_starlight/theboys-s1-4f31a4b5-56d1-45ee-a26e-b55c48f3e99f/V2/SevenCarouselImages_S1_1920x1080_Homelander.jpg",
    },
    {
        nombre:"The Terminal List",
        primerEpisodio:"1 de julio de 2022",
        temporadas:"1",
        descripcion:"James Reece regresa a casa después de que todo su pelotón de Navy SEAL es emboscado, solo para descubrir que nuevas fuerzas oscuras trabajan en su contra y ponen en peligro a sus seres queridos.",
        autor:"",
        url:"https://cdn.milenio.com/uploads/media/2022/06/29/chris-pratt-taylor-kitsch-llegan.jpeg",
    },
    {
        nombre:"Game of Thrones",
        primerEpisodio:"17 de abril de 2011",
        temporadas:"8",
        descripcion:"Es la descripción de dos familias poderosas, reyes y reinas, caballeros y renegados, hombres falsos y honestos, haciendo parte de un juego mortal por el control de los Siete Reinados de Westeros y por sentarse en el trono más alto.",
        autor:"George Raymond Richard Martin",
        url:"https://fondosmil.com/fondo/8775.jpg",
    }
]

      

for(let serie in series){
    let serieHTML = ` 
    <div class="col">
      <div class="card shadow-sm">
        <img src=${series[serie].url} alt=${series[serie].nombre}>
        <div class="card-body serie-card">
          <p class="card-text">${series[serie].nombre}</p>
          <p class="card-text">${series[serie].descripcion}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group button-card">
              <button id="Serie" onclick="ROUTER.load('serie')" type="button" class="btn btn-sm btn-outline-secondary">VER</button>
            </div>
          </div>
        </div>
      </div>`

    containerSeries.innerHTML += serieHTML
}

buttonLogin.addEventListener("click",()=>{
  content.innerHTML = `
  
  <div class="login-register">
  <form class="loginForm">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>`
  history.pushState(null, "", "login");
})

logo.addEventListener("click",()=>{
  content.innerHTML = `
  <main>
  <div class="banner">
      
      <section id="banner" class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light text-white">Unete a una comunidad activa</h1>
            <p class="lead text-white">Encuentra información detallada de tus series y peliculas favoritas. Comparte tu valoración y ayuda a otros wikinautas a encontrar el mejor contenido.</p>
            <p>
              <a id="login" href="#" class="btn btn-primary my-2">Login</a>
              <a href="#" class="btn btn-dark my-2">Register</a>
            </p>
          </div>
        </div>
      </section>
  </div>
      
  
    <div class="album py-5 bg-light">
      <div  class="container">
  
        <div id="container-series" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          
        </div> 
      </div>
    </div>
  
  </main>
  `
  history.pushState(null, "", "home");
})