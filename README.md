# 🎨 Cambiador de Tema - Proyecto Educativo React

Una aplicación web interactiva que demuestra el uso de componentes React, el hook `useState` y estilos CSS condicionales para crear un cambiador de tema (modo claro/oscuro).

## 📋 Descripción

Este proyecto educativo está diseñado para estudiantes que están aprendiendo React. Muestra de manera práctica cómo:

- ✅ Estructurar una aplicación con múltiples componentes
- ✅ Usar el hook `useState` para manejar el estado
- ✅ Aplicar estilos condicionales según el estado
- ✅ Crear componentes reutilizables con props
- ✅ Implementar interactividad del usuario

## 📂 Estructura de Componentes Clave

La aplicación está construida en base a componentes de React, siguiendo una filosofía modular para la gestión del estado y el diseño responsivo.

| Archivo                                        | Rol                               | Descripción Concreta                                                                                                                      |
| :--------------------------------------------- | :-------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **`app/App.jsx`**                              | **Contenedor Principal y Lógica** | Componente raíz que gestiona el estado global del tema (`'light'`/`'dark'`) y aplica la clase `dark` al `<html>` mediante `useEffect`.    |
| **`components/themeToggle/ThemeToggle.jsx`**   | **Control de Tema**               | Botón interactivo (`<button>`) que dispara la función de cambio de tema (`toggleTheme`). Es la interfaz para el usuario.                  |
| **`components/themeCard/ThemeCard.jsx`**       | **Elemento Reutilizable**         | Tarjeta visual atómica que muestra información destacada. Implementa las clases `dark:` para el cambio de estilo.                         |
| **`components/cardGrid/CardGrid.jsx`**         | **Layout: Cuadrícula**            | Contenedor que utiliza las clases de CSS Grid para organizar sus elementos hijos (las tarjetas) en un diseño responsivo de cuadrícula.    |
| **`components/featureList/FeatureList.jsx`**   | **Renderizado Dinámico**          | Se encarga de mapear y renderizar una lista de características o tecnologías, asegurando estilos consistentes para cada ítem de la lista. |
| **`components/header/Header.jsx`**             | **Layout: Cabecera**              | Contenedor de la parte superior de la aplicación. Contiene el título principal y aloja el `ThemeToggle`.                                  |
| **`components/introSection/IntroSection.jsx`** | **Contenido: Introducción**       | Sección principal de bienvenida que presenta el objetivo o resumen del proyecto.                                                          |
| **`components/footer/Footer.jsx`**             | **Informativo**                   | Pie de página que contiene información sobre la autoría, tecnologías utilizadas o enlaces de contacto.                                    |

## 🚀 Cómo Ejecutar el Proyecto

#### Prerrequisitos

- Node.js 18.x o superior
- npm o pnpm instalado

1. **Descargar el proyecto**

   - En GitHub haz clic en <code> escoge la opción que más te acomode, por ejemplo _https_ y copia el link
   - En tu terminal usa el comando
     \`\`\` git clone "pega_el_https_copiado_en_github"
   - ejecuta
     \`\`\` git init

   2. **Instalar dependencias**
      \`\`\`bash
      npm install

   # o

   pnpm install
   \`\`\` 3. **Ejecutar en modo desarrollo**
   \`\`\`bash
   npm run dev

   # o

   pnpm dev
   \`\`\`

   4. **Abrir en el navegador**

   - Visita [http://localhost:3000](http://localhost:3000)
     </code>

   ## 🎨 Características Técnicas

- **Lenguaje:** JavaScript (JSX)
- **Estilos:** Tailwind CSS v4
- **Componentes:** React con hooks
- **Empaquetador:** Vite empaquetador modular

---

**¡Feliz aprendizaje! 🚀**
