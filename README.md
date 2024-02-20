# Proyecto con NestJS y Kafka

Este proyecto utiliza NestJS y Kafka para implementar una arquitectura de mensajería asíncrona. Permite realizar transferencias entre cuentas mediante productores y consumidores.

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
    "transactionExternalId": "id_yrsr5nfib"
  }
