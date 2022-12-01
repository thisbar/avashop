import {Column, DataType, CreatedAt, Model, Table, UpdatedAt} from 'sequelize-typescript'

export interface ProductAttributes {
    name: string;
    description: string;
    url_image?: string;
    category: number;
    stock?: number;
}

export interface ProductOptionalAttributes {
    name?: string;
    description?: string;
    url_image?: string;
    category?: number;
    stock?: number;
}

@Table({tableName: "products", timestamps: true, underscored: true})
export default class Product extends Model<ProductAttributes> {
    @Column({type: DataType.STRING})
    private name!: string;

    @Column({type: DataType.STRING})
    private description!: string;

    @Column({type: DataType.STRING, allowNull: true})
    private url_image?: string | null;

    @Column({type: DataType.INTEGER})
    private category!: number;

    @Column({type: DataType.INTEGER})
    private stock!: number;

    @CreatedAt
    public createdAt: Date | null = null;

    @UpdatedAt
    public updatedAt: Date | null = null;
}
