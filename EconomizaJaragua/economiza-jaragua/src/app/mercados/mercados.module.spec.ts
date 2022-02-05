import { MercadosModule } from './mercados.module';

describe('MercadosModule', () => {
  let mercadosModule: MercadosModule;

  beforeEach(() => {
    mercadosModule = new MercadosModule();
  });

  it('should create an instance', () => {
    expect(mercadosModule).toBeTruthy();
  });
});
