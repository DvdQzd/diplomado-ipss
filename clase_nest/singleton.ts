// SINGLETON

class DatabaseConnection {
  private static instance: DatabaseConnection;

  // El constructor debe ser privado para evitar 'new DatabaseConnection()'
  private constructor() {
    console.log("Conectado a la base de datos");
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  public query(sql: string) {
    console.log(`Ejecutando: ${sql}`);
  }
}

// Uso:
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log(db1 === db2); // true (es la misma instancia)