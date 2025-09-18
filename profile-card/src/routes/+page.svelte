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

<main class="profile-wrap">
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

