export const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

export const generateHitboxes = (max: number, max_sim_hitboxes: number) => {
  const targetPresence: Array<number> = Array(max).fill(0);
  while (targetPresence.reduce((sum, num) => sum + num, 0) < max_sim_hitboxes) {
    const randomIndex = getRandomIndex(max);
    targetPresence[randomIndex] = 1;
  }
  return targetPresence;
}