
export async function load({ params, fetch }) {
    const { idTeam } = params;
    const equipoURL = `https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${idTeam}`;

    const response = await fetch(equipoURL);
    if (!response.ok) {
        return { equipo: null };
    }
    const data = await response.json();
    return {
        equipo: data.results?.[0] ?? null
    };
}
