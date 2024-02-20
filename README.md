# Proyecto con NestJS y Kafka

Este proyecto utiliza NestJS y Kafka para implementar una arquitectura de mensajería asíncrona. Permite realizar transferencias entre cuentas mediante productores y consumidores.

## Endpoints

### Enviar Transacción (Productor)

- **Método:** POST
- **URL:** `172.17.96.79:3333/producer/save_send`
- **Cuerpo de la solicitud:**
  ```json
  {
    "accountExternalIdDebit": "Guid",
    "accountExternalIdCredit": "Guid",
    "tranferTypeId": 1,
    "value": 120
  }
