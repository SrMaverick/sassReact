import React from "react"
import Logo from "../assets/logo-filmes.png"
import JohnWick from "../assets/jhonwick4.png"
import GuardioesdaGalaxia from "../assets/guardioesdagalaxiavolume3.png"
import Somdaliberdade from "../assets/somdaliberdade.png"

import "./style.scss"

function Movies(){
    return(
        <>
            <header>
                <div>
                    <img src={Logo} alt="logo do site" />
                    <h1>Movies Pop</h1>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Filmes</li>
                        <li>Séries</li>
                        <li>Animes</li>
                        <li>Contato</li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                    <figure>
                        <img src={JohnWick} alt="Jhon_Wick_4" />
                        <img src={GuardioesdaGalaxia} alt="Guardioes_da_Galaxia_volume3" />
                        <img src={Somdaliberdade} alt="Som_da_Liberdade" />
                    </figure>
                </section>
            </main>
        </>
    )
}
export default Movies