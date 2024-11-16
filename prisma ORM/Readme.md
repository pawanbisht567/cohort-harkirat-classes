## How to setup the PRISMA client into our local codebase
```
    - npm init -y, npm install typescript ts-node @types/node --save-dev 
    - npx tsc --init 
    - npm install prisma --save-dev 
    - npx prisma init --datasource-provider postgresql 
    - npx prisma migrate dev --name init 

```