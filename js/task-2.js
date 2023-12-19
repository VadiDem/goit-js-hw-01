function calcAverageCalories(days) {
  const totalCalories = 0;
  for (const i = 0; i < days.length; i++) {
    totalCalories += days[i].calories;
  }
  return days.length > 0 ? totalCalories / days.length : 0;
}
