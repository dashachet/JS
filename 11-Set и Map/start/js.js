"use strict";

/*
ЗАДАЧИ:

1) Создайте массив уникальных событий "events"(события), которые произошли в игре, за все время матча.
2) После окончания матча оказалось что выдача желтой карточки на 64-ой минуте матча была ошибочка. Удалите это свойство из Map.
3) Подсчитайте среднее время появления событий с учетом того что матч идет 90 минут. Напишите результат в консоль: (Пример: Событие в этом матче, появлялось в среднем, раз в 5 мин.)
4) Переберите Map, чтобы получить в консоль результат, какие события матча происходили в первой половине и какие во второй. Результат вывода в консоли должен быть таким:
[ПЕРВАЯ ПОЛОВИНА] 17: GOAL
[ПЕРВАЯ ПОЛОВИНА] 36: Substitution ... и так далее

*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = Array.from(new Set(gameEvents.values()))
console.log(events);

console.dir(gameEvents)


gameEvents.delete(64)

console.log(gameEvents);

console.log(`Каждое значение в матче появлялось раз в ${90 / (gameEvents.size)} минут`);

console.log(gameEvents.size);


for (let [min, events] of gameEvents) {
  if (min < 90) {
      let half = min <= 45 ? 'Первая половина матча' : 'Вторая половина'
  console.log(`${half} ${min} : ${events}`)
  } else {
    console.log('Матч длится 90 минут');
  }

}

