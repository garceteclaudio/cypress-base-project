# ⚙️ Requisitos

Node.js (v16+ recomendado)

npm (v8+ o yarn)

Git (para clonar el repositorio)

IDE (VS Code, WebStorm, etc.)

# 🚀 Instalación

#### 1. Clonar el repositorio:

```bash
git clone https://github.com/garceteclaudio/cypress-base-project.git
cd CYPRESS-BASE-PROJECT/
```

#### 2. Instalar dependencias:

```bash
npm install
```

#### 3. Instalar Cypress (si no se instaló automáticamente):

```bash
npm install cypress --save-dev
```

# 📂 Estructura del Proyecto

```text
CYPRESS-BASE-PROJECT/
├── cypress/
│   ├── e2e/              # Pruebas E2E
│   ├── fixtures/         # Datos estáticos (ej. JSON)
│   ├── support/          # Comandos personalizados y config.
│   └── downloads/        # Archivos descargados (opcional)
├── cypress.config.js     # Configuración principal
├── package.json          # Dependencias y scripts
└── README.md             # Documentación
```

# ▶️ Ejecución de Pruebas

#### 1. Modo Interactivo (Cypress UI)

```bash
npx cypress open
```

#### 2. Modo Headless (Terminal)

```bash
npx cypress run
```

# 📝 Ejemplo de Prueba

#### Ejemplo: Prueba de Login

```javascript
describe("Prueba de Login", () => {
  beforeEach(() => {
    cy.visit("https://ejemplo.com/login");
  });

  it("Login exitoso", () => {
    cy.get("#username").type("usuario@test.com");
    cy.get("#password").type("pass123");
    cy.get("#login-button").click();
    cy.url().should("include", "/dashboard");
  });

  it("Login fallido", () => {
    cy.get("#username").type("usuario@test.com");
    cy.get("#password").type("pass-incorrecto");
    cy.get("#login-button").click();
    cy.contains("Credenciales inválidas").should("be.visible");
  });
});
```

# 🔁 Integración con CI/CD

#### Ejemplo para GitHub Actions (.github/workflows/cypress.yml)

```yaml
name: Cypress Tests
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: cypress-io/github-action@v5
        with:
          start: npm start
          wait-on: "http://localhost:3000"
```

# 🤝 Contribución

#### 1. Haz un fork del proyecto.

#### 2. Crea una rama (git checkout -b feature/nueva-funcionalidad).

#### 3. Realiza tus cambios y haz commit (git commit -m "Añade nueva prueba").

#### 4. Haz push a la rama (git push origin feature/nueva-funcionalidad).

#### 5. Abre un Pull Request.
