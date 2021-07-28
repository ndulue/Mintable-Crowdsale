const Bignumber = web3.BigNumber;
const { assert } = require('chai');

const ABCToken = artifacts.require('ABCToken');

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('ABCToken', accounts => {

  const _name = 'ABC Token';
  const _symbol = 'ABCT';
  const _decimals = 18;

  beforeEach(async function () {
    this.token = await ABCToken.new(_name, _symbol, _decimals);
  });

  describe('token attributes', function() {

    it('has the correct name', async function() {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it('has the correct symbol', async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });

    it('has the correct decimal', async function() {
      const decimal = await this.token.decimal();
      decimals.should.be.bignumber.equal(_decimals);
    });
     
  });

});