export interface IUserInfo {
    id: number;
    name: string;
    surname: string;
    phoneNumber: string;
    email: string;
    photo: string;
    address: {
        id: number;
        country: string;
        city: string;
        street?: string;
        houseNumber?: number;
        flatNumber?: number;
    };
}
