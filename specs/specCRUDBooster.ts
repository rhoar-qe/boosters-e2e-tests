import {CrudPage} from '../pages';
import {browser,protractor} from 'protractor';



// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('CRUD booster page', () => {

  it('Set empty name', () => {
    let crudPage = new CrudPage();
    crudPage.get();
    crudPage.clearAllInputs();
    crudPage.setFruitName("");
    crudPage.clickSaveChanges();
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
    let crudPage = new CrudPage();
    crudPage.get();
    crudPage.clearAllInputs();
    crudPage.setFruitName("name");
    crudPage.setFruitStock("");
    crudPage.clickSaveChanges();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(),1000);
    let alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The stock must not be null or empty');
    alert.accept();
  });

  it('Set empty stock and name', () => {
    let crudPage = new CrudPage();
    crudPage.get();
    crudPage.clearAllInputs();
    crudPage.setFruitName("");
    crudPage.setFruitStock("");
    crudPage.clickSaveChanges();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(),1000);
    let alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The name must not be null or empty');
    alert.accept();
  });

  it('Set some string to stock', async () => {
    let crudPage = new CrudPage();
    crudPage.get();
    let prewStockValue = await crudPage.getFruitStockValue();
    crudPage.setFruitStock("abcd");
    let EC = protractor.ExpectedConditions;
    expect(EC.textToBePresentInElementValue(crudPage.getFruitStockElement(),prewStockValue.toString()));
  });

  it('Create edit and delete fruit with name', () => {
    let crudPage = new CrudPage();
    crudPage.get();
    let name = 'Peach';
    let stock = '100';
    crudPage.clearAllInputs();
    crudPage.setFruitName(name);
    crudPage.setFruitStock(stock);
    crudPage.clickSaveChanges();
    crudPage.isFruitInList(name,stock);


    let newStock = '10';
    crudPage.clickEditOnFruit(name);
    crudPage.clearFruitStock();
    crudPage.setFruitStock(newStock);
    crudPage.clickSaveChanges();
    crudPage.isFruitInList(name,newStock);

    let newName = 'Blackberry'
    crudPage.clickEditOnFruit(name);
    crudPage.clearFruitName();
    crudPage.setFruitName(newName);
    crudPage.clickSaveChanges();
    crudPage.isFruitInList(newName,newStock);

    crudPage.clickEditOnFruit(newName);
    crudPage.clearAllInputs();
    crudPage.setFruitName(name);
    crudPage.setFruitStock(stock);
    crudPage.clickSaveChanges();
    crudPage.isFruitInList(name,stock);

    crudPage.clickRemoveOnFruit(name);

  });
});
