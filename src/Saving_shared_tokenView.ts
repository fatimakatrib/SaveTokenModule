import Saving_shared_token from './Saving_shared_tokenModule';

export function saveToken(token: string) {
  return Saving_shared_token.saveToken(token);
}

export function getToken(): Promise<string | null> {
  return Saving_shared_token.getToken();
}

export function resetToken(): any {
  return Saving_shared_token.clearToken();
}