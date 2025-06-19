import { registerWebModule, NativeModule } from 'expo';

import { Saving_shared_tokenModuleEvents } from './Saving_shared_token.types';

class Saving_shared_tokenModule extends NativeModule<Saving_shared_tokenModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(Saving_shared_tokenModule, 'Saving_shared_tokenModule');
