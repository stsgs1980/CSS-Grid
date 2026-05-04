# Шаблон промпта для Interactive Cheat Sheet

## 🎯 Базовый промпт для создания интерактивной шпаргалки

```
Создай интерактивную шпаргалку по [ТЕМА] с использованием:

## Технологии
- Next.js 16 + App Router
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui (Radix Tabs)

## Дизайн-система: "Industrial Minimalism"
- Светлая тема (белый фон)
- Чёрно-белая палитра (neutral-*)
- Моноширинный шрифт (font-mono)
- Пунктирные линии для разделения (border-dashed)
- Технические маркеры (нумерация секций §01, §02...)
- Номера секций в квадратах □ 01

## Структура
1. Header sticky с названием и счётчиком примеров
2. Sidebar навигация (TabsList вертикальный)
3. Контентная область с карточками примеров

## Карточка примера (PatternCard)
- Tabs с Preview и Code
- Badge для категории
- Живой preview на CSS/JSX
- Код в monospace с подсветкой синтаксиса

## Количество
- 10-12 секций
- 4-8 примеров в каждой секции
- Итого 50-70 интерактивных примеров
```

---

## 📋 Адаптивные шаблоны по типам контента

### 1. CSS Property Cheat Sheet
```
Создай шпаргалку по CSS свойству [PROPERTY]:

Секции:
01. Базовый синтаксис
02. Значения (keywords)
03. Единицы измерения
04. Комбинации с другими свойствами
05. Практические примеры
06. Браузерная поддержка
07. Типичные ошибки
08. Продвинутые техники
09. Анимации/трансформации
10. Шпаргалка (таблица значений)
```

### 2. JavaScript API Cheat Sheet
```
Создай шпаргалку по JavaScript API [API_NAME]:

Секции:
01. Обзор и совместимость
02. Базовые методы
03. Параметры и опции
04. Возврат значений / Promise
05. Обработка ошибок
06. Практические примеры
07. Типичные use cases
08. Производительность
09. Сравнение с альтернативами
10. Шпаргалка (методы + синтаксис)
```

### 3. React Hooks / Component Library
```
Создай шпаргалку по React [HOOK/COMPONENT]:

Секции:
01. Синтаксис и аргументы
02. Базовое использование
03. Зависимости
04. Оптимизация
05. Паттерны
06. Типичные ошибки
07. Сравнение с альтернативами
08. TypeScript типы
09. Тестирование
10. Шпаргалка
```

### 4. Framework Feature Cheat Sheet
```
Создай шпаргалку по [FRAMEWORK] [FEATURE]:

Секции:
01. Обзор
02. Базовая конфигурация
03. Опции и параметры
04. Интеграция с другими фичами
05. Практические примеры
06. Best practices
07. Производительность
08. Debug
09. Продвинутые техники
10. Шпаргалка
```

---

## 🎨 Дизайн-токены (копировать в проект)

```css
/* Industrial Minimalism Theme */
:root {
  /* Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #fafafa;
  --bg-tertiary: #f5f5f5;
  
  --text-primary: #171717;
  --text-secondary: #525252;
  --text-tertiary: #a3a3a3;
  
  --border-solid: #e5e5e5;
  --border-dashed: #d4d4d4;
  
  --accent-dark: #262626;
  --accent-light: #f5f5f5;
  
  /* Typography */
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-size-xs: 10px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  
  /* Spacing */
  --gap-xs: 0.25rem;
  --gap-sm: 0.5rem;
  --gap-md: 1rem;
  --gap-lg: 1.5rem;
  
  /* Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
}

/* Technical Marker Component */
.tech-marker {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 9px;
  color: var(--text-tertiary);
  font-family: var(--font-mono);
}

.tech-marker::before {
  content: '';
  width: 8px;
  height: 8px;
  border: 1px solid currentColor;
  border-radius: 50%;
}

/* Dashed Divider */
.dashed-divider {
  border-top: 1px dashed var(--border-dashed);
}

/* Section Number */
.section-number {
  width: 20px;
  height: 20px;
  border: 2px solid var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: bold;
  font-family: var(--font-mono);
}
```

