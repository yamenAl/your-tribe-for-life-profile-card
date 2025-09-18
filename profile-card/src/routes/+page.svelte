<script>
  import profil from '$lib/assets/img/profil.png';
  import { GithubIcon, LoctionIcon, FdndIcon, PhoneIcon } from '$lib';
  import { onMount } from 'svelte';

  // Svelte 5: props come from load()
  let { data } = $props();
  const person = $derived(data.person);

  // open/close and page flipping 
  let opened = $state(false);
  let spread = $state(0);               
  const TOTAL_SPREADS = 2;  
  
    // 0 = first spread, 1 = second spread...
  const canPrev = $derived(spread > 0);
  const canNext = $derived(spread < TOTAL_SPREADS - 1);

  function toggleOpen(){ opened = !opened; }
  function next(){ if (canNext) spread += 1; }
  function prev(){ if (canPrev) spread -= 1; }

  function onKey(e){
    if (!opened && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      opened = true;
      return;
    }
    if (!opened) return;
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft')  prev();
  }

  let cardEl;
  onMount(() => { cardEl?.focus(); });
</script>


<style>
.profile-countent{ 
  width:100%; 
  height:100svh; 
  position:relative;
  }
.profile-stage{ 
  position:fixed; 
  inset:0; 
  display:grid; 
  place-items:center; 
  }
.profile-card{

  position:relative;
  width:min(92vw,360px); 
  height:min(92vh,580px);
  transform-style:preserve-3d; 
  outline:none;
}

/* Cover (front) */
.profile-cover {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: grid;
  grid-auto-rows: max-content;
  align-content: center;
  gap: 18px;
  padding: 28px 24px 26px;
  border-radius: 28px;
  background: radial-gradient(
    140% 110% at 20% 6%,
    var(--gradient-cover-start) 0,
    #0e2a4b 40%,
    #0a1f3a 70%,
    var(--gradient-cover-end) 100%
  );
  box-shadow: 
    0 20px 80px rgba(0, 0, 0, 0.55),
    inset 0 2px 0 rgba(255, 255, 255, 0.06),
    inset 0 -2px 0 rgba(0, 0, 0, 0.35);
  border: 1px solid var(--border-weak);
  transform-origin: left center;
  transition: transform var(--dur-cover) var(--ease-cover);
  backface-visibility: visible;

  &::before {
    content: "";
    position: absolute;
    inset: 22px;
    border-radius: 22px;
    background: linear-gradient(180deg, #0e1a2e, #0a1322);
    box-shadow: var(--shadow-inset-hair), inset 0 18px 26px rgba(0, 0, 0, 0.45);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 10px;
    border-radius: 24px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0));
    mix-blend-mode: overlay;
    pointer-events: none;
  }
}

.profile-card[aria-pressed="true"] {
  .profile-cover {
    transform: rotateY(-180deg);
    pointer-events: none;
  }
}

.fdnd-badge {
  position: absolute;
  top: -5vh;
  right: -7vw;
}

.profile-front {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 18px;
  justify-items: center;
}

.photo {
  display: grid;
  place-items: center;

  img {
    width: 20vh;
    height: auto;
    object-fit: contain;
    margin-left: 10vw;
    border-radius: 22px;
    filter: drop-shadow(0 22px 30px rgba(0, 0, 0, 0.55));
    border: 0;
  }
}

.right {
  display: grid;
  gap: 14px;
  justify-items: center;
  text-align: center;
}

.info {
  h1 {
    font-size: 1.4rem;
    margin: 2px 0 0;
  }

  p {
    margin: 4px 0 0;
    color: var(--color-secondary);
    font-weight: 700;
    font-size: 0.95rem;
  }
}


/* Links row */
.profile-links {
  display: flex;
  justify-content: center;
  gap: 18px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    font-weight: 600;

    h2 {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 600;
    }

    a {
      display: inline-grid;
      place-items: center;
    }
  }
}


/* WhatsApp  */
.phone {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: var(--color-button-bg);
  color: var(--color-button-text);
  border-radius: 999px;
  box-shadow: 0 10px 24px rgba(27, 224, 182, 0.35);
  margin-top: 5vh;

  h2 {
    margin: 0;
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.02em;
  }
}




/* Inside pages */
/* Inside pages */
.profile-pages {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  border-radius: 28px;
  overflow: hidden;
  padding: 10px;
  background: radial-gradient(
    120% 120% at 10% 0%,
    #0f1222 0,
    #0a0f1b 55%,
    #0a0f1b 100%
  );
  box-shadow: inset 0 0 0 1px var(--border-weak),
              0 20px 70px var(--shadow-color);

  &[data-opened="false"] {
    display: none;
  }
}

.profile-page {
  color: #fff;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 18px;

  h2,
  h3 {
    margin: 0.2rem 0 0.25rem;
    font-weight: 900;
    letter-spacing: 0.01em;
  }

  h2 {
    font-size: clamp(1.5rem, 2.8vw, 2rem);
  }

  h3 {
    font-size: clamp(1.2rem, 2.2vw, 1.5rem);
  }

  p {
    margin: 0 0 0.8rem;
    font-weight: 800;
    color: #33d6ff;
  }
}

