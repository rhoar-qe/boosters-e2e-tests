import {CrudBoosterPage} from '../pages';
import {browser,protractor} from 'protractor';



// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('CRUD booster page', () => {

  it('Set empty name', () => {
    let crudBoosterPage = new CrudBoosterPage();
    crudBoosterPage.get();
    crudBoosterPage.clearAllInputs();
    crudBoosterPage.setFruitName("");
    crudBoosterPage.clickSaveChanges();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(),1000);
    let alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The name must not be null or empty');
    alert.accept();
  });

  /*
    TODO For empty stock will be better add fruit with stock equal zero
    now return 500 internal error
  */
  xit('Set empty stock', () => {
    let crudBoosterPage = new CrudBoosterPage();
    crudBoosterPage.get();
    crudBoosterPage.clearAllInputs();
    crudBoosterPage.setFruitName("name");
    crudBoosterPage.setFruitStock("");
    crudBoosterPage.clickSaveChanges();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(),1000);
    let alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The stock must not be null or empty');
    alert.accept();
  });

  it('Set empty stock and name', () => {
    let crudBoosterPage = new CrudBoosterPage();
    crudBoosterPage.get();
    crudBoosterPage.clearAllInputs();
    crudBoosterPage.setFruitName("");
    crudBoosterPage.setFruitStock("");
    crudBoosterPage.clickSaveChanges();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(),1000);
    let alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The name must not be null or empty');
    alert.accept();
  });

  it('Set some string to stock', async () => {
    let crudBoosterPage = new CrudBoosterPage();
    crudBoosterPage.get();
    let prewStockValue = await crudBoosterPage.getFruitStock();
    crudBoosterPage.setFruitStock("abcd");
    crudBoosterPage.setFruitStock("5");
    crudBoosterPage.validateFruitStockText(prewStockValue.toString());
  });

  it('Create edit and delete fruit with name', () => {
    let crudBoosterPage = new CrudBoosterPage();
    crudBoosterPage.get();
    let name = 'Peach';
    let stock = '100';
    crudBoosterPage.clearAllInputs();
    crudBoosterPage.setFruitName(name);
    crudBoosterPage.setFruitStock(stock);
    crudBoosterPage.clickSaveChanges();
    crudBoosterPage.isFruitInList(name,stock);


    let newStock = '10';
    crudBoosterPage.clickEditOnFruit(name);
    crudBoosterPage.clearFruitStock();
    crudBoosterPage.setFruitStock(newStock);
    crudBoosterPage.clickSaveChanges();
    crudBoosterPage.isFruitInList(name,newStock);

    let newName = 'Blackberry'
    crudBoosterPage.clickEditOnFruit(name);
    crudBoosterPage.setFruitName(newName);
    crudBoosterPage.clearFruitName();
    crudBoosterPage.clickSaveChanges();
    crudBoosterPage.isFruitInList(newName,newStock);

    crudBoosterPage.clickEditOnFruit(newName);
    crudBoosterPage.clearAllInputs();
    crudBoosterPage.setFruitName(name);
    crudBoosterPage.setFruitStock(stock);
    crudBoosterPage.clickSaveChanges();
    crudBoosterPage.isFruitInList(name,stock);

    crudBoosterPage.clickRemoveOnFruit(name);

  });
});
