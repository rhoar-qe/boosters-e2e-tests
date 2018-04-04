import {browser, protractor} from 'protractor';

import {CrudPage, CrudPageWithStock} from '../pages';

const isStockPresentInRuntime =
    browser.params.runtime === 'vertx' || browser.params.runtime === 'nodejs';

describe('CRUD booster page', () => {
  it('Set empty name', () => {
    const crudPage = new CrudPage();
    crudPage.get();
    crudPage.clearFruitName();
    crudPage.setFruitName('');
    crudPage.clickSaveChanges();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The name is required!');
    alert.accept();
  });

  it('Create edit and delete fruit with name', () => {
    const crudPage = new CrudPage();
    crudPage.get();
    const name = 'Peach';
    crudPage.clearFruitName();
    crudPage.setFruitName(name);
    crudPage.clickSaveChanges();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(crudPage.getElementByName(name)));
    crudPage.get();

    const newName = 'Blackberry';
    crudPage.clickEditOnFruit(name);
    crudPage.clearFruitName();
    crudPage.setFruitName(newName);
    crudPage.clickSaveChanges();
    browser.wait(EC.visibilityOf(crudPage.getElementByName(newName)));
    crudPage.get();

    crudPage.clickEditOnFruit(newName);
    crudPage.clearFruitName();
    crudPage.setFruitName(name);
    crudPage.clickSaveChanges();
    browser.wait(EC.visibilityOf(crudPage.getElementByName(name)));
    crudPage.get();

    crudPage.clickRemoveOnFruit(name);
  });

  it('Create edit and delete fruit with name and stock',
     !isStockPresentInRuntime ? null : () => {
       const crudPage = new CrudPageWithStock();
       crudPage.get();
       const name = 'Peach';
       const stock = '100';
       const EC = protractor.ExpectedConditions;
       crudPage.clearFruitName();
       crudPage.clearFruitStock();
       crudPage.setFruitName(name);
       crudPage.setFruitStock(stock);
       crudPage.clickSaveChanges();
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
       browser.wait(EC.visibilityOf(
           crudPage.getElementByNameAndStock(newName, newStock)));
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
  it('Set empty stock', !isStockPresentInRuntime ? null : () => {
    const crudPage = new CrudPageWithStock();
    crudPage.get();
    crudPage.clearFruitName();
    crudPage.clearFruitStock();
    crudPage.setFruitName('name');
    crudPage.setFruitStock('');
    crudPage.clickSaveChanges();
    const EC = protractor.ExpectedConditions;
    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The stock must be greater or equal to 0!');

    alert.accept();
  });
  it('Set empty stock and name', !isStockPresentInRuntime ? null : () => {
    const crudPage = new CrudPageWithStock();
    crudPage.get();
    crudPage.clearFruitName();
    crudPage.clearFruitStock();
    crudPage.setFruitName('');
    crudPage.setFruitStock('');
    crudPage.clickSaveChanges();
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(alert.getText()).toEqual('The name is required!');
  });
  it('Set some string to stock', !isStockPresentInRuntime ? null : async () => {
    const crudPage = new CrudPageWithStock();
    await crudPage.get();
    const defaultStockValue = await crudPage.getFruitStockValue();
    await crudPage.setFruitStock('abcd');
    expect(crudPage.getFruitStockValue()).toEqual(defaultStockValue);
  });
});
