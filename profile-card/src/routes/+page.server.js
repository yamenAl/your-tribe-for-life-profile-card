export async function load({ url }) {
    const personID = 191

    const baseUrl = "https://fdnd.directus.app/items/person";
  
    const personResponse = await fetch(`${baseUrl}/${personID}`);
    const personResponseJSON = await personResponse.json();

    personResponseJSON.data.custom = JSON.parse(personResponseJSON.data.custom);
  
    return {
      person: personResponseJSON.data
    };
  }
  