import { Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
    age: number;
    name: string;
}
