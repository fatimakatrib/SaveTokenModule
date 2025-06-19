import { NativeModule, requireNativeModule } from 'expo';

import { Saving_shared_tokenModuleEvents } from './Saving_shared_token.types';

declare class Saving_shared_tokenModule extends NativeModule<Saving_shared_tokenModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<Saving_shared_tokenModule>('Saving_shared_token');
