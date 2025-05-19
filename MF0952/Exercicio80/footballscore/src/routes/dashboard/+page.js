// +page.js
export async function load({fetch}) {
  const res = await fetch('https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4335&s=2024-2025');
  const data = await res.json();
  let events = data.events || [];
  
  // Ordenar por fecha descendente
  events = events.sort((a, b) => new Date(b.dateEvent) - new Date(a.dateEvent));
  
  return { events };
}
