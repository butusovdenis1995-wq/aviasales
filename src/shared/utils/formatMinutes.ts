export default function formatMinutes(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const formattedMins = mins < 10 ? `0${mins}` : mins;
  return `${hours}Ч ${formattedMins}М`;
}
