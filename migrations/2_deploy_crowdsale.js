const { duration } = require("../test/helpers/increaseTime");

const ABCToken = artifacts.require("./ABCToken.sol");
const ABCTokenCrowdsale = artifacts.require("./ABCTokenCrowdsale.sol");

const ether = (n) => new web3.BigNumber(web3.toWei(n, 'ether'));

const duration = {

  seconds: function (val) { return val; },
  minutes: function (val) { return val * this.seconds(60); },
  hours: function (val) { return val * this.minutes(60); },
  days: function (val) { return val * this.hours(24); },
  weeks: function (val) { return val * this.days(7); },
  years: function (val) { return val * this.days(365); }

}

module.exports = function(deployer) {
  const _name = "ABC Token";
  const _symbol = "ABCT";
  const _decimals = 18;

  await deployer.deploy(ABCToken, _name, _symbol, _decimals);
  const deployedToken = await DappToken.deployed();

  const latestTime = (new Date).getTime();
  
  const _rate                     = 500;
  const _wallet                   = accounts[0];  //replace me
  const _token                    = deployedToken.address;
  const _openingTime              = latestTime + duration.minutes(30);
  const _closingTime              = _openingTime + duration.weeks(1);
  const _cap                      = ether(100);
  const _goal                     = ether(50);
  const _foundersFund             = accounts[0]; //replace me
  const _foundationFund           = accounts[0]; //replace me
  const _partnersFund             = accounts[0]; //replace me
  const _releaseTime              = _closingTime + duration.minutes(50);

  await deployer.deploy(DappTokenCrowsale,    
    _rate, 
    _wallet, 
    _token, 
    _cap,
    _openingTime,
    _closingTime,
    _goal,
    _foundersFund,
    _foundationFund,
    _partnersFund,
    _releaseTime
    )

    return true;
};
