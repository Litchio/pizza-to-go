
## Installation 
Software:
- Docker Desktop
- Maven 
- JAVA JDK Version 11

JDK und Maven Version prüfen:
```bash
javac -version
mvn -version
```
Beide Versionen sollten identisch sein.

Folgenden Befehl mittels der Konsole im Ordner des Servers ausführen:
 ```bash
 mvn clean package
```
Nach erfolgreichen Erzeugen des Builds, kann der Server mit folgendem Befehl in docker gestartet werden:
 ```bash
 docker-compose up --build
```
## Website
Die Website ist mittels http://localhost:9080/pizza-to-go-server/ erreichbar.
