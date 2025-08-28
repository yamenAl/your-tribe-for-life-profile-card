# Your Tribe for Life Profile Card

## Live Rendering

Over het weergeven van informatie uit Directus door middel van Sveltekit. 

### Doel van de opdracht

- Je kunt data ophalen vanuit Directus en tonen in je SvelteKit project
- Je kunt filteren in de data van Directus
- Je kunt verder met het ontwikkelen van je squad page met dynamische data

### Werkwijze

Vorig jaar hebben jullie al gewerkt met dynamische data vanuit Directus. Toen met een node server.js en templates in liquid. 

![alt text](../assets/image.png)
_Herinner je deze flow nog?_

Dit jaar gaan jullie aan de slag met het framework Svelte met SvelteKit. In SvelteKit is het ook mogelijk om met dynamische data van Directus, of andere API's, te werken. 

Om dit mogelijk te maken heb je nodig:

1. Directus endpoint
2. Data verwerken in SvelteKit

### Directus endpoint

Directus heeft een endpoint voor de squads en personen. Hierin kun je per jaar de squads bekijken en op die manier dus jouw squad vinden. 

**🛠️ Opdracht**: 

1. Bekijk de endpoints van Directus, en filter hieruit de 'squads' voor '2526': https://fdnd.directus.app/items/squad, https://fdnd.directus.app/items/person

2. Nu je de squads hebt kun je de personen ophalen en hun data.

_💡 ProTip: Lees nog eens de [instructies](https://github.com/fdnd-task/server-side-rendering-server-side-website/blob/main/docs/data-filtering-en-template-filters.md) van jaar 1 door als je bent vergeten hoe filteren werkt._

#### Extra bronnen
- [Directus API docs](https://directus.io/docs/api)
- [Guide om met filter rules om te gaan @ Directus API docs](https://directus.io/docs/guides/connect/filter-rules)

### Data verwerken in SvelteKit

SvelteKit werkt op basis van folder based routing. Dus al je routes zitten in 'mappen' (folders). De `GET` en `POST` requests worden onder water afgehandeld. Elke route heeft een o.a. een server en component (view) bestand. Data kan worden geimporteerd in de view van het component. 

**🛠️ Opdracht**: 

Maak een overzichtspagina en een detailpagina voor je project op basis van de RAP/PE principes voor vrijdag.

#### Extra bronnen:
- [Getting started @ Svelte docs](https://svelte.dev/docs/svelte/getting-started)


### Extra uitdagingen (optioneel)
<!-- Dit is voor de hardlopers die iets extra's willen. -->

- Zoek een manier om dezelfde data niet meermaals op te halen
- Begin componentbased met het opzetten van je templates

### Checkout
<!-- Een drietal vragen die ze kunnen opnemen in hun learning journal, waar de squadleaders dan weer op terug komen op vrijdag. -->
