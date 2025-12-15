# 🤖 Ctrl + Z Discord Bot – Documentación de Uso

Bot de Discord desarrollado en **Node.js (ES Modules)** con **discord.js**, siguiendo **arquitectura hexagonal**, cuyo objetivo principal es **dar la bienvenida a nuevos miembros** mediante una **imagen personalizada** generada dinámicamente con Canvas.

---

## 📦 Requisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js 18+ (recomendado Node 22)**
- **npm** o **pnpm**
- Una aplicación y bot creados en el **Discord Developer Portal**
- Permisos para agregar el bot a un servidor

---

## 🔑 Configuración del entorno

Crea un archivo .env en la raíz del proyecto:

```text
DISCORD_TOKEN=TU_TOKEN_DEL_BOT
```

⚠️ Nunca subas este archivo a GitHub

---

## ▶️ Instalación

```bash
npm install
```

---

## 🚀 Ejecución del bot

```bash
npm start
```

Si todo está correcto, verás en consola:

```bash
Bot conectado como Ctrl + Z#4767
```