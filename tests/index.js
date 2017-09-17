import * as N from '../src/index.js';

describe("numbers", () => {
  context("even numbers", () => {
    it("is even.", () => {
      N.isEven(2).should.be.eql(true);
    });

    it("not even.", () => {
      (!N.isEven(1)).should.be.eql(true);
    });
  });

  context("odd numbers", () => {
    it("is odd.", () => {
      N.isOdd(1).should.be.eql(true);
    });

    it("not odd.", () => {
      (!N.isOdd(2)).should.be.eql(true);
    });
  });

  context("convert int to char", () => {
    it("int to char", () => {
      N.toChar(65).should.be.eql('A');
    });

    it("char to int", () => {
      N.fromChar('A').should.be.eql(65);
    });
  });
});
