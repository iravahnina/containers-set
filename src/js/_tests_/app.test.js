import Team from '../app';

const team = new Team();

test('add1', () => {
    team.add('bowman');
    const result = ['bowman'];
    expect(team.add('bowman')).toEqual(result);
});

test('add2', () => {
    team.add('bowman');
    const result = 'Персонаж уже существует в команде';
    expect(team.add('bowman')).toThrow(result);
});