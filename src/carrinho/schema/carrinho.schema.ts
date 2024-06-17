import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { IProduto } from '../interfaces/produto.interface';

@Schema({ timestamps: true, collection: 'carrinho' })
export class Carrinho {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  idUsuario: string;

  @Prop({
    required: true,
    type: [{ idProduto: String, quantidade: Number, preco: Number }],
  })
  produtos: IProduto[];

  @Prop({ required: true })
  total: number;
}

export const CarrinhoSchema = SchemaFactory.createForClass(Carrinho);
