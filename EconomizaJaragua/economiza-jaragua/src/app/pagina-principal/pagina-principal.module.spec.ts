import { PaginaPrincipalModule } from './pagina-principal.module';

describe('PaginaPrincipalModule', () => {
  let paginaPrincipalModule: PaginaPrincipalModule;

  beforeEach(() => {
    paginaPrincipalModule = new PaginaPrincipalModule();
  });

  it('should create an instance', () => {
    expect(paginaPrincipalModule).toBeTruthy();
  });
});
