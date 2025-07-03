import Saving_shared_token from "./Saving_shared_tokenModule";

export function saveToken(
  token: string
): ReturnType<typeof Saving_shared_token.saveToken> {
  return Saving_shared_token.saveToken(token);
}

export function getToken(): Promise<string | null> {
  return Saving_shared_token.getToken();
}

export function resetToken(): ReturnType<
  typeof Saving_shared_token.clearToken
> {
  return Saving_shared_token.clearToken();
}
