import { Advertisement } from "src/advertisements/entities/advertisement.entity"
import { Address } from "./address.entity"

export class User {
    id: number
    name: string
    surname: string
    phoneNumber: string
    email: string
    password: string
    registrationDate: Date
    address: Address
    salesList: Advertisement[]
    wishList: Advertisement[]
}
