# Конфигурируемая архитектура Interactive Cheat Sheet

## 🎯 Принцип: Data-Driven + Theme-Agnostic

Отделяем:
1. **Данные** (секции, примеры, код) — в JSON/TypeScript конфиг
2. **Тема** (цвета, шрифты, стили) — в theme config
3. **Компоновка** (layout варианты) — в layout config

---

## 📁 Файловая структура

```
src/
├── config/
│   ├── cheatsheet.ts      # Данные шпаргалки
│   ├── theme.ts           # Тема (цвета, шрифты)
│   └── layout.ts          # Варианты компоновки
├── components/
│   ├── CheatSheet.tsx     # Главный компонент
│   ├── PatternCard.tsx    # Карточка примера
│   ├── Sidebar.tsx        # Навигация
│   └── ui/                # Базовые UI компоненты
└── app/
    └── page.tsx           # Точка входа
```

---

## 1️⃣ DATA CONFIG — Данные шпаргалки

```typescript
// config/cheatsheet.ts

export interface Example {
  id: string
  title: string
  badge?: string
  description?: string
  preview: string      // JSX код preview
  code: string         // CSS/JS код
}

export interface Section {
  id: string
  number: string
  title: string
  examples: Example[]
}

export interface CheatSheetConfig {
  meta: {
    title: string
    subtitle: string
    count: number       // auto-calculated
  }
  sections: Section[]
}

// ============================================
// ПРИМЕР: CSS Grid Cheat Sheet
// ============================================

export const cssGridCheatsheet: CheatSheetConfig = {
  meta: {
    title: "CSS Grid",
    subtitle: "Интерактивная шпаргалка",
  },
  sections: [
    {
      id: "display",
      number: "01",
      title: "Display: grid vs inline-grid",
      examples: [
        {
          id: "display-grid",
          title: "display: grid",
          badge: "Блочный",
          description: "Создаёт блочный контейнер",
          preview: `
            <div className="grid grid-cols-3 gap-1">
              {[1,2,3].map(n => <GridItem key={n}>{n}</GridItem>)}
            </div>
          `,
          code: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`
        },
        // ... другие примеры
      ]
    },
    // ... другие секции
  ]
}

// ============================================
// ПРИМЕР: Flexbox Cheat Sheet
// ============================================

export const flexboxCheatsheet: CheatSheetConfig = {
  meta: {
    title: "CSS Flexbox",
    subtitle: "Интерактивная шпаргалка",
  },
  sections: [
    {
      id: "flex-direction",
      number: "01",
      title: "flex-direction",
      examples: [
        {
          id: "flex-row",
          title: "flex-direction: row",
          preview: `<div className="flex flex-row gap-1">...</div>`,
          code: `.container { flex-direction: row; }`
        },
        // ...
      ]
    }
  ]
}
```

---

## 2️⃣ THEME CONFIG — Цвета и стили

```typescript
// config/theme.ts

export interface ThemeConfig {
  name: string
  colors: {
    background: string
    foreground: string
    primary: string
    secondary: string
    muted: string
    accent: string
    border: string
    card: string
  }
  fonts: {
    mono: string
    sans: string
  }
  radius: string
  style: 'minimal' | 'industrial' | 'colorful' | 'dark'
}

// ============================================
// ПРИМЕРЫ ТЕМ
// ============================================

export const industrialTheme: ThemeConfig = {
  name: "Industrial Minimalism",
  colors: {
    background: "#ffffff",
    foreground: "#171717",
    primary: "#262626",
    secondary: "#525252",
    muted: "#a3a3a3",
    accent: "#171717",
    border: "#e5e5e5",
    card: "#fafafa",
  },
  fonts: {
    mono: "'JetBrains Mono', monospace",
    sans: "system-ui, sans-serif",
  },
  radius: "4px",
  style: "industrial"
}

export const colorfulTheme: ThemeConfig = {
  name: "Colorful",
  colors: {
    background: "#faf5ff",
    foreground: "#1e1b4b",
    primary: "#7c3aed",
    secondary: "#a78bfa",
    muted: "#c4b5fd",
    accent: "#8b5cf6",
    border: "#e9d5ff",
    card: "#ffffff",
  },
  fonts: {
    mono: "'Fira Code', monospace",
    sans: "Inter, sans-serif",
  },
  radius: "12px",
  style: "colorful"
}

