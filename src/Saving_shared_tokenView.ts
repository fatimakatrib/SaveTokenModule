import { Platform } from "react-native";
import Saving_shared_token from "./Saving_shared_tokenModule";
import * as Keychain from "react-native-keychain";

export async function saveToken(token: string) {
  if (Platform.OS === "ios") {
    await Keychain.setGenericPassword("token", token, {
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
    });
  } else {
    await Saving_shared_token.saveToken(token);
  }
}

export async function getToken(): Promise<string | null> {
  if (Platform.OS === "ios") {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) return credentials?.password ?? null;
    else return null;
  } else {
    return await Saving_shared_token.getToken();
  }
}

export async function resetToken(): Promise<void> {
  if (Platform.OS === "ios") {
    await Keychain.resetGenericPassword();
  } else {
    await Saving_shared_token.clearToken();
  }
}
