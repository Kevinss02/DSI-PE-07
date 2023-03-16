import 'mocha';
import {expect} from 'chai';
import { ImperialLength } from '../src/ImperialLength';

describe('ImperialLength', () => {

  describe('getters and setters', () => {
    
    it('should get and set the value in millas correctly', () => {
      const imperialLength = new ImperialLength(10);
      expect(imperialLength.getMillas()).to.equal(10);
      imperialLength.setMillas(20);
      expect(imperialLength.getMillas()).to.equal(20);
    });

    it('should get and set the value in pulgadas correctly', () => {
      const imperialLength = new ImperialLength(10);
      expect(imperialLength.getPulgadas()).to.equal(633600);
      imperialLength.setPulgadas(1267200);
      expect(imperialLength.getMillas()).to.equal(200);
    });

    it('should get and set the value in pies correctly', () => {
      const imperialLength = new ImperialLength(10);
      expect(imperialLength.getPies()).to.equal(52800);
      imperialLength.setPies(105600);
      expect(imperialLength.getMillas()).to.equal(20);
    });

    it('should get and set the value in yardas correctly', () => {
      const imperialLength = new ImperialLength(10);
      expect(imperialLength.getYards()).to.equal(17600);
      imperialLength.setYards(35200);
      expect(imperialLength.getMillas()).to.equal(20);
    });
  });
});