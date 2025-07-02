import { requireNativeModule } from "expo";
import * as Keychain from "react-native-keychain";
import {
  SaveTokenFn,
  GetTokenFn,
  ResetTokenFn,
} from "./Saving_shared_token.types";
import { Platform } from "react-native";

const TOKEN_KEY = "shared_token";
const access_group = "com.wwork.orbitnowapp";

let AndroidTokenModule: {
  saveToken: SaveTokenFn;
  getToken: GetTokenFn;
  clearToken: ResetTokenFn;
} | null = null;

if (Platform.OS === "android") {
  AndroidTokenModule = requireNativeModule("Saving_shared_token");
}

const SharedTokenModule = {
  saveToken: async (token: string): Promise<void> => {
    if (Platform.OS === "ios") {
      await Keychain.setGenericPassword(TOKEN_KEY, token, {
        accessGroup: access_group,
        accessible: Keychain.ACCESSIBLE.ALWAYS,
      });
    } else if (AndroidTokenModule) {
      await AndroidTokenModule.saveToken(token);
    }
  },

  getToken: async (): Promise<string | null> => {
    if (Platform.OS === "ios") {
      const credentials = await Keychain.getGenericPassword({
        accessGroup: access_group,
      });
      return credentials ? credentials.password : null;
    } else if (AndroidTokenModule) {
      return await AndroidTokenModule.getToken();
    }
    return null;
  },

  clearToken: async (): Promise<void> => {
    if (Platform.OS === "ios") {
      await Keychain.resetGenericPassword({
        accessGroup: access_group,
      });
    } else if (AndroidTokenModule) {
      await AndroidTokenModule.clearToken();
    }
  },
};

export default SharedTokenModule;
