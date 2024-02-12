# Arquitetura MVVM React

## Design

[Figma - Cart Shopping ](<https://www.figma.com/file/UGUcDm9s1n28UFcmwoPjeO/Shopping-Cart-(Community)?node-id=7%3A2&mode=dev>)

## Tech Stack

- React
- Typescript
- TailwindCSS
- Vite
- Vitest
- Pnpm

## Reset do db

no arquivo db.json copie e cole o seguinte conteúdo:

```json
{
  "products": [
    {
      "id": "d0f93296-f714-401f-8a8d-08e52320b56e",
      "name": "Italy Pizza",
      "value": 42
    },
    {
      "id": "20ed52d3-3153-48bf-a340-85d9bca3e943",
      "name": "Combo Plate",
      "value": 48
    }
  ],
  "cart": {
    "price": 90,
    "products": [
      {
        "count": 1,
        "product": {
          "id": "d0f93296-f714-401f-8a8d-08e52320b56e",
          "name": "Italy Pizza",
          "value": 42
        }
      },
      {
        "count": 1,
        "product": {
          "id": "20ed52d3-3153-48bf-a340-85d9bca3e943",
          "name": "Combo Plate",
          "value": 48
        }
      }
    ],
    "totalProduct": 2
  }
}
```

## Para Executar o Projeto

primeiro passo instalar as dependencias:

```bash
pnpm i
```

segundo passo usar o comando

```bash
pnpm run server
```

terceiro passo abra outro terminal e execute o comando

```bash
pnpm run dev
```

no final você pode resetar o db nessa [sessão](#reset-do-db)
