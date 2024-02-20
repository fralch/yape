import { BadRequestException, Body, Controller, Get, Param, Post,  } from "@nestjs/common";
import { Transaccion } from "@prisma/client";
import { ConsumerService } from "./consumer.service";

@Controller('consumer')
export class ConsumerController {
    constructor(private consumerService: ConsumerService) {}

    @Get()
    async consume() {
        const mensaje  = await this.consumerService.consume();
        console.log("mensaje desde controlador")
        console.log(mensaje)
        return mensaje;
    }
    @Get('transaccion/:transaccion_id')
    async getTransaccion(@Param('transaccion_id') transaccion_id: string): Promise<Transaccion> {
        return this.consumerService.getTransaccion(transaccion_id);
    }
}
