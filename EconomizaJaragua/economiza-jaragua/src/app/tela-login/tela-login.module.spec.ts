import { TelaLoginModule } from './tela-login.module';

describe('TelaLoginModule', () => {
  let telaLoginModule: TelaLoginModule;

  beforeEach(() => {
    telaLoginModule = new TelaLoginModule();
  });

  it('should create an instance', () => {
    expect(telaLoginModule).toBeTruthy();
  });
});
