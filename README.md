
# Your Tribe for Life Profile Card

A dynamic profile card built with SvelteKit and a headless CMS. Focus: clean UI, reusable components, and data-driven content.

**[Live demo link:](https://fastidious-flan-49d827.netlify.app/)** <br>
**[Figma link:](https://www.figma.com/design/aoy3Qs3H9NEUyLU9ttkNBh/profilecard?node-id=31-67&t=yGrtNHFpUHo8JW60-1)**

<img width="1018" height="542" alt="Screenshot 2025-09-19 054933" src="https://github.com/user-attachments/assets/9c67cd74-54bf-4d0e-afe9-8b4cd41cbff8" />

## Wat ik heb gebouwd

- **Dynamische website**: de content van het visitekaartje wordt **runtime** opgehaald uit een **Data API**.
- **SvelteKit + JavaScript**: server-side data-fetching in `+page.server.js`, renderen in `+page.svelte`.
- **Flip-cover** visitekaartje met 3D-animatie.
- **Open/close** via klik of toetsenbord (Enter/Space).
- **Paging** met Prev/Next-knoppen én pijltjestoetsen (←/→).
- **Responsive** (mobile-first) en schaalbaar naar grotere schermen.


### How it works
### State & navigation
- `opened` — schakelt de cover (front → inside)
- `spread` — huidige “spread” binnenin
- `TOTAL_SPREADS = 2` — pas aan als je meer spreads toevoegt

**Keyboard**
- **Enter** / **Space** opent de cover
- **ArrowRight** / **ArrowLeft** wisselt tussen spreads
- Focus gaat bij mount direct naar de kaart voor directe keyboard-support


https://github.com/yamenAl/your-tribe-for-life-profile-card/blob/bbc38c83e7e48d3dfe48edcbbae32f7eff6fc53e/profile-card/src/routes/%2Bpage.svelte#L15-L31


## Accessibility

- `aria-pressed={opened}` op de card (states zichtbaar voor screenreaders)
- `aria-hidden={opened}` op de cover (verbergt front wanneer open)



## Components & assets

- **Icons/SVG**: `GithubIcon`, `LoctionIcon`, `FdndIcon`, `PhoneIcon`
- **Profile photo**: `profil.png`
- **FDND-badge**: absoluut gepositioneerde badge op de cover

## Styling highlights

- 3D, boekachtige **flip** met `transform-style: preserve-3d` en `rotateY`
- Fluid sizing met `svh`/`vw`/`vh` en `clamp`
- Subtiele schaduwen/gradients voor diepte
https://github.com/yamenAl/your-tribe-for-life-profile-card/blob/bbc38c83e7e48d3dfe48edcbbae32f7eff6fc53e/profile-card/src/routes/%2Bpage.svelte#L106-L108


## Eindresultaat (video)

Bekijk hier de werking van de flip-cover, paging en data ophalen.

https://github.com/user-attachments/assets/557b77d5-6b7f-4269-9cb1-14758534c286


## Installatie

Om dit project te bouwen moeten onderstaande stappen uitgevoerd worden. **Node.js** en **npm**

### Project aanmaken
Als je een nieuwe SvelteKit-project wil starten, voer een van de volgende commando’s uit in de terminal:
```bash
npx sv create
````
Volg vervolgens de stappen die in de terminal verschijnen.

## Installeren

Na het aanmaken van het project, installeer alle dependencies:

```bash
npm install
````
## Ontwikkelen
Start de ontwikkelserver. Wijzigingen worden automatisch gerefresht:

```bash
npm run dev -- --open
````
## Builden
Maak een productieversie van je app:

```bash
npm run build
````

## Wil je het project lokaal **snel bekijken**?
Clone deze project 
In termijnal:
```bash
cd myapp          
npm install
npm run build
npm run preview   # opent standaard op http://localhost:4173

````
https://svelte.dev/docs/svelte/getting-started
## Bronnen

[CYd project](https://cydstumpel.github.io/your-tribe-profile-card/) helped me shape the idea I wanted to build; I was inspired by her work.<br>
[Sveltekit](https://svelte.dev/docs/svelte/getting-started)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