---

## 🧩 Reusable React Components

```tsx
// PatternCard - карточка с Preview/Code tabs
function PatternCard({
  title,
  badge,
  description,
  preview,
  code
}: {
  title: string
  badge?: string
  description?: string
  preview: React.ReactNode
  code: string
}) {
  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
      <Tabs defaultValue="preview">
        <div className="flex items-center justify-between border-b border-neutral-200 px-3 py-2 bg-neutral-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-800 font-semibold">{title}</span>
            {badge && <span className="text-[10px] px-1.5 py-0.5 bg-neutral-200 text-neutral-600 rounded font-mono uppercase">{badge}</span>}
          </div>
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="p-5">{preview}</TabsContent>
        <TabsContent value="code">
          <pre className="text-xs font-mono bg-neutral-50 p-4 overflow-x-auto">
            <code>{code}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// SectionTitle - заголовок секции с нумерацией
function SectionTitle({ number, children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {number && (
        <div className="w-5 h-5 border-2 border-neutral-800 flex items-center justify-center">
          <span className="text-[9px] font-mono font-bold">{number}</span>
        </div>
      )}
      <span className="text-sm font-bold text-neutral-900 font-mono uppercase">{children}</span>
      <div className="flex-1 border-t border-dashed border-neutral-300" />
      {number && <span className="text-[9px] text-neutral-400 font-mono">§{number}</span>}
    </div>
  )
}

// GridItem - базовый элемент для preview
function GridItem({ children, dark = false }) {
  return (
    <div className={`
      text-xs font-mono flex items-center justify-center p-2 rounded
      ${dark ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-700 border border-neutral-300'}
    `}>
      {children}
    </div>
  )
}
```

---

## 📊 Структура данных для навигации

```tsx
const sections = [
  { id: 'basics', label: 'Основы', group: 'top' },
  { id: 'values', label: 'Значения', group: 'top' },
  { id: 'examples', label: 'Примеры', group: 'main' },
  // ... разделить на groups для UI
]

const sectionsTop = sections.filter(s => s.group === 'top')
const sectionsBottom = sections.filter(s => s.group === 'main')
```

---

## 🚀 Быстрый старт для новой шпаргалки

### Промпт для Claude/GPT:

```
Создай интерактивную шпаргалку по [CSS FLEXBOX / JAVASCRIPT ARRAY METHODS / REACT HOOKS / и т.д.]

Используй архитектуру и дизайн-систему из проекта CSS Grid Cheat Sheet:
- Industrial Minimalism стиль (белый фон, neutral-* цвета, моноширинный шрифт)
- Tabs для навигации между секциями
- PatternCard компоненты с Preview/Code
- Нумерация секций (§01, §02...)
- Пунктирные разделители
- 50-70 интерактивных примеров
- Responsive дизайн

Секции:
[ОПИШИ НУЖНЫЕ СЕКЦИИ]

Технологии: Next.js 16, TypeScript, Tailwind CSS, shadcn/ui
```

---

## 📁 Файловая структура

```
src/
├── app/
│   ├── page.tsx          # Main page с всеми секциями
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── ui/
│       └── tabs.tsx      # shadcn/ui Tabs
└── lib/
    └── utils.ts          # Utility functions
```

---

## ✅ Чек-лист перед стартом

1. [ ] Определить тему и целевую аудиторию
2. [ ] Составить список секций (10-12)
3. [ ] Собрать примеры для каждой секции (4-8)
4. [ ] Подготовить код для каждого примера
5. [ ] Продумать интерактивность (preview)
6. [ ] Спроектировать навигацию
7. [ ] Добавить шпаргалку (таблица в конце)

---

## 🔄 Workflow разработки

```
1. Инициализация проекта
   └── Next.js 16 + TypeScript + Tailwind + shadcn

2. Базовые компоненты
   └── PatternCard, SectionTitle, GridItem

3. Структура страницы
   └── Header + Sidebar + Content Area

4. Наполнение секциями
   └── По одной секции за раз

5. Тестирование
   └── Проверка всех preview и code

6. Финализация
   └── Счётчик примеров, lint, документация
```
