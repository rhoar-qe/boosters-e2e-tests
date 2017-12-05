var HttpBoosterPage = function() {
  var nameInput = element(by.id('name'));
  var invokeButton = element(by.id('invoke'));
  var result = element(by.id('greeting-result'));

  this.get = function() {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.get('http://http-vertx-akoniar-htttp.a3c1.starter-us-west-1.openshiftapps.com/', 5000);
  };

  this.setName = function(name){
    return nameInput.sendKeys(name);
  };

  this.clickInvoke = function(){
    return invokeButton.click();
  };

  this.getResult = function(){
    return result;
  };
};
module.exports = new HttpBoosterPage();
