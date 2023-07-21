import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './database/prisma.service';

@Injectable()
export class AppService {
    constructor(private prisma: PrismaService) {}
    getHello(): Promise<User[]> {
        return this.prisma.user.findMany();
    }
}
