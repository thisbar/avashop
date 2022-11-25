import {Column, CreatedAt, Model, PrimaryKey, Table, UpdatedAt} from 'sequelize-typescript'
import {DataTypes} from "sequelize";

export interface ProductAttributes {
    name: string;
    description: string;
    url_image: string;
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
export default class Product extends Model {
    @Column({primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true})
    id: number;

    @Column({type: DataTypes.STRING})
    private name: string;

    @Column({type: DataTypes.STRING})
    private description: string;

    @Column({type: DataTypes.STRING})
    private url_image?: string;

    @Column({type: DataTypes.INTEGER})
    private category: number;

    @Column({type: DataTypes.INTEGER})
    private stock: number;

    @CreatedAt
    public createdAt: Date | null = null;

    @UpdatedAt
    public updatedAt: Date | null = null;

    constructor(
        name: string,
        description: string,
        url_image: string = '',
        category: number,
        stock: number = 0
    ) {
        super();

        this.name = name;
        this.description = description;
        this.url_image = url_image;
        this.category = category;
        this.stock = stock;
    }
/*
    public get name(): string { return this.name; }
    public get description(): string { return this.description; }
    public get url_image(): string { return this.url_image; }
    public get category(): number { return this.category; }
    public get stock(): number { return this.stock; }

 */
}