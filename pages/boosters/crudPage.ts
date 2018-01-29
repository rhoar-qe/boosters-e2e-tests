import {browser, element, by, protractor, ElementFinder, promise} from 'protractor';
import {BoosterPage} from './boosterPage';

export class CrudPage extends BoosterPage {

  private addEditFruitName = element(by.xpath('//input[@ng-model="form.name"]'));
  private addEditFruitStock = element(by.xpath('//input[@ng-model="form.stock"]'));
  private saveChages = element(by.xpath('//input[@type="submit"]'))

  public constructor(){
    super(browser.params.url.boosters.crud);
  }

  public clearFruitName(){
    this.addEditFruitName.clear();
  }

  public clearFruitStock(){
    this.addEditFruitStock.clear();
  }

  public clearAllInputs(){
    this.clearFruitName();
    this.clearFruitStock();
  }

  public setFruitName(name : string) {
    this.addEditFruitName.sendKeys(name);
  }

  public setFruitStock(stock : string){
    this.addEditFruitStock.sendKeys(stock);
  }

  public async getFruitStockValue(): Promise<String> {
    return this.addEditFruitStock.getAttribute('value');
  }

  public getFruitStockElement() : ElementFinder{
    return this.addEditFruitStock
  }

  public clickSaveChanges(){
    this.saveChages.click();
  }

  public isFruitInList(name : string, stock : string){
    let FruitRow = this.getElementByNameAndStock(name, stock);
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(FruitRow),1000);
  }

  private getElementByNameAndStock(name : string, stock : string) : ElementFinder  {
    return element(by.xpath('//div[@ng-repeat="fruit in fruits"]/div[text()="' + name + '"]/../div[text()="' + stock + '"]/..'));
  }

  public clickEditOnFruit(name : string){
    element(by.xpath('//div[@ng-repeat="fruit in fruits"]/div[text()="' + name + '"]/..//a[@class="btn" and text() ="Edit"]')).click();
  }

  public clickRemoveOnFruit(name : string) {
    element(by.xpath('//div[@ng-repeat="fruit in fruits"]/div[text()="' + name + '"]/..//a[@class="btn" and text() ="Remove"]')).click();
  }
}
