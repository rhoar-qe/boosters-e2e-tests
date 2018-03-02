import {browser, protractor} from 'protractor';

import {CrudPage} from '../pages';



// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('CRUD booster page', () => {
  it('Set empty name', () => {
    const crudPage = new CrudPage();
    crudPage.get();
    crudPage.clearFruitName();
    crudPage.clearFruitStock();
    crudPage.setFruitName('');
    crudPage.clickSaveChanges();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The name must not be null or empty');
    alert.accept();
  });

  /*
    TODO For empty stock will be better add fruit with stock equal zero
    now return 500 internal error
  */
  xit('Set empty stock', () => {
    const crudPage = new CrudPage();
    crudPage.get();
    crudPage.clearFruitName();
    crudPage.clearFruitStock();
    crudPage.setFruitName('name');
    crudPage.setFruitStock('');
    crudPage.clickSaveChanges();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The stock must not be null or empty');
    alert.accept();
  });

  it('Set empty stock and name', () => {
    const crudPage = new CrudPage();
    crudPage.get();
    crudPage.clearFruitName();
    crudPage.clearFruitStock();
    crudPage.setFruitName('');
    crudPage.setFruitStock('');
    crudPage.clickSaveChanges();
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The name must not be null or empty');
    alert.accept();
  });

  it('Set some string to stock', async () => {
    const crudPage = new CrudPage();
    crudPage.get();
    const prewStockValue = await crudPage.getFruitStockValue();
    crudPage.setFruitStock('abcd');
    const EC = protractor.ExpectedConditions;
    expect(EC.textToBePresentInElementValue(
        crudPage.getFruitStockElement(), prewStockValue.toString()));
  });

  it('Create edit and delete fruit with name', () => {
    const crudPage = new CrudPage();
    crudPage.get();
    const name = 'Peach';
    const stock = '100';
    crudPage.clearFruitName();
    crudPage.clearFruitStock();
    crudPage.setFruitName(name);
    crudPage.setFruitStock(stock);
    crudPage.clickSaveChanges();
    const EC = protractor.ExpectedConditions;
    browser.wait(
        EC.visibilityOf(crudPage.getElementByNameAndStock(name, stock)));
    crudPage.get();

    const newStock = '10';
    crudPage.clickEditOnFruit(name);
    crudPage.clearFruitStock();
    crudPage.setFruitStock(newStock);
    crudPage.clickSaveChanges();
    browser.wait(
        EC.visibilityOf(crudPage.getElementByNameAndStock(name, newStock)));
    crudPage.get();

    const newName = 'Blackberry';
    crudPage.clickEditOnFruit(name);
    crudPage.clearFruitName();
    crudPage.setFruitName(newName);
    crudPage.clickSaveChanges();
    browser.wait(
        EC.visibilityOf(crudPage.getElementByNameAndStock(newName, newStock)));
    crudPage.get();

    crudPage.clickEditOnFruit(newName);
    crudPage.clearFruitName();
    crudPage.clearFruitStock();
    crudPage.setFruitName(name);
    crudPage.setFruitStock(stock);
    crudPage.clickSaveChanges();
    browser.wait(
        EC.visibilityOf(crudPage.getElementByNameAndStock(name, stock)));
    crudPage.get();

    crudPage.clickRemoveOnFruit(name);
  });
});
