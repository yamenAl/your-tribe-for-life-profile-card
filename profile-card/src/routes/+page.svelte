<script>
  // keep your baseline
  import { GithubLogo, LoctionLogo, FdndLogo, PhoneLogo } from '$lib';
  import profil from '$lib/assets/img/profil.png';

  let { data } = $props();
  const person = data.person ?? {};

  const github = person?.custom?.socials?.github || '#';
  const location = person?.city || 'Dam | Netherland';
  const phone = person?.phone || '0031628557934';
  const wa = `https://wa.me/${String(phone).replace(/\D/g, '')}`;
</script>

<main>
  <section>
    <FdndLogo />
    <img src={profil} alt="Profile photo" width="200" height="300" />

    <div class="right">
      <section class="info">
        <h1>{person.nickname}</h1>
        <p>Front end design &amp; development</p>
      </section>

      <section class="loction">
        <h2>{location}</h2>
        <a href={"https://maps.google.com/?q=" + encodeURIComponent(location)} target="_blank" rel="noopener" aria-label="View location">
          <LoctionLogo />
        </a>
      </section>

      <section class="socials">
        <h2>GitHub</h2>
        <a href={github} target="_blank" rel="noopener" aria-label="GitHub profile">
          <GithubLogo />
        </a>
      </section>

      <section class="phone">
        <h2>{phone}</h2>
        <a href={wa} target="_blank" rel="noopener" aria-label="WhatsApp">
          <PhoneLogo />
        </a>
      </section>
    </div>
  </section>



    <nav >
      <button >← Prev</button>

      <button >Next →</button>
    </nav>

</main>
