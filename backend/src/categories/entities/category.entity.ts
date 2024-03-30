import { Advertisement } from "src/advertisements/entities/advertisement.entity"

export class Category {
    id: number
    name: string
    description: string
    advertisements: Advertisement[] 
}
