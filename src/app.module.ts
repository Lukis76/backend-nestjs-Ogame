import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
