# juc-mongodb-web

Cliente web creado para las **II Jornadas Técnicas UEx – CIEMAT. Introducción a NoSQL con MongoDB**. API disponible en [csuarez/juc-mongodb-api](https://github.com/csuarez/juc-mongodb-api).

## Instalación

1. Instalamos dependencias
  ```sh
  curl –sL https://deb.nodesource.com/setup | sudo bash -
  sudo apt-get install nodejs build-essential ruby ruby-dev
  ```

2. Bajamos la web
  ```sh
  git clone https://github.com/csuarez/juc-mongodb-web.git
  cd juc-mongodb-web
  ```

3. Instalamos más dependencias
  ```sh
  sudo npm –g install grunt-cli
  sudo npm –g install bower
  sudo gem install compass
  ```

4. MÁS DEPENDENCIAS
  ```sh
  npm install
  bower install --allow-root
  ```
  **NOTA**: Puede que `npm install` falle. Ejecutar otra vez siguiendo las instrucciones.

5. Ejecutamos el servidor de desarrollo
  ```sh
  grunt serve
  ``

**NOTA**: El servicio se levanta en el puerto `80`.
