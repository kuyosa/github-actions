// app.test.js
import { isEvenDay } from './app.js';

function test(description, callback) {
  try {
    callback();
    console.log(`pass: ${description}`);
  } catch (error) {
    console.error(`error: ${description}`);
    console.error(error);
  }
}

test('Вернуть True для чётных дней', () => {
  const result = isEvenDay(new Date('2024-06-02'));
  if (!result) throw new Error('Ожидалось true для дня 2');
});

test('Вернуть True для нечётных дней', () => {
  const result = isEvenDay(new Date('2024-06-03'));
  if (result) throw new Error('Ожидалось true для дня 3');
});
