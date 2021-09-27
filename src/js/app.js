export default function sortByHealth(gamers) {
  return gamers.sort((a, b) => b.health - a.health);
}
