import { CoreSetup, CoreStart, Plugin } from '..\..\../src/core/public';

export class TestPlugin3Plugin
  implements Plugin {
  
  public setup(core: CoreSetup) {
    // Register an application into the side navigation menu

    // Return methods that should be available to other plugins
    return {};
  }

  public start(core: CoreStart) {
    return {};
  }

  public stop() {}
}