export const darkTheme: ThemeConfig = {
  name: "Dark Mode",
  colors: {
    background: "#0a0a0a",
    foreground: "#fafafa",
    primary: "#fafafa",
    secondary: "#a1a1a1",
    muted: "#525252",
    accent: "#22d3ee",
    border: "#262626",
    card: "#171717",
  },
  fonts: {
    mono: "'JetBrains Mono', monospace",
    sans: "system-ui, sans-serif",
  },
  radius: "8px",
  style: "dark"
}

export const retroTheme: ThemeConfig = {
  name: "Retro Terminal",
  colors: {
    background: "#0d1117",
    foreground: "#00ff00",
    primary: "#00ff00",
    secondary: "#00cc00",
    muted: "#006600",
    accent: "#ffff00",
    border: "#003300",
    card: "#0a0f14",
  },
  fonts: {
    mono: "'VT323', monospace",
    sans: "'VT323', monospace",
  },
  radius: "0px",
  style: "minimal"
}
```

---

## 3️⃣ LAYOUT CONFIG — Компоновка

```typescript
// config/layout.ts

export interface LayoutConfig {
  // Sidebar
  sidebar: {
    position: 'left' | 'right' | 'hidden'
    width: string
    sticky: boolean
  }
  // Header
  header: {
    sticky: boolean
    showTech: boolean    // Next.js, TypeScript badges
    showCount: boolean
  }
  // Grid
  grid: {
    columns: 1 | 2 | 3 | 'auto'
    gap: string
  }
  // Navigation
  navigation: {
    style: 'tabs' | 'timeline' | 'pills' | 'list'
    showNumbers: boolean
    groupBy: 'none' | 'top-bottom' | 'category'
  }
  // Cards
  card: {
    defaultTab: 'preview' | 'code'
    showDescription: boolean
    codeHeight: 'auto' | 'fixed'
  }
}

// ============================================
// ПРИМЕРЫ LAYOUTS
// ============================================

export const defaultLayout: LayoutConfig = {
  sidebar: { position: 'right', width: '176px', sticky: true },
  header: { sticky: true, showTech: true, showCount: true },
  grid: { columns: 2, gap: '1rem' },
  navigation: { style: 'list', showNumbers: true, groupBy: 'top-bottom' },
  card: { defaultTab: 'preview', showDescription: true, codeHeight: 'auto' }
}

export const minimalLayout: LayoutConfig = {
  sidebar: { position: 'hidden', width: '0', sticky: false },
  header: { sticky: false, showTech: false, showCount: true },
  grid: { columns: 1, gap: '1.5rem' },
  navigation: { style: 'tabs', showNumbers: false, groupBy: 'none' },
  card: { defaultTab: 'preview', showDescription: false, codeHeight: 'auto' }
}

export const sidebarLeftLayout: LayoutConfig = {
  sidebar: { position: 'left', width: '200px', sticky: true },
  header: { sticky: true, showTech: true, showCount: true },
  grid: { columns: 2, gap: '1rem' },
  navigation: { style: 'timeline', showNumbers: true, groupBy: 'category' },
  card: { defaultTab: 'preview', showDescription: true, codeHeight: 'auto' }
}

export const wideLayout: LayoutConfig = {
  sidebar: { position: 'right', width: '220px', sticky: true },
  header: { sticky: true, showTech: true, showCount: true },
  grid: { columns: 3, gap: '0.75rem' },
  navigation: { style: 'pills', showNumbers: true, groupBy: 'none' },
  card: { defaultTab: 'preview', showDescription: true, codeHeight: 'fixed' }
}
```

---

## 4️⃣ ГЛАВНЫЙ КОМПОНЕНТ — CheatSheet.tsx

```tsx
// components/CheatSheet.tsx
'use client'

import { useState, createContext, useContext } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { CheatSheetConfig, ThemeConfig, LayoutConfig } from '@/config'

// Context для темы и layout
const CheatSheetContext = createContext<{
  theme: ThemeConfig
  layout: LayoutConfig
} | null>(null)

