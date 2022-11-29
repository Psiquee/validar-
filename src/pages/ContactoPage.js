import '../styles/ContactoPage.css'

const ContactosPage = (props) => {
    return (
        <body>
            <div class="menu-btn">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="container">

                <hr />

                <section class="cards-banner-four">
                    <div class="content-2">
                        <h2>CONTACTOS</h2>
                    </div>
                </section>
                <body>
                    <div class="container-contacto">
                        <div class="img-text">
                            <img src="img/FINAL.png" alt="Logo-form" class="imagen-form" />

                            <div class="text-contacto">
                                <h4>
                                    CONSULTA POST COMPRA
                                </h4>
                                <p>Para realizar una consulta sobre una compra
                                    efectuada en nuestro local, solicitamos indicar ID de venta
                                    de Galga.</p>
                            </div>



                            <div class="links">


                                <a href="facebook.com">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="twitter.com">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="linkedin.com">
                                    <i class="fab fa-linkedin"></i>
                                </a>

                            </div>


                        </div>


                        <div class="formulario">
                            <form action="" method="" class="formulario">
                                <p>
                                    <label for="nombre">NOMBRE </label>
                                    <input type="text" name="nombre" class="form-control" />
                                </p>
                                <p>
                                    <label for="apellido">APELLIDO</label>
                                    <input type="text" name="apellido" class="form-control" />
                                </p>
                                <p>
                                    <label for="email">EMAIL</label>
                                    <input type="email" name="email" class="form-control" />
                                </p>
                                <p>
                                    <label for="mensaje">CONSULTA</label>
                                    <textarea name="mensaje"></textarea>
                                </p>
                                <button id="botonEnviar" type="submit" class="btn essence-btn form-boton">Enviar</button>
                            </form>
                        </div>
                    </div>
                </body>
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
export default ContactosPage;