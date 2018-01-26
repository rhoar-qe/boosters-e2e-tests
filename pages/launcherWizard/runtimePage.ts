import {element, by} from 'protractor';

export abstract class RuntimePage  {

  //TODO write issue for add id to h3 radio button
  vertxDiv = element(by.xpath('//div[@id="Eclipse Vert.x"]'));
  nodeJSDiv = element(by.xpath('//div[@id="Node.js"]'));
  springBootDiv = element(by.xpath('//div[@id="Spring Boot"]'));
  swarmDiv = element(by.xpath('//div[@id="WildFly Swarm"]'));

  nextButton = element(by.xpath('//button[@id="next"][not(@disabled)]'));

  selectedRuntime = Runtime.Vertx;

  getSelectedRuntime(): Runtime {
    return this.selectedRuntime;
  }

  selectRuntime(runtime: Runtime): void {
    switch(Runtime[runtime]){
      case Runtime.Vertx:
        this.selectVertx();
        break;
      /*
      case Runtime.NodeJS:
        this.selectNodeJS();
        break;
      */
      case Runtime.SpringBoot:
        this.selectSpringBoot();
        break;
      case Runtime.Swarm:
        this.selectSwarm();
        break;
    }
  }

  selectVertx(): void {
    this.selectedRuntime = Runtime.Vertx;
    this.vertxDiv.click()
  }
  /*
  selectNodeJS(): void {
    this.selectedRuntime = Runtime.NodeJS;
    this.nodeJSDiv.click();
  }
  */
  selectSpringBoot(): void {
    this.selectedRuntime = Runtime.SpringBoot;
    this.springBootDiv.click();
  }

  selectSwarm(): void {
    this.selectedRuntime = Runtime.Swarm;
    this.swarmDiv.click();
  }
}

export enum Runtime {
  Vertx = 'Eclipse Vert.x',
  //NodeJS = 'Node.js', TODO implenet new page object for NodeJS projectInfo
  SpringBoot = 'Spring Boot',
  Swarm = 'WildFly Swarm'
}
