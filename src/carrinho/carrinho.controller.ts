import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

import { CarrinhoService } from './carrinho.service';
import { Carrinho } from './schema/carrinho.schema';

@Controller()
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @EventPattern('criar-carrinho')
  async criarCarrinho(@Payload() carrinho: Carrinho) {
    await this.carrinhoService.criarCarrinho(carrinho);
  }

  @MessagePattern('buscar-carrinho-por-id')
  async buscarCarrinhoPorId(@Payload() id: string) {
    return this.carrinhoService.buscarCarrinhoPorId(id);
  }

  @MessagePattern('atualizar-carrinho')
  async atualizarCarrinho(@Payload() carrinho: Carrinho) {
    return this.carrinhoService.atualizarCarrinho(carrinho);
  }

  @EventPattern('deletar-carrinho')
  async deletarCarrinho(@Payload() id: string) {
    await this.carrinhoService.deletarCarrinho(id);
  }
}
