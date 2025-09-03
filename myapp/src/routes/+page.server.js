export async function load({url}) {
    const membersResponse = await fetch ('https://fdnd.directus.app/items/person/?sort=name&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND%20Jaar%201"}}}},{"squads":{"squad_id":{"cohort":"2526"}}}]}')
    const membersData = await membersResponse.json();
    console.log(membersData)
}