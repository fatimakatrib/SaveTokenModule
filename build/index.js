// Reexport the native module. On web, it will be resolved to Saving_shared_tokenModule.web.ts
// and on native platforms to Saving_shared_tokenModule.ts
export { default } from './Saving_shared_tokenModule';
export { saveToken, getToken, resetToken } from './Saving_shared_tokenView';
export * from './Saving_shared_token.types';
//# sourceMappingURL=index.js.map