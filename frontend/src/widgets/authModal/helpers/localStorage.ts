export function getTokenFromLocalStorge(): string {
    const data = localStorage.getItem('token');
    const token = data ? JSON.parse(data) : '';
    return token;
}

export function setTokenToLocalStorage(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
}

export function removeTokenFromLocalStorage(): void {
    localStorage.removeItem('token');
}
