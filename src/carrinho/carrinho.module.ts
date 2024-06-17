import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CarrinhoController } from './carrinho.controller';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoSchema } from './schema/carrinho.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Carrinho', schema: CarrinhoSchema }]),
  ],
  controllers: [CarrinhoController],
  providers: [CarrinhoService],
})
export class CarrinhoModule {}
