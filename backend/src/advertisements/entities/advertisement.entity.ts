import { Category } from "src/categories/entities/category.entity"
import { User } from "src/users/entities/user.entity"

export class Advertisement {
    id: number
    name: string
    description: string
    price: number
    saleStatus:  boolean
    category: Category
    vendor:  User
}
