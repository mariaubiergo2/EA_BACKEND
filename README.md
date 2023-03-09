We are going to use: 

 - Visual Studio Code as an editor: https://code.visualstudio.com/Download 
 - MongoDB Community Server: https://www.mongodb.com/try/download/community 
 - Thunder Client as an extension in Visual Studio Code to run your REST API locally. 

IMPORTANT COMMANDS BEFORE USING VISUAL STUDIO CODE
--------------------------------------------------

- Check versions

    node -v \
    npm -v

- Global installation 

    npm i typescript -g \
    npm i ts-node -g \
    npm i nodemon -g

- Prepare project 

    tsc --init \
    npm init -y \
    npm i express cors dotenv multer mongoose \
    npm i @types/express @types/cors @types/dotenv @types/multer @types/mongoose -D
