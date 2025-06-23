export type SaveTokenFn = (token: string) => Promise<void>
export type GetTokenFn = () => Promise<string | null>;
export type ResetTokenFn = () => Promise<void>;