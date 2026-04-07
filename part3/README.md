# 📚 Full Stack Open - Part 3 (Backend com Node.js, Express e MongoDB)

Este repositório contém os exercícios e a evolução do projeto desenvolvidos durante a Parte 3 do curso Full Stack Open.

---

## 🚀 Sobre o projeto

Nesta etapa, foi construída uma aplicação backend utilizando Node.js e Express, posteriormente integrada com um frontend em React e, por fim, conectada a um banco de dados MongoDB.

A aplicação permite:

* Listar notas
* Criar novas notas
* Atualizar importância das notas
* Persistir dados no MongoDB

---

## 🧱 Estrutura do projeto

```
part3/
├── notes-backend/
│   ├── build/              # Build do frontend (React)
│   ├── models/             # Modelos do MongoDB (em evolução)
│   ├── mongo.js            # Script para testes com MongoDB
│   ├── index.js            # Backend principal (Express)
│   ├── package.json
│
├── notes-frontend/         # Frontend em React (desenvolvimento)
```

---

## ⚙️ Tecnologias utilizadas

* Node.js
* Express
* MongoDB (MongoDB Atlas)
* Mongoose
* React (frontend)
* Axios

---

## 🌐 Deploy

A aplicação está disponível em:

👉 https://fullstackopen-ans2.onrender.com

Endpoints disponíveis:

* `/` → frontend
* `/api/notes` → API de notas

---

## 🛠️ Scripts úteis

### Backend

```bash
npm start
```

Inicia o servidor backend.

---

### Build do frontend

```bash
npm run build:ui
```

Este comando:

1. Gera o build do frontend
2. Copia para o backend (`/build`)
3. Permite servir o frontend via Express

---

### Testar MongoDB manualmente

```bash
node mongo.js "senha" "nome" "numero"
```

---

## 🔐 Variáveis importantes

Para conexão com MongoDB, é recomendado usar variáveis de ambiente (em etapas futuras):

```
MONGODB_URI=...
```

---

## 📌 Observações importantes

* Em produção, o frontend utiliza URL relativa (`/api/notes`)
* O backend serve arquivos estáticos via:

```js
app.use(express.static('build'))
```

* O build do frontend deve ser atualizado sempre que houver mudanças

---

## 📈 Aprendizados desta etapa

* Criação de APIs REST com Express
* Integração frontend + backend
* Deploy de aplicação fullstack
* Uso de MongoDB com Mongoose
* Tratamento de erros e estado inconsistente

---

## 📚 Curso

Projeto desenvolvido durante o curso:

Full Stack Open — Universidade de Helsinki

---

## 👨‍💻 Autor

Gustavo Lopes
