## Estructura del proyecto
El proyecto se divide en dos partes principales: el backend desarrollado en .NET y el frontend en React native.
## Prerequisitos

 - [SDK .NET8](https://dotnet.microsoft.com/es-es/download/dotnet/8.0)
 - [git 2.33.0 o superior ](https://git-scm.com/downloads)
 - [NodeJs LTS](https://nodejs.org/en)

Primero, clone el repositorio en alguna de sus carpetas, con el comando: 
```bash
   git clone https://github.com/GioxBRUSH/Taller3-_IwebMovil.git
```

#Backend
inicialmente se prepará el backend, para ello se deberá ejecutar el siguiente comando en la terminal, una vez abierto el proyecto:

```bash
   cd Backend 
   cd MobileHub
   dotnet tool install --global dotnet-ef
   dotnet restore
```

Cree un archivo llamado .env dentro de la carpeta MobileHub con los siguientes campos:
```bash
   GITHUB_ACCESS_TOKEN= #Tu token de github
   LOCAL_IP= #tu ipv4 local
```

Para saber tu ipv4 local debes abrir una consola de comando en tu  computador y color: 
```bash
   ip config
```
luego ejecutar: 
```bash
  dotnet run
```
# Frontend
## Prerequisitos
 - [Node](https://nodejs.org/en)

Abra una nueva terminal y entre a la carpeta del frontend

```bash
  cd frontend
  cd MobileHub
```

Installe todas las dependencias

```bash
  npm install
```

Debe navegar hacia la carpeta components, luego la carpeta home, y dentro encontrará un archivo llamado HomeScreen.tsx.
Debe entrar y modificar la variable url, cambiando la variable por:

```bash
    const url = "http://##tuipv4:5139/repositories";
```
cambie solamente ##tuipv4 por la ip de su dispositivo local

## Finalmente, ejecute el proyecto 

```bash
  npx expo start 
```