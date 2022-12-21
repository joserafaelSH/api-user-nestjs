export class User {
    id: string;
    name: string;
    email: string;
    password: string;

    constructor(partial?: Partial<User>) {
        this.id = partial?.id;
        this.email = partial?.email;
        this.name = partial?.name;
        this.password = partial?.password;
    }
}
