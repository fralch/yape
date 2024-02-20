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
    @Post('transaccion')
    async getTransaccion(@Body() transaction: any): Promise<Transaccion> {
        try {
            const data = await this.consumerService.getTransaccion(transaction.transactionExternalId);
            return data;
        } catch (error) {
            console.error(error);
            throw new BadRequestException(error);
        }
    }
}
