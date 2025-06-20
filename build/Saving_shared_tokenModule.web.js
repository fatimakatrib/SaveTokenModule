import { registerWebModule, NativeModule } from 'expo';
class Saving_shared_tokenModule extends NativeModule {
    PI = Math.PI;
    async setValueAsync(value) {
        this.emit('onChange', { value });
    }
    hello() {
        return 'Hello world! 👋';
    }
}
export default registerWebModule(Saving_shared_tokenModule, 'Saving_shared_tokenModule');
//# sourceMappingURL=Saving_shared_tokenModule.web.js.map