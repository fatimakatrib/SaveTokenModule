import { Platform } from "react-native";
import Saving_shared_token from "./Saving_shared_tokenModule";
import * as Keychain from "react-native-keychain";

const access_Group = "com.wwork.orbitapp";
export async function saveToken(token: string) {
  if (Platform.OS === "ios") {
    await Keychain.setGenericPassword("token", token, {
      accessGroup: access_Group,
    });
  } else {
    await Saving_shared_token.saveToken(token);
  }
}

export async function getToken(): Promise<string | null> {
  if (Platform.OS === "ios") {
    const credentials = await Keychain.getGenericPassword({
      accessGroup: access_Group,
    });
    if (credentials) return credentials?.password ?? null;
    else return null;
  } else {
    return await Saving_shared_token.getToken();
  }
}

export async function resetToken(): Promise<void> {
  if (Platform.OS === "ios") {
    await Keychain.resetGenericPassword({
      accessGroup: access_Group,
    });
  } else {
    await Saving_shared_token.clearToken();
  }
}
