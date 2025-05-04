export function isEvenDay(date = new Date()) {
    const day = date.getDate();
    return day % 2 === 0;
  }