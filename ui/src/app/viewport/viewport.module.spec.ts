import { ViewportModule } from './viewport.module';

describe('ViewportModule', () => {
  let visualModuleModule: ViewportModule;

  beforeEach(() => {
    visualModuleModule = new ViewportModule();
  });

  it('should create an instance', () => {
    expect(visualModuleModule).toBeTruthy();
  });
});
