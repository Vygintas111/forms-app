import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    name!: string;

    @Column({ default: false })
    isAdmin!: boolean;

    @Column({ default: false })
    isBlocked!: boolean;

    @Column({ default: "en"})
    preferredLanguage!: string;

    @Column({ default: "light"})
    preferredTheme!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}