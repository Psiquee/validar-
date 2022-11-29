import '../styles/HomePage.css'

const HomePage = (props) => {
    return (
        <body>

            <div class="menu-btn">
                <i class="fa-solid fa-bars"></i>
            </div>



            <div class="container">

                <hr />
                <header class="showcase">
                    <h2>DIAMANTE DESING</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nihil
                        porro excepturi nemo.
                    </p>

                </header>

                <div class="title-cards">
                    <h2>NUESTRAS JOYAS</h2>
                </div>

                <div class="new-cards">
                    <div class="item">
                        <figure>
                        <img src="img/anillo-gotico.png" alt="producto" />
                        </figure>
                        <div class="info-item">
                            <h3>Armonia</h3>
                            <button>Ver más</button>
                        </div>
                    </div>

                    <div class="item">
                        <figure>
                            <img src="img/anillo-gotico.png" alt="producto" />
                        </figure>
                        <div class="info-item">
                            <h3>Armonia</h3>
                            <button>Ver más</button>
                        </div>
                    </div>



                    <div class="item">
                        <figure>
                            <img src="img/anillo-gotico.png" alt="producto" />
                        </figure>
                        <div class="info-item">
                            <h3>Armonia</h3>
                            <button>Ver más</button>
                        </div>
                    </div>
                </div>
            </div>

            <script src="main.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossorigin="anonymous"
        ></script>
            
        </body>

    );
}
export default HomePage;