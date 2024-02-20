import { BadRequestException, Body, Controller, Get, Param, Post,  } from "@nestjs/common";
import { Transaccion } from "@prisma/client";
import { ConsumerService } from "./consumer.service";

@Controller('consumer')
export class ConsumerController {
    constructor(private consumerService: ConsumerService) {}

    @Get()
    async consume() {
        const mensaje  = await this.consumerService.consume();
        return mensaje;
    }
}
