import { Injectable, Inject } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Model } from 'mongoose';
import { Game } from './entities/game.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GameService {

  constructor(
    @Inject('GAME_MODEL')
    private gameModel: Model<Game>,
    private configService: ConfigService
  ) {}

  create(createGamesDto: CreateGameDto[]): Promise<Game[]> {
    return Promise.all(
      createGamesDto.map(async (game) => {
        const newGame = new this.gameModel(game);
        return await newGame.save();
      })
    );
  }

  findAll(): Promise<Game[]> {
    const textoInutil = this.configService.get<string>('TEXTO_INUTIL');
    console.log('Texto inútil:', textoInutil);
    return this.gameModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
