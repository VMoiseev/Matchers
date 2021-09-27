import sortByHealth from '../app';

test('Функция должна сортировать игроков по здоровью, от большего к меньшему', () => {
  const arr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortByHealth(arr)).toEqual(result);
  expect(sortByHealth(arr)).not.toBe(result);
});
