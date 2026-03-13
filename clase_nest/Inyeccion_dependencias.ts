
interface Logger {
    log(message: string): void;
}

class FileLogger implements Logger {
  log(message: string) { console.log(`Guardando en archivo: ${message}`); }
}

class ConsoleLogger implements Logger {
  log(message: string) { console.log(`Consola: ${message}`); }
}

class UserService {
    constructor(private logger: Logger) {}

    create(name: string) {
        this.logger.log(`Usuario ${name} creado`);
    }
}

const serviceConsola = new UserService(new ConsoleLogger());
serviceConsola.create("David")

const serviceArchivo = new UserService(new FileLogger());
serviceArchivo.create("David")