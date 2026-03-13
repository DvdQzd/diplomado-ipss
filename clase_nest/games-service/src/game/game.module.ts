import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { DatabaseModule } from 'src/database/database.module';
import { gamesProviders } from './game.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [GameController],
  providers: [
    GameService,
    ...gamesProviders
  ],
})
export class GameModule {}
