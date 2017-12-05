var httpBoosterPage = require('./httpBoosterPage');
describe('Simple http booster test', function() {
  it('Set name test', function(){
    httpBoosterPage.get();
    httpBoosterPage.setName('Peter').then(function(){
    });
    var click = httpBoosterPage.clickInvoke();
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(httpBoosterPage.getResult(), 'content":"Hello, Peter!'), 1000);

  });
});
