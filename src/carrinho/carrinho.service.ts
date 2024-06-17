import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';

import { Carrinho } from './schema/carrinho.schema';

@Injectable()
export class CarrinhoService {
  constructor(
    @InjectModel('Carrinho') private readonly carrinhoModel: Model<Carrinho>,
  ) {}

  async criarCarrinho(carrinho: Carrinho) {
    const novoCarrinho = new this.carrinhoModel({
      id: uuid(),
      ...carrinho,
    });

    await novoCarrinho.save();
  }

  async buscarCarrinhoPorId(id: string) {
    return this.carrinhoModel.findOne({ id });
  }

  async atualizarCarrinho(carrinho: Carrinho) {
    return this.carrinhoModel.updateOne(carrinho);
  }

  async deletarCarrinho(id: string) {
    await this.carrinhoModel.deleteOne({ id });
  }
}
