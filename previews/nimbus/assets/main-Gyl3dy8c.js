import"./style-BGzFfMn0.js";var e=document.querySelector(`#app`);e.innerHTML=`
  <div class="navdiv">
    <header class="header-sticky">
        <nav class="navbar">
          <a href="#" class="navbar-brand">Nimbus</a>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-8">
            <a href="#" class="navmenu">Accueil</a>
            <a href="pricing" class="navmenu">Formules</a>
            <a href="#" class="navmenu">Aide</a>
          </div>

          <!-- Mobile Menu -->
          <details class="md:hidden relative">
          <summary class="list-none cursor-pointer text-white p-2">☰ Menu</summary>
          <div class="absolute right-0 top-10 w-48 bg-[#08051c] border border-white/[.06] p-4 rounded-md flex flex-col gap-4 z-50">
            <a href="#" class="navmenu">Accueil</a>
            <a href="pricing" class="navmenu">Formules</a>
            <a href="#" class="navmenu">Aide</a>
          </div>
          </details>

          <a href="#" class="btn-primary">Se connecter</a>
        </nav>
    </header>

  <section class="heroo" aria-labelledby="hero-title">
          <div class="mx-auto max-w-2xl">
            <h1 id="hero-title" class="primary-title">
              Toutes vos séries, sans<br /> 
              coupure publicitaire.
            </h1>
            <p class="paragraph-text">
              Un seul abonnement, un accès illimité. Regardez où vous voulez, quand vous voulez,<br /> résiliable à tout moment.
            </p>

            <div id="connexion" class="mx-auto mt-7 flex max-w-sm flex-wrap gap-2">
              <label class="sr-only" for="email">Adresse e-mail</label>
              <input id="email" name="email" type="email" placeholder="Adresse e-mail" class="h-9 min-w-44 flex-[1_1_12rem] rounded-sm border border-white/[.06] bg-slate-800 px-3 text-[11px] text-white outline-none placeholder:text-slate-500 transition hover:border-white/20 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20" />
              <button type="button" class="btn-secondary">
                Commencer <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
  </section>

  <section class="section-films pb-[clamp(4.5rem,9vw,6rem)]" aria-labelledby="trending-title">
          <h2 id="trending-title" class="secondary-title">Tendances du moment</h2>
          <div class="carte-grid">
            <div class="trending from-violet-950 via-violet-700 to-indigo-950" aria-hidden="true"></div>
            <div class="trending from-cyan-950 via-sky-700 to-slate-950" aria-hidden="true"></div>
            <div class="trending from-rose-950 via-rose-700 to-slate-950" aria-hidden="true"></div>
            <div class="trending from-amber-950 via-orange-700 to-slate-950" aria-hidden="true"></div>
            <div class="trending from-emerald-950 via-teal-700 to-slate-950" aria-hidden="true"></div>
            <div class="trending from-indigo-950 via-violet-700 to-slate-950" aria-hidden="true"></div>
          </div>
  </section>

  <section class="section-films pb-[clamp(5rem,10vw,7rem)]" aria-labelledby="new-title">
          <h2 id="new-title" class="secondary-title">Nouveautés</h2>
          <div class="carte-grid">
            <div class="trending from-slate-700 via-slate-600 to-slate-950" aria-hidden="true"></div>
            <div class="trending from-sky-950 via-cyan-700 to-slate-950" aria-hidden="true"></div>
            <div class="trending from-emerald-950 via-teal-700 to-slate-950" aria-hidden="true"></div>
            <div class="trending from-pink-950 via-rose-700 to-slate-950" aria-hidden="true"></div>
            <div class="trending from-orange-950 via-amber-700 to-slate-950" aria-hidden="true"></div>
            <div class="trending from-violet-950 via-violet-700 to-slate-950" aria-hidden="true"></div>
          </div>
  </section>

  <section class="section-films pb-[clamp(5rem,10vw,7rem)]" aria-label="Avantages de Nimbus">
          <div class="grid grid-cols-[repeat(auto-fit,minmax(min(11rem,100%),1fr))] gap-3">
            <article class="avantage-articles">
              <h2 class="text-xs font-bold text-white">Qualité 4K</h2>
              <p class="paragraph-text">Une image nette sur tous vos écrans compatibles.</p>
            </article>
            <article class="avantage-articles">
              <h2 class="text-xs font-bold text-white">Plusieurs écrans</h2>
              <p class="paragraph-text">Jusqu'à 4 profils sur un seul abonnement.</p>
            </article>
            <article class="avantage-articles">
              <h2 class="text-xs font-bold text-white">Téléchargement</h2>
              <p class="paragraph-text">Regardez hors connexion, en avion ou en déplacement.</p>
            </article>
            <article class="avantage-articles">
              <h2 class="text-xs font-bold text-white">Résiliable à tout moment</h2>
              <p class="paragraph-text">Aucun engagement, aucune surprise sur la facture.</p>
            </article>
          </div>
        </section>

        <section class="section-films pb-[clamp(5rem,10vw,7rem)]" aria-labelledby="faq-title">
          <h2 id="faq-title" class="secondary-title">Questions fréquentes</h2>
          <ul class="space-y-2 text-[11px] font-semibold text-slate-200">
            <li class="faqli"><span class="mr-2" aria-hidden="true">+</span>Combien coûte Nimbus ?</li>
            <li class="faqli"><span class="mr-2" aria-hidden="true">+</span>Où puis-je regarder Nimbus ?</li>
            <li class="faqli"><span class="mr-2" aria-hidden="true">+</span>Comment résilier mon abonnement ?</li>
          </ul>
        </section>

        <footer class="fouter">
        <div class="fouter-grid">
          <div>
            <p class="font-bold text-slate-300">Assistance</p>
            <a class="mt-2 block transition hover:text-white" href="#faq-title">Centre d'aide</a>
            <a class="mt-1.5 block transition hover:text-white" href="mailto:otmanmabrouk01@gmail.com">Contact</a>
          </div>
          <div>
            <p class="font-bold text-slate-300">Entreprise</p>
            <a class="mt-2 block transition hover:text-white" href="#">À propos</a>
            <a class="mt-1.5 block transition hover:text-white" href="#">Carrières</a>
          </div>
          <div>
            <p class="font-bold text-slate-300">Légal</p>
            <a class="mt-2 block transition hover:text-white" href="#">Confidentialité</a>
            <a class="mt-1.5 block transition hover:text-white" href="#">Conditions</a>
          </div>
          <div>
            <p class="font-bold text-slate-300">Nimbus</p>
            <p class="mt-2 leading-4">© 2026 Nimbus. Tous droits réservés à Mabrouk Otmane.</p>
          </div>
        </div>
      </footer>
  </div>
`;