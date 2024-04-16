export type { IUser } from './models/IUser.ts';
export type { IUserInfo } from './models/IUserInfo.ts';
export { getDefaultUser } from './models/IUser.ts';
export { getUser } from './api/getUser.ts';
export type { IUpdateUserDto } from './api/updateUser';
export { updateUser } from './api/updateUser.ts';

export { registration } from './api/registration.ts';
export type { IRegistrationResult } from './api/registration.ts';
export { login } from './api/login.ts';
export type { ILoginResult } from './api/login.ts';

export { setCurrentUser } from './lib/userSlice.ts';
export { setRegistrationData } from './lib/registrationSlice.ts';
