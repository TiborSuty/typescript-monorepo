import {getRandomId} from '../getRandomId';

describe('getRandomId', () => {
  it('returns random id with eag- prefix', () => {
    expect(getRandomId().includes('eag-')).toBe(true);
  });

  it('returns unique id', () => {
    expect(getRandomId()).not.toEqual(getRandomId());
  });
});
