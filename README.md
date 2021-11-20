<div align='center'>
  <h1>Lamer Homepage</h1>
  <img src="https://img.shields.io/badge/-Node-2C2F33?style=flat&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/-Fastify-2C2F33?style=flat&logo=fastify" alt="Fastify"><br>
  Small personal website
</div>

# Структура
```
lamer_homepage                  Root directory
│       .env                    Environment Variables
│        docker-compose.yml     Docker-compose config
└───nodejs                      Fastify server directory
    │   .env
    │   .eslintignore
    │   .eslintrc
    │   .prettierignore
    │   .prettierrc
    │   package-lock.json
    │   package.json
    │   tsconfig.json           Ts config
    │   Dockerfile              Dockerfile to run the container
    └───src                     Source codes
        │   index.ts            Point of entry
        │   load.info.ts        File for uploading avatar and nickname from Discord
        ├───templates
        │   │   index.ejs       Main ejs file
        │   └───css             Styles
        │       └───index.css   Styles file
        └───utils               Utils
            │   env.loader.ts   File to download .env (nodejs / .env)
            └───logger.ts       Logger
```

# About me
Website: https://lamer.otter.su <br>
Discord: [Otter] Lamer#2800

# Concept
https://github.com/xpyxel/website
