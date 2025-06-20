import { NativeModule } from 'expo';
import { Saving_shared_tokenModuleEvents } from './Saving_shared_token.types';
declare class Saving_shared_tokenModule extends NativeModule<Saving_shared_tokenModuleEvents> {
    PI: number;
    setValueAsync(value: string): Promise<void>;
    hello(): string;
}
declare const _default: typeof Saving_shared_tokenModule;
export default _default;
//# sourceMappingURL=Saving_shared_tokenModule.web.d.ts.map