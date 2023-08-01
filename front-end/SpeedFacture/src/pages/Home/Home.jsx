import './home.scss'

function Home() {
   return (
      <main className='card__home-cont'>
         <article className='card__home'>
            <div className='card__home-bg'>
            
               <h2>Créer vos factures <span>simplement et gratuitement</span>, le tout en moins de cinq minutes</h2>
               <h2>Grace à notre outil en ligne, créer et éditer vos factures, devis, pour cela il vous suffit de créer un compte gratuitement</h2>
               <div>
                  <button>Créer un compte</button>
                  <button className='logIn'>Se connecter</button>
               </div>
            </div>
         </article>
      </main>
   )
}

export default Home;
