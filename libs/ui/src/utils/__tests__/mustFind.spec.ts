import {mustFind} from '../mustFind';

const mockedEntities = [
  {id: 1, name: 'Test1'},
  {id: 2, name: 'Test1'},
];

describe('mustFind', () => {
  it('It should return entity', () => {
    expect(mustFind((x) => x.id === 1, mockedEntities)).toBe(mockedEntities[0]);
  });

  it.skip('It should return throw error', () => {
    expect(mustFind((x) => x.id === 0, mockedEntities)).toThrow('Item not found');
  });
});
