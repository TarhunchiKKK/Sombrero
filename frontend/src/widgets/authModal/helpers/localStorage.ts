import { LOCALSTORAGE_TOKEN_ITEM } from '../../../shared';

export function getTokenFromLocalStorge(): string {
    const data = localStorage.getItem(LOCALSTORAGE_TOKEN_ITEM);
    const token = data ? JSON.parse(data) : '';
    return token;
}

export function setTokenToLocalStorage(token: string): void {
    localStorage.setItem(LOCALSTORAGE_TOKEN_ITEM, JSON.stringify(token));
}

export function removeTokenFromLocalStorage(): void {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_ITEM);
}
