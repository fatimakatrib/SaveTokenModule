import { Platform } from "react-native";
import * as Keychain from "react-native-keychain";

const TOKEN_KEY = "shared_token";
const access_group = "com.wwork.orbitnowapp";

const SharedTokenModule = {
  saveToken: async (token: string): Promise<void> => {
    if (Platform.OS === "ios") {
      await Keychain.setGenericPassword(TOKEN_KEY, token, {
        accessGroup: access_group,
        accessible: Keychain.ACCESSIBLE.ALWAYS,
      });
    } else {
      const AndroidTokenModule = require("expo").requireNativeModule(
        "Saving_shared_token"
      );
      await AndroidTokenModule.saveToken(token);
    }
  },

  getToken: async (): Promise<string | null> => {
    if (Platform.OS === "ios") {
      const credentials = await Keychain.getGenericPassword({
        accessGroup: access_group,
      });
      return credentials ? credentials.password : null;
    } else {
      const AndroidTokenModule = require("expo").requireNativeModule(
        "Saving_shared_token"
      );
      return await AndroidTokenModule.getToken();
    }
  },

  clearToken: async (): Promise<void> => {
    if (Platform.OS === "ios") {
      await Keychain.resetGenericPassword({
        accessGroup: access_group,
      });
    } else {
      const AndroidTokenModule = require("expo").requireNativeModule(
        "Saving_shared_token"
      );
      await AndroidTokenModule.clearToken();
    }
  },
};

export default SharedTokenModule;
