export async function load({ fetch }) {
    const equipoURL = `https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4335&s=2024-2025`;

    const response = await fetch(equipoURL);
    if (!response.ok) {
        return { equipos: [] }; // Devuelve un array vacío si hay un error
    }

    const data = await response.json();
    return {
        equipos: data.table ?? [] // Asegúrate de devolver el campo "table"
    };
}