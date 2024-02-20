# Proyecto con NestJS,  Kafka y Prisma

## Descripción

Este proyecto utiliza NestJS y Kafka para implementar una arquitectura de mensajería asíncrona. Permite 
realizar transferencias entre cuentas mediante productores y consumidores.

## Autor
Alexander Frank Cairampoma Castro

## Configuración

Asegúrate de tener instalado Node.js y las dependencias necesarias. Puedes instalarlas ejecutando:
```bash
npm install
npx prisma migrate dev --name init
```

## Endpoints

### Enviar Transacción (Productor)

- **Método:** POST
- **URL:** `localhost:3333/producer/save_send`
- **Cuerpo de la solicitud:**
  ```json
  {
    "accountExternalIdDebit": "Guid",
    "accountExternalIdCredit": "Guid",
    "tranferTypeId": 1,
    "value": 120
  }


### Correr Consumer 
- **Método:** GET
- **URL:** `localhost:3333/consumer/`


### Recuperar Transacción 

- **Método:** POST
- **URL:** `localhost:3333/consumer/transaccion`
- **Cuerpo de la solicitud:**
  ```json
  {
    "transactionExternalId": "Guid"
  }
