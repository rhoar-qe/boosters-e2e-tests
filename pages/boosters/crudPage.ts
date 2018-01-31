import {browser, element, by, protractor, ElementFinder, promise} from 'protractor';
import {AbstractAngularPage} from '../abstractAngularPage';

export class CrudPage extends AbstractAngularPage {

  private addEditFruitName = element(by.xpath('//input[@ng-model="form.name"]'));
  private addEditFruitStock = element(by.xpath('//input[@ng-model="form.stock"]'));
  private saveChages = element(by.xpath('//input[@type="submit"]'))

  public constructor(){
    super(browser.params.url.boosters.crud);
  }

  public async clearFruitName() : Promise<void> {
    this.addEditFruitName.clear();
  }

  public async clearFruitStock() : Promise<void> {
    this.addEditFruitStock.clear();
  }

  public async setFruitName(name : string) : Promise<void> {
    return this.addEditFruitName.sendKeys(name);
  }

  public async setFruitStock(stock : string){
    return this.addEditFruitStock.sendKeys(stock);
  }

  public async getFruitStockValue(): Promise<String> {
    return this.addEditFruitStock.getAttribute('value');
  }

  public getFruitStockElement() : ElementFinder{
    return this.addEditFruitStock
  }

  public async clickSaveChanges() : Promise<void>{
    return this.saveChages.click();
  }

  public getElementByNameAndStock(name : string, stock : string) : ElementFinder  {
    return element(by.xpath('//div[@ng-repeat="fruit in fruits"]/div[text()="' + name + '"]/../div[text()="' + stock + '"]/..'));
  }

  public async clickEditOnFruit(name : string) : Promise<void>{
    element(by.xpath('//div[@ng-repeat="fruit in fruits"]/div[text()="' + name + '"]/..//a[@class="btn" and text() ="Edit"]')).click();
  }

  public async clickRemoveOnFruit(name : string) : Promise<void> {
    element(by.xpath('//div[@ng-repeat="fruit in fruits"]/div[text()="' + name + '"]/..//a[@class="btn" and text() ="Remove"]')).click();
  }
}
