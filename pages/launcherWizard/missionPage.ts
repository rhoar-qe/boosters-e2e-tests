import {browser, element, by} from 'protractor';

export abstract class MissionPage  {
  //TODO write issue for add id to h3 radio button
  crudRadioButton = element(by.xpath('//mission/div[2]/div[1]/span/label/h3'));
  circuitBreakerRadioButton = element(by.xpath('//mission/div[2]/div[2]/span/label/h3'));
  configMapRadioButton = element(by.xpath('//mission/div[2]/div[3]/span/label/h3'));
  healthCheckRadioButton = element(by.xpath('//mission/div[2]/div[4]/span/label/h3'));
  httpRadioButton = element(by.xpath('//mission/div[2]/div[5]/span/label/h3'));
  securedHttpRadioButton = element(by.xpath('//mission/div[2]/div[6]/span/label/h3'));

  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));

  selectedMission = Mission.CRUD;

  getSelectedMisson(): Mission {
    return this.selectedMission;
  }

  selectMission(mission : Mission): void{
    switch(Mission[mission]){
      case Mission.CRUD:
        this.selectCRUD();
      break;
      case Mission.CircuitBreaker:
        this.selectCircuitBreaker();
      break;
      case Mission.ConfigMap:
        this.selectConfigMap();
      break;
      case Mission.HealthCheck:
        this.selectHealthCheck();
      break;
      case Mission.HTTP:
        this.selectHTTP();
      break;
      case Mission.SecuredHTTP:
        this.selectSecuredHTTP();
      break;
    }
  }

  selectCRUD(): void {
    this.selectedMission = Mission.CRUD;
    this.crudRadioButton.click();
  }

  selectCircuitBreaker(): void {
    this.selectedMission = Mission.CircuitBreaker;
    this.circuitBreakerRadioButton.click();
  }

  selectConfigMap(): void {
    this.selectedMission = Mission.ConfigMap;
    this.configMapRadioButton.click();
  }

  selectHealthCheck(): void {
    this.selectedMission = Mission.HealthCheck;
    this.healthCheckRadioButton.click();
  }
  selectHTTP(): void {
    this.selectedMission = Mission.HTTP;
    this.httpRadioButton.click();
  }

  selectSecuredHTTP(): void {
    this.selectedMission = Mission.SecuredHTTP;
    this.securedHttpRadioButton.click();
  }

}

export enum Mission {
    CRUD = 'CRUD',
    CircuitBreaker = 'Circuit Breaker',
    ConfigMap = 'Externalized Configuration',
    HealthCheck = 'Health Check',
    HTTP = 'REST API Level 0',
    SecuredHTTP = 'Secured'
}
