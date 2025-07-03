import { requireNativeModule } from "expo";
import {
  GetTokenFn,
  SaveTokenFn,
  ResetTokenFn,
} from "./Saving_shared_token.types";
// This call loads the native module object from the JSI.
interface SavingSharedTokenModule {
  saveToken: SaveTokenFn;
  getToken: GetTokenFn;
  clearToken: ResetTokenFn;
}

const Saving_shared_token = requireNativeModule<SavingSharedTokenModule>(
  "Saving_shared_token"
);
export default Saving_shared_token;
