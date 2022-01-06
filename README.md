<div align='center'>
  <h1>Lamer Homepage</h1>
  <img src="https://img.shields.io/badge/-Node-2C2F33?style=flat&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/-Fastify-2C2F33?style=flat&logo=fastify" alt="Fastify"><br>
  Small personal website
</div>

# Structure
```
lamer_homepage                    Root directory
│       .env                      Environment Variables
│       docker-compose.yml        Docker-compose config
│       Dockerfile                Dockerfile to run the container
└───nodejs                        Fastify server directory
    │   .env
    │   .eslintignore
    │   .eslintrc
    │   .prettierignore
    │   .prettierrc
    │   package-lock.json
    │   package.json
    │   tsconfig.json             Ts config
    └───src                       Source codes
        │   index.ts              Point of entry
        │   load.info.ts          File for uploading avatar and nickname from Discord
        ├───classes               Module classes
        │   │   Base.ts         
        │   └───HookController.ts Class for creating modular hooks
        ├───hooks
        │   │   onClose.ts        Fires when disconnected from the network
        │   │   onError.ts        Fires when errors occur
        │   └───onReady.ts        Fires when connected
        ├───templates
        │   │   index.ejs         Main ejs file
        │   └───css               Styles
        │       └───index.css     Styles file
        └───utils                 Utils
            │   env.loader.ts     File to download .env (nodejs / .env)
            └───logger.ts         Logger
```

# About me
Website: https://lamer.otter.su <br>
Discord: [Otter] Lamer#2800
