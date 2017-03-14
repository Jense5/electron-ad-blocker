import { expect } from 'chai';
import index from '../src/index';

describe('Default tests', () => {
  it('should add', () => { expect(index.add(2, 4)).to.equal(6); });
  it('Should subtract', () => { expect(index.subtract(2, 4)).to.equal(-2); });
});
