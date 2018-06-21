import {browser, ExpectedConditions as EC} from 'protractor';

import {CrudPage, CrudPageWithStock} from '../pages';

const isStockPresent = browser.params.runtime === 'vertx' || browser.params.runtime === 'nodejs';

describe('CRUD booster', () => {
  it('Create, edit and delete fruit with name', async () => {
    const name = 'Peach';
    const newName = 'Blackberry';

    const page = new CrudPage();
    await page.get();
    await page.clearFruitName();
    await page.setFruitName(name);
    await page.clickSaveChanges();
    await browser.wait(EC.visibilityOf(page.getFruitElementByName(name)));
    expect(await page.getFruitElementByName(name).getText()).toContain(name);

    await page.get();
    await page.clickEditOnFruit(name);
    await page.clearFruitName();
    await page.setFruitName(newName);
    await page.clickSaveChanges();
    await browser.wait(EC.visibilityOf(page.getFruitElementByName(newName)));
    expect(await page.getFruitElementByName(newName).getText()).toContain(newName);

    await page.get();
    await page.clickEditOnFruit(newName);
    await page.clearFruitName();
    await page.setFruitName(name);
    await page.clickSaveChanges();
    await browser.wait(EC.visibilityOf(page.getFruitElementByName(name)));
    expect(await page.getFruitElementByName(name).getText()).toContain(name);

    await page.get();
    await page.clickRemoveOnFruit(name);
    await browser.wait(EC.not(EC.visibilityOf(page.getFruitElementByName(name))));
  });

  it('Set empty name', async () => {
    const page = new CrudPage();
    await page.get();
    await page.clearFruitName();
    await page.setFruitName('');
    await page.clickSaveChanges();
    await browser.wait(EC.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(await alert.getText()).toEqual('The name is required!');
    await alert.accept();
  });

  // following tests are only executed when the 'stock' field is present

  it('Create, edit and delete fruit with name and stock', !isStockPresent ? null : async () => {
    const name = 'Peach';
    const newName = 'Blackberry';

    const stock = '100';
    const newStock = '42';

    const page = new CrudPageWithStock();
    await page.get();
    await page.clearFruitName();
    await page.clearFruitStock();
    await page.setFruitName(name);
    await page.setFruitStock(stock);
    await page.clickSaveChanges();
    await browser.wait(EC.visibilityOf(page.getFruitElementByName(name)));
    expect(await page.getFruitElementByName(name).getText()).toContain(name);
    expect(await page.getFruitElementByName(name).getText()).toContain(stock);

    await page.get();
    await page.clickEditOnFruit(name);
    await page.clearFruitStock();
    await page.setFruitStock(newStock);
    await page.clickSaveChanges();
    await browser.wait(EC.visibilityOf(page.getFruitElementByName(name)));
    expect(await page.getFruitElementByName(name).getText()).toContain(name);
    expect(await page.getFruitElementByName(name).getText()).toContain(newStock);

    await page.get();
    await page.clickEditOnFruit(name);
    await page.clearFruitName();
    await page.setFruitName(newName);
    await page.clickSaveChanges();
    await browser.wait(EC.visibilityOf(page.getFruitElementByName(newName)));
    expect(await page.getFruitElementByName(newName).getText()).toContain(newName);
    expect(await page.getFruitElementByName(newName).getText()).toContain(newStock);

    await page.get();
    await page.clickEditOnFruit(newName);
    await page.clearFruitStock();
    await page.setFruitStock(stock);
    await page.clickSaveChanges();
    await browser.wait(EC.visibilityOf(page.getFruitElementByName(newName)));
    expect(await page.getFruitElementByName(newName).getText()).toContain(newName);
    expect(await page.getFruitElementByName(newName).getText()).toContain(stock);

    await page.get();
    await page.clickEditOnFruit(newName);
    await page.clearFruitName();
    await page.setFruitName(name);
    await page.clickSaveChanges();
    await browser.wait(EC.visibilityOf(page.getFruitElementByName(name)));
    expect(await page.getFruitElementByName(name).getText()).toContain(name);
    expect(await page.getFruitElementByName(name).getText()).toContain(stock);

    await page.get();
    await page.clickRemoveOnFruit(name);
    await browser.wait(EC.not(EC.visibilityOf(page.getFruitElementByName(name))));
  });

  it('Set empty stock', !isStockPresent ? null : async () => {
    const page = new CrudPageWithStock();
    await page.get();
    await page.clearFruitName();
    await page.clearFruitStock();
    await page.setFruitName('name');
    await page.setFruitStock('');
    await page.clickSaveChanges();
    await browser.wait(EC.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(await alert.getText()).toEqual('The stock must be greater or equal to 0!');
    await alert.accept();
  });

  it('Set empty stock and name', !isStockPresent ? null : async () => {
    const page = new CrudPageWithStock();
    await page.get();
    await page.clearFruitName();
    await page.clearFruitStock();
    await page.setFruitName('');
    await page.setFruitStock('');
    await page.clickSaveChanges();
    await browser.wait(EC.alertIsPresent(), 1000);
    const alert = browser.switchTo().alert();
    expect(await alert.getText()).toEqual('The name is required!');
    await alert.accept();
  });

  it('Set non-numeric stock', !isStockPresent ? null : async () => {
    const page = new CrudPageWithStock();
    await page.get();
    const defaultStockValue = await page.getFruitStockValue();
    await page.setFruitStock('abcd');
    expect(await page.getFruitStockValue()).toEqual(defaultStockValue);
  });
});
