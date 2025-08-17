# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Структура проекта
src/
├── assets/ # Статические ресурсы
│ ├── fonts/ # Шрифты
│ └── images/ # Изображения
│
├── components/ # Компоненты с типами
│ ├── ui/ # Базовые UI-компоненты
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ └── Modal.tsx
│ │
│ ├── layout/ # Компоненты макета
│ │ ├── Header.tsx
│ │ ├── Sidebar.tsx
│ │ └── TaskGrid.tsx
│ │
│ └── features/ # Фиче-компоненты
│ ├── TaskItem.tsx
│ ├── ProgressBar.tsx
│ └── Notification.tsx
│
├── contexts/ # Типизированные контексты
│ ├── ThemeContext.tsx # Контекст темы
│ ├── TasksContext.tsx # Контекст задач
│ └── HistoryContext.tsx # Контекст истории
│
├── hooks/ # Типизированные кастомные хуки
│ ├── useLocalStorage.ts # Хук для localStorage
│ ├── useTimer.ts # Таймер
│ ├── useTaskAnalytics.ts # Аналитика задач
│ └── useDebounce.ts # Дебаунс-логика
│
├── pages/ # Страницы приложения
│ ├── Dashboard.tsx # Главная страница
│ ├── Analytics.tsx # Аналитика
│ └── Settings.tsx # Настройки
│
├── services/ # Сервисы с типами
│ ├── taskService.ts # Логика работы с задачами
│ └── api.ts # API-клиент
│
├── types/ # Централизованные типы
│ ├── task.d.ts # Типы задач
│ ├── context.d.ts # Типы контекстов
│ ├── hooks.d.ts # Типы хуков
│ └── index.ts # Баррель для экспорта типов
│
├── utils/ # Утилиты с типами
│ ├── helpers.ts # Вспомогательные функции
│ └── constants.ts # Константы приложения
│
├── App.tsx # Главный компонент приложения
├── index.tsx # Точка входа
└── vite-env.d.ts # Типы окружения (Vite)