export const useCheatSheet = () => {
  const ctx = useContext(CheatSheetContext)
  if (!ctx) throw new Error('useCheatSheet must be used within CheatSheet')
  return ctx
}

// ============================================
// ГЛАВНЫЙ КОМПОНЕНТ
// ============================================

interface CheatSheetProps {
  config: CheatSheetConfig
  theme: ThemeConfig
  layout: LayoutConfig
}

export function CheatSheet({ config, theme, layout }: CheatSheetProps) {
  const exampleCount = config.sections.reduce(
    (acc, s) => acc + s.examples.length, 0
  )

  return (
    <CheatSheetContext.Provider value={{ theme, layout }}>
      <div 
        className="min-h-screen flex flex-col font-mono"
        style={{
          backgroundColor: theme.colors.background,
          color: theme.colors.foreground,
          fontFamily: theme.fonts.mono,
        }}
      >
        {/* Header */}
        {layout.header.sticky && (
          <Header 
            title={config.meta.title} 
            subtitle={config.meta.subtitle}
            count={exampleCount}
            showTech={layout.header.showTech}
            showCount={layout.header.showCount}
          />
        )}

        {/* Main */}
        <main className="flex-1 flex">
          {/* Sidebar Left */}
          {layout.sidebar.position === 'left' && (
            <Sidebar sections={config.sections} />
          )}

          {/* Content */}
          <Content sections={config.sections} layout={layout} />

          {/* Sidebar Right */}
          {layout.sidebar.position === 'right' && (
            <Sidebar sections={config.sections} />
          )}
        </main>
      </div>
    </CheatSheetContext.Provider>
  )
}

// ============================================
// ПОДКОМПОНЕНТЫ
// ============================================