/* Favourite things */
.fav-rows {
  display: grid;
  gap: 12px;
  margin-top: 10px;
}

.fav-row {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    flex: 1 1 0;
    max-width: 240px;
    display: grid;
    grid-template-rows: auto auto;
    gap: 6px;
    text-align: center;
  }

  h3 {
    margin: 0;
    font-weight: 800;
    font-size: 1rem;
    letter-spacing: 0.01em;
  }

  p {
    margin: 0;
    font-weight: 800;
  }
}

/* Controls */
.profile-controls {
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.profile-btn {
  border: 1px solid var(--border-strong);
  background: var(--btn-surface);
  color: var(--color-text);
  padding: 10px 16px;
  border-radius: 12px;
  font-weight: 700;
}

.profile-status {
  opacity: 0.8;
  font-size: 0.9rem;
}



/* =========================================================
   BREAKPOINTS
   =======================================================*/
@media (min-width:700px){
  .profile-card{ width:380px; height:620px; }
}

@media (min-width:900px){
  .profile-card{
    width: clamp(28rem, 62vw, 64rem);
    height: clamp(22rem, 60vh, 40rem);
  }

  .profile-pages{
    grid-template-columns:1fr 1fr;
    gap:0; padding:16px; position:relative; min-height:60vh;
  }
  .profile-pages::before{
    content:""; position:absolute; top:16px; bottom:16px; left:50%;
    width:1px; background: var(--divider-gradient);
  }

  .photo img{ margin-left:4vw; width:15vw; }

  .profile-page{
    place-items:start; text-align:left; padding:24px;
  }
  .profile-page p{ max-width:40ch; }
}

@media (min-width:1200px){
  .profile-card{
    width: clamp(42rem, 58vw, 70rem);
    height: clamp(26rem, 58vh, 44rem);
  }
  .profile-page p{ max-width:48ch; }
  .photo img{ width:320px; }
}

</style>


<main class="profile-countent">
  <section class="profile-stage">
    <section
      class="profile-card"
      bind:this={cardEl}
      tabindex="0"
      role="button"
      aria-pressed={opened}
      on:click={toggleOpen}
      on:keydown={onKey}
    >
      <!-- FRONT COVER -->
      <section class="profile-cover" aria-hidden={opened}>
        <span class="fdnd-badge" aria-label="FDND">
          <FdndIcon /> 
        </span>

        <section class="profile-front">
          <figure class="photo">
            <img src={profil} alt="Profile photo" width="200" height="300" />
          </figure>

          <section class="right">
            <section class="info">
              <h1>{person.nickname}</h1>
              <p>Front end design &amp; Development</p>
            </section>

            <ul class="profile-links">
              <li>
                <GithubIcon />
                <h2>GitHub</h2>
                <a href={person.website} target="_blank" rel="noopener" aria-label="GitHub profile"></a>
              </li>
              <li>
                <LoctionIcon />
                <h2>Dam | Netherlands</h2>
                <a href="https://maps.google.com/" target="_blank" rel="noopener" aria-label="View location"></a>
              </li>
            </ul>

            <section class="phone">
              <PhoneIcon />
              <h2>{person.custom.whatsApp}</h2>
              <a href="https://www.whatsapp.com/" target="_blank" rel="noopener" aria-label="WhatsApp"></a>
            </section>
          </section>
        </section>
      </section>

      <!-- INSIDE PAGES -->
      <section class="profile-pages" data-opened={opened}>
        {#if opened}
          {#if spread === 0}  <!-- SPREAD 1 -->
            <article class="profile-page">
              <h2>Description</h2>
              <p>{person.custom.description}</p>
            </article>
            <article class="profile-page">
              <h2>Inspiration</h2>
              <p>{person.custom.inspiration}</p>
            </article>

          {:else if spread === 1} 
            <article class="profile-page">
              <h2>About me</h2>
                <h3>Role</h3>
                <p>{person.role}</p>
                <h3>Squads</h3>
                <p>{person.squads}</p>
                <h3>Bio</h3>
                <p>{person.bio}</p>
            </article>


            <article class="profile-page">
              <h2>My favourite things</h2>
              <div class="fav-rows">
                <ul class="fav-row">
                  <li>
                    <h3>Hobby</h3>
                    <p>{person.fav_hobby}</p>
                  </li>
                  <li>
                    <h3>Animal</h3>
                    <p>{person.fav_animal}</p>
                  </li>
                </ul>
                <ul class="fav-row">
                  <li>
                    <h3>Coffee</h3>
                    <p>{person.fav_coffee}</p>
                  </li>
                  <li>
                    <h3>Book</h3>
                    <p>{person.fav_book_genre}</p>
                  </li>
                </ul>
              </div>
            </article>
          {/if}
        {/if}
      </section>
    </section>
  </section>

  {#if opened}
    <nav class="profile-controls" aria-label="Page navigation">
      <button class="profile-btn" on:click={prev} disabled={!canPrev}>← Prev</button>
      <span class="profile-status">{spread + 1} / {TOTAL_SPREADS}</span>
      <button class="profile-btn" on:click={next} disabled={!canNext}>Next →</button>
    </nav>
  {/if}
</main>

