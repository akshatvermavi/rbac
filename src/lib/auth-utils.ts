import { AuthError, AuthErrorCodes } from 'firebase/auth';

export function isUserNotFoundError(error: unknown): boolean {
  return error instanceof Error && 
    ('code' in error) &&
    ((error as AuthError).code === AuthErrorCodes.USER_DELETED || 
     (error as AuthError).code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS);
}

export function getAuthErrorMessage(error: unknown): string {
  if (error instanceof Error && 'code' in error) {
    const authError = error as AuthError;
    switch (authError.code) {
      case AuthErrorCodes.USER_DELETED:
      case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
        return 'No account found with these credentials. Please sign up.';
      case AuthErrorCodes.INVALID_PASSWORD:
        return 'Invalid password. Please try again.';
      case AuthErrorCodes.EMAIL_EXISTS:
        return 'An account with this email already exists.';
      case AuthErrorCodes.WEAK_PASSWORD:
        return 'Password should be at least 6 characters long.';
      default:
        return 'An error occurred. Please try again.';
    }
  }
  return 'An unexpected error occurred.';
}