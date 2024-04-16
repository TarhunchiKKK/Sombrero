import { LOCALSTORAGE_TOKEN_ITEM } from '../constants/localStorage';

export function useAuth(): boolean {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_ITEM) ? true : false;
}