function Header({ title, subtitle, count, showTech, showCount }) {
  const { theme } = useCheatSheet()
  
  return (
    <header 
      className="border-b shrink-0 sticky top-0 z-10"
      style={{ 
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.background,
      }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold" style={{ color: theme.colors.foreground }}>
              {title}
            </h1>
            {showCount && (
              <p className="text-xs mt-0.5" style={{ color: theme.colors.muted }}>
                {subtitle} · {count} примеров
              </p>
            )}
          </div>
          {showTech && <TechBadges />}
        </div>
      </div>
    </header>
  )
}

function Sidebar({ sections }) {
  const { theme, layout } = useCheatSheet()
  
  return (
    <aside 
      className="shrink-0 hidden lg:block"
      style={{ 
        width: layout.sidebar.width,
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.card,
      }}
    >
      <nav className="sticky top-16 px-4 pt-10">
        <TabsList className="flex flex-col gap-1 bg-transparent">
          {sections.map(section => (
            <TabsTrigger 
              key={section.id} 
              value={section.id}
              className="justify-start text-left"
            >
              {layout.navigation.showNumbers && (
                <span className="mr-2 opacity-50">{section.number}</span>
              )}
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </nav>
    </aside>
  )
}

function Content({ sections, layout }) {
  const { theme } = useCheatSheet()
  
  return (
    <div className="flex-1 container mx-auto px-4 py-6">
      <Tabs defaultValue={sections[0].id}>
        {sections.map(section => (
          <TabsContent key={section.id} value={section.id}>
            <SectionTitle number={section.number} title={section.title} />
            <div 
              className="grid gap-4"
              style={{
                gridTemplateColumns: layout.grid.columns === 1 
                  ? '1fr' 
                  : layout.grid.columns === 2 
                    ? 'repeat(2, 1fr)'
                    : layout.grid.columns === 3
                      ? 'repeat(3, 1fr)'
                      : 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: layout.grid.gap,
              }}
            >
              {section.examples.map(example => (
                <PatternCard key={example.id} example={example} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function PatternCard({ example }) {
  const { theme, layout } = useCheatSheet()
  
  return (
    <div 
      className="border rounded-lg overflow-hidden"
      style={{
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.background,
        borderRadius: theme.radius,
      }}
    >
      <Tabs defaultValue={layout.card.defaultTab}>
        {/* Header */}
        <div 
          className="flex items-center justify-between border-b px-3 py-2"
          style={{
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.card,
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold">{example.title}</span>
            {example.badge && (
              <span 
                className="text-[10px] px-1.5 py-0.5 rounded uppercase"
                style={{
                  backgroundColor: theme.colors.muted,
                  color: theme.colors.background,
                }}
              >
                {example.badge}
              </span>
            )}
          </div>
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>

        {/* Preview */}
        <TabsContent value="preview" className="p-5">
          {/* Preview рендерится динамически или через pre-configured компоненты */}
          <div dangerouslySetInnerHTML={{ __html: example.preview }} />
        </TabsContent>

        {/* Code */}
        <TabsContent value="code">
          <pre 
            className="p-4 text-xs overflow-x-auto"
            style={{ 
              backgroundColor: theme.colors.card,
              color: theme.colors.foreground,
            }}
          >
            <code>{example.code}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

---

## 5️⃣ ИСПОЛЬЗОВАНИЕ — page.tsx

```tsx
// app/page.tsx
import { CheatSheet } from '@/components/CheatSheet'
import { cssGridCheatsheet, flexboxCheatsheet } from '@/config/cheatsheet'
import { industrialTheme, colorfulTheme, darkTheme } from '@/config/theme'
import { defaultLayout, minimalLayout, sidebarLeftLayout } from '@/config/layout'

export default function Home() {
  // Выбираем конфигурацию
  const config = cssGridCheatsheet    // или flexboxCheatsheet
  const theme = industrialTheme        // или colorfulTheme, darkTheme
  const layout = defaultLayout         // или minimalLayout, sidebarLeftLayout

  return <CheatSheet config={config} theme={theme} layout={layout} />
}
```

---

## 6️⃣ РАСШИРЕНИЕ — Кастомные preview

Для сложных preview вместо строки HTML можно использовать React компоненты:

```typescript
// config/cheatsheet.ts

import { GridItem } from '@/components/previews'

export const cssGridCheatsheet: CheatSheetConfig = {
  sections: [
    {
      id: "display",
      examples: [
        {
          id: "display-grid",
          title: "display: grid",
          // Функция-рендерер вместо строки
          previewRender: () => (
            <div className="grid grid-cols-3 gap-1">
              {[1,2,3].map(n => <GridItem key={n}>{n}</GridItem>)}
            </div>
          ),
          code: `.container { display: grid; }`
        }
      ]
    }
  ]
}
```

---

## 📊 ИТОГОВАЯ ТАБЛИЦА КОМБИНАЦИЙ

| Параметр | Варианты |
|----------|----------|
| **Config** | CSS Grid, Flexbox, JS Array, React Hooks, ... |
| **Theme** | Industrial, Colorful, Dark, Retro, Custom |
| **Layout** | Default, Minimal, Sidebar Left, Wide |

**Комбинаций:** N configs × M themes × K layouts

---

## 🎨 ПРИМЕР: Мгновенная смена темы

```tsx
// page.tsx с переключателем тем

'use client'

import { useState } from 'react'
import { CheatSheet } from '@/components/CheatSheet'
import { cssGridCheatsheet } from '@/config/cheatsheet'
import { themes } from '@/config/theme'
import { layouts } from '@/config/layout'

export default function Home() {
  const [theme, setTheme] = useState('industrial')
  const [layout, setLayout] = useState('default')

  return (
    <>
      {/* Панель настроек */}
      <div className="fixed top-2 right-2 z-50 flex gap-2">
        <select onChange={e => setTheme(e.target.value)}>
          {Object.keys(themes).map(t => (
            <option key={t} value={t}>{themes[t].name}</option>
          ))}
        </select>
        <select onChange={e => setLayout(e.target.value)}>
          {Object.keys(layouts).map(l => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      <CheatSheet 
        config={cssGridCheatsheet} 
        theme={themes[theme]} 
        layout={layouts[layout]} 
      />
    </>
  )
}
```

---

## ✅ ПРЕИМУЩЕСТВА

| Аспект | Было | Стало |
|--------|------|-------|
| Смена темы | Править CSS вручную | `theme={darkTheme}` |
| Смена контента | Переписывать JSX | `config={flexboxCheatsheet}` |
| Смена layout | Редактировать компоненты | `layout={minimalLayout}` |
| Добавить пример | Вписывать в JSX | Добавить в config JSON |
| Переиспользование | Копипаст | Import + Config |
