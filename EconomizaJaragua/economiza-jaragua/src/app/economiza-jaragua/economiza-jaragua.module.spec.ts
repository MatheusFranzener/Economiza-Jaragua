import { EconomizaJaraguaModule } from './economiza-jaragua.module';

describe('EconomizaJaraguaModule', () => {
  let economizaJaraguaModule: EconomizaJaraguaModule;

  beforeEach(() => {
    economizaJaraguaModule = new EconomizaJaraguaModule();
  });

  it('should create an instance', () => {
    expect(economizaJaraguaModule).toBeTruthy();
  });
});
