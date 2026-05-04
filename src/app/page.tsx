'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'

// ============== SIMPLE TOOLTIP ==============
function SimpleTooltip({ children, content, side = 'top' }: { children: React.ReactNode; content: string; side?: 'top' | 'bottom' | 'left' | 'right' }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} className="bg-neutral-800 text-white text-[10px] px-2 py-1 font-mono">
        {content}
      </TooltipContent>
    </Tooltip>
  )
}

// ============== TECH MARKER ==============
function TechMarker({ number, size }: { number: string; size?: string }) {
  return (
    <SimpleTooltip content={`Секция ${number}`} side="left">
      <div className="flex items-center gap-1 font-mono text-[9px] text-neutral-400 cursor-help">
        <div className="w-2 h-2 border border-neutral-400 rounded-full flex items-center justify-center">
          <div className="w-0.5 h-0.5 bg-neutral-400 rounded-full"></div>
        </div>
        <span className="tracking-wider">{number}</span>
        {size && <span className="text-neutral-300 ml-0.5">[{size}]</span>}
      </div>
    </SimpleTooltip>
  )
}

// ============== DASHED DIVIDER ==============
function DashedDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 py-2">
      <div className="flex-1 border-t border-dashed border-neutral-300"></div>
      {label && <span className="text-[9px] text-neutral-400 font-mono uppercase tracking-widest">{label}</span>}
      {label && <div className="flex-1 border-t border-dashed border-neutral-300"></div>}
      {!label && <div className="flex-1 border-t border-dashed border-neutral-300"></div>}
    </div>
  )
}

// ============== GRID ITEM ==============
function GridItem({ 
  children, 
  className = "",
  dark = false 
}: { 
  children: React.ReactNode
  className?: string 
  dark?: boolean 
}) {
  return (
    <div className={`${dark ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-700 border border-neutral-300'} 
                    text-xs font-mono flex items-center justify-center p-2 rounded ${className}`}>
      {children}
    </div>
  )
}

// ============== SECTION TITLE ==============
function SectionTitle({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {number && (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 border-2 border-neutral-800 flex items-center justify-center bg-white">
            <span className="text-[9px] text-neutral-800 font-mono font-bold">{number}</span>
          </div>
          <div className="w-10 border-t border-dashed border-neutral-400"></div>
        </div>
      )}
      <div className="text-sm font-bold text-neutral-900 tracking-tight font-mono uppercase">
        {children}
      </div>
      <div className="flex-1 border-t border-dashed border-neutral-300"></div>
      {number && (
        <TechMarker number={`§${number}`} />
      )}
    </div>
  )
}

// ============== PATTERN CARD ==============
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
            {badge && (
              <SimpleTooltip content={`Категория: ${badge}`}>
                <span className="text-[10px] px-1.5 py-0.5 bg-neutral-200 text-neutral-600 rounded font-mono uppercase font-medium cursor-help">{badge}</span>
              </SimpleTooltip>
            )}
          </div>
          <TabsList className="h-auto p-0 bg-transparent gap-0.5">
            <SimpleTooltip content="Показать визуальный пример">
              <TabsTrigger 
                value="preview" 
                className="text-[10px] px-2.5 py-1 h-auto data-[state=active]:bg-neutral-800 data-[state=active]:text-white border border-neutral-300 rounded text-neutral-600 font-medium"
              >
                Preview
              </TabsTrigger>
            </SimpleTooltip>
            <SimpleTooltip content="Показать CSS код">
              <TabsTrigger 
                value="code" 
                className="text-[10px] px-2.5 py-1 h-auto data-[state=active]:bg-neutral-800 data-[state=active]:text-white border border-neutral-300 rounded text-neutral-600 font-medium"
              >
                Code
              </TabsTrigger>
            </SimpleTooltip>
          </TabsList>
        </div>
        <TabsContent value="preview" className="p-5 m-0 bg-white min-h-[80px] flex items-center justify-center">
          {preview}
        </TabsContent>
        <TabsContent value="code" className="p-0 m-0">
          <pre className="text-xs text-neutral-800 font-mono bg-neutral-50 p-4 overflow-x-auto leading-relaxed border-t border-neutral-200">
            <code>{code}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// ============== PATTERN CARD TALL ==============
function PatternCardTall({
  title,
  badge,
  preview,
  code
}: {
  title: string
  badge?: string
  preview: React.ReactNode
  code: string
}) {
  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
      <Tabs defaultValue="preview">
        <div className="flex items-center justify-between border-b border-neutral-200 px-3 py-2 bg-neutral-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-800 font-semibold">{title}</span>
            {badge && <span className="text-[10px] px-1.5 py-0.5 bg-neutral-200 text-neutral-600 rounded font-mono uppercase font-medium">{badge}</span>}
          </div>
          <TabsList className="h-auto p-0 bg-transparent gap-0.5">
            <TabsTrigger 
              value="preview" 
              className="text-[10px] px-2.5 py-1 h-auto data-[state=active]:bg-neutral-800 data-[state=active]:text-white border border-neutral-300 rounded text-neutral-600 font-medium"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger 
              value="code" 
              className="text-[10px] px-2.5 py-1 h-auto data-[state=active]:bg-neutral-800 data-[state=active]:text-white border border-neutral-300 rounded text-neutral-600 font-medium"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="p-5 m-0 bg-white min-h-[110px] flex items-center justify-center">
          {preview}
        </TabsContent>
        <TabsContent value="code" className="p-0 m-0">
          <pre className="text-xs text-neutral-800 font-mono bg-neutral-50 p-4 overflow-x-auto leading-relaxed border-t border-neutral-200">
            <code>{code}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// ============== NAVIGATION ==============
const sectionsTop = [
  { id: 'display', label: 'Display' },
  { id: 'grids', label: 'Гриды' },
  { id: 'units', label: 'Единицы' },
]

const sectionsBottom = [
  { id: 'gap', label: 'Gap' },
  { id: 'placement', label: 'Размещение' },
  { id: 'areas', label: 'Areas' },
  { id: 'alignment', label: 'Выравнивание' },
  { id: 'flow', label: 'Auto Flow' },
  { id: 'practical', label: 'Практика' },
  { id: 'order', label: 'Order' },
  { id: 'bento', label: 'Bento Grid' },
  { id: 'advanced', label: 'Продвинутые' },
  { id: 'cheatsheet', label: 'Шпаргалка' },
]

// ============== MAIN COMPONENT ==============
export default function Home() {
  return (
    <Tabs defaultValue="display" className="min-h-screen bg-white flex flex-col font-mono">
      {/* Header */}
      <header className="border-b border-neutral-200 shrink-0 bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-neutral-900">CSS Grid</h1>
                <p className="text-xs text-neutral-500 uppercase tracking-wide mt-0.5">Интерактивная шпаргалка · 88 примеров</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[10px] text-neutral-500">
              <span className="px-2 py-1 border border-neutral-200 rounded font-medium">Next.js 16</span>
              <span className="px-2 py-1 border border-neutral-200 rounded font-medium">TypeScript</span>
              <span className="px-2 py-1 border border-neutral-200 rounded font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex">
        {/* Content Area */}
        <div className="flex-1 container mx-auto px-4 lg:px-6 py-6 overflow-auto">
          
          {/* TAB: DISPLAY */}
          <TabsContent value="display" className="mt-0 space-y-6">
            <SectionTitle number="01">Display: grid vs inline-grid</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PatternCard 
                title="display: grid"
                badge="Блочный"
                description="Создаёт блочный контейнер, занимающий всю ширину родительского элемента."
                preview={
                  <div className="w-full grid grid-cols-3 gap-1">
                    {[1,2,3].map(n => <GridItem key={n}>{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
}`}
              />
              <PatternCard 
                title="display: inline-grid"
                badge="Строчный"
                description="Создаёт строчный контейнер, занимающий только ширину содержимого."
                preview={
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-neutral-400">текст</span>
                    <div className="inline-grid grid-cols-2 gap-1">
                      {['A','B','C','D'].map(n => <GridItem key={n}>{n}</GridItem>)}
                    </div>
                    <span className="text-[10px] text-neutral-400">текст</span>
                  </div>
                }
                code={`.container {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
}`}
              />
            </div>
          </TabsContent>

          {/* TAB: GRIDS */}
          <TabsContent value="grids" className="mt-0 space-y-6">
            <SectionTitle number="02">Явные и неявные гриды</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PatternCard 
                title="Явный грид (Explicit)"
                badge="Явный"
                description="Строки и колонки явно задаются через grid-template-*."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateColumns: 'repeat(3, 60px)', gridTemplateRows: 'repeat(2, 30px)' }}>
                    {['1','2','3','4','5','6'].map(n => <GridItem key={n}>{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 50px 50px;
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="Неявный грид (Implicit)"
                badge="Неявный"
                description="Создаётся автоматически, когда элементов больше, чем определено ячеек."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateColumns: 'repeat(2, 60px)', gridAutoRows: '30px' }}>
                    {['1','2','3','4','5','6'].map(n => <GridItem key={n} dark={Number(n) > 4}>{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 100px 100px;
  grid-auto-rows: 50px;  /* Высота авто-строк */
  gap: 1rem;
}`}
              />
            </div>
          </TabsContent>

          {/* TAB: UNITS */}
          <TabsContent value="units" className="mt-0 space-y-6">
            <SectionTitle number="03">Единицы измерения в Grid</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PatternCard 
                title="fr (fraction) — гибкая единица"
                description="Распределяет доступное пространство пропорционально. 1fr = одна доля."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateColumns: '1fr 2fr 1fr' }}>
                    {['1fr','2fr','1fr'].map((t, i) => <GridItem key={i} dark={i === 1}>{t}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  /* Средняя колонка в 2 раза шире */
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="minmax(min, max)"
                description="Задаёт диапазон размера. Элемент сжимается до min и расширяется до max."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateColumns: 'minmax(40px, 1fr) minmax(50px, 2fr)' }}>
                    {['min→1fr','min→2fr'].map((t, i) => <GridItem key={i}>{t}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 
    minmax(100px, 1fr) minmax(150px, 2fr);
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="repeat() — повторение"
                description="Функция repeat() упрощает создание повторяющихся паттернов."
                preview={
                  <div className="w-full grid grid-cols-4 gap-1">
                    {[1,2,3,4].map(n => <GridItem key={n}>{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="auto-fill и auto-fit"
                description="auto-fill заполняет строку колонками, auto-fit расширяет существующие."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(40px, 1fr))' }}>
                    {[1,2,3,4,5].map(n => <GridItem key={n}>{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(80px, 1fr));
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="calc() — вычисления"
                description="Комбинирует единицы измерения для точных расчётов."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateColumns: '100px calc(50% - 50px) 1fr' }}>
                    {['100px','calc(50%-50px)','1fr'].map((t, i) => <GridItem key={i} dark={i === 1}>{t}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 
    100px calc(50% - 50px) 1fr;
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="fit-content() — ограничение"
                description="Ограничивает размер до указанного максимума."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateColumns: 'fit-content(100px) 1fr' }}>
                    <div className="bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded p-1">fit-content</div>
                    <GridItem>1fr</GridItem>
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 
    fit-content(200px) 1fr;
  gap: 1rem;
}`}
              />
            </div>
          </TabsContent>

          {/* TAB: GAP */}
          <TabsContent value="gap" className="mt-0 space-y-6">
            <SectionTitle number="04">Gap — управление отступами</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PatternCard 
                title="gap (row + column)"
                description="Единый отступ между строками и колонками."
                preview={
                  <div className="w-full grid grid-cols-3 gap-3">
                    {[1,2,3,4,5,6].map(n => <GridItem key={n}>{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}`}
              />
              <PatternCard 
                title="row-gap"
                description="Отступ только между строками."
                preview={
                  <div className="w-full grid grid-cols-3 gap-x-1 gap-y-4">
                    {[1,2,3,4,5,6].map(n => <GridItem key={n}>{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2rem;
  column-gap: 0.5rem;
}`}
              />
              <PatternCard 
                title="column-gap"
                description="Отступ только между колонками."
                preview={
                  <div className="w-full grid grid-cols-3 gap-x-4 gap-y-1">
                    {[1,2,3,4,5,6].map(n => <GridItem key={n}>{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 0.5rem;
  column-gap: 3rem;
}`}
              />
            </div>
          </TabsContent>

          {/* TAB: PLACEMENT */}
          <TabsContent value="placement" className="mt-0 space-y-6">
            <SectionTitle number="05">Размещение элементов (grid-column, grid-row)</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PatternCardTall 
                title="grid-column: span"
                description="Элемент занимает несколько колонок."
                preview={
                  <div className="w-full grid grid-cols-3 gap-1">
                    <div className="col-span-2 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">span 2</div>
                    <GridItem>2</GridItem>
                    <GridItem>3</GridItem>
                    <GridItem>4</GridItem>
                  </div>
                }
                code={`.wide-item {
  grid-column: span 2;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`}
              />
              <PatternCardTall 
                title="grid-row: span"
                description="Элемент занимает несколько строк."
                preview={
                  <div className="w-full grid grid-cols-3 gap-1">
                    <div className="row-span-2 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">span 2</div>
                    <GridItem>2</GridItem>
                    <GridItem>3</GridItem>
                    <GridItem>4</GridItem>
                    <GridItem>5</GridItem>
                  </div>
                }
                code={`.tall-item {
  grid-row: span 2;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`}
              />
              <PatternCardTall 
                title="Точное позиционирование"
                description="Задаём начальную и конечную линии."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
                    <div className="col-span-3 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded py-2">1 / 4 (вся ширина)</div>
                    <GridItem>2</GridItem>
                    <GridItem>3</GridItem>
                    <GridItem>4</GridItem>
                  </div>
                }
                code={`.header { grid-column: 1 / 4; }
.sidebar { grid-row: 2 / 4; }
.main { grid-column: 2 / 4; }
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: auto 1fr 1fr;
}`}
              />
              <PatternCardTall 
                title="Masonry-подобная раскладка"
                description="Комбинируя span разной величины."
                preview={
                  <div className="w-full grid grid-cols-4 gap-1" style={{ gridAutoRows: '28px' }}>
                    <div className="col-span-2 row-span-2 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">2×2</div>
                    <GridItem>2</GridItem>
                    <GridItem>3</GridItem>
                    <GridItem>4</GridItem>
                    <GridItem>5</GridItem>
                    <div className="col-span-2 bg-neutral-200 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">span 2</div>
                  </div>
                }
                code={`.big { 
  grid-column: span 2; 
  grid-row: span 2; 
}
.wide { grid-column: span 2; }
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 60px;
}`}
              />
              <PatternCardTall 
                title="Отрицательные индексы"
                description="Отрицательные числа отсчитываются с конца сетки."
                preview={
                  <div className="w-full grid grid-cols-4 gap-1" style={{ gridAutoRows: '28px' }}>
                    <div className="col-span-4 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">1 / -1 (вся ширина)</div>
                    <div className="col-span-2 bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded">1 / 3</div>
                    <div className="col-span-2 bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">3 / -1</div>
                  </div>
                }
                code={`.full-width { grid-column: 1 / -1; } /* вся ширина */
.left-half { grid-column: 1 / 3; }
.right-half { grid-column: 3 / -1; } /* 3 до конца */
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}`}
              />
              <PatternCardTall 
                title="Именованные линии"
                description="Линии можно именовать для удобства позиционирования."
                preview={
                  <div className="w-full grid gap-1" style={{ 
                    gridTemplateColumns: '[start] 1fr [middle] 1fr [end]',
                    gridTemplateRows: '[top] 1fr [bottom]'
                  }}>
                    <div className="bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded" style={{ gridColumn: 'start / middle' }}>start→middle</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300" style={{ gridColumn: 'middle / end' }}>middle→end</div>
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 
    [start] 1fr [middle] 1fr [end];
  grid-template-rows: [top] 1fr [bottom];
}
.item1 { grid-column: start / middle; }
.item2 { grid-column: middle / end; }`}
              />
            </div>
          </TabsContent>

          {/* TAB: AREAS */}
          <TabsContent value="areas" className="mt-0 space-y-6">
            <SectionTitle number="06">Grid Areas — именованные области</SectionTitle>
            <PatternCardTall 
              title="grid-template-areas"
              description="Визуальный способ определения структуры сетки с помощью именованных областей."
              preview={
                <div className="grid gap-1 h-44 w-full" style={{
                  gridTemplateAreas: '"header header header" "sidebar main main" "sidebar footer footer"',
                  gridTemplateColumns: '50px 1fr 1fr',
                  gridTemplateRows: '36px 1fr 36px'
                }}>
                  <div className="bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'header' }}>header</div>
                  <div className="bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'sidebar' }}>sidebar</div>
                  <div className="bg-neutral-100 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-200" style={{ gridArea: 'main' }}>main</div>
                  <div className="bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'footer' }}>footer</div>
                </div>
              }
              code={`.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "sidebar footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <PatternCardTall 
                title="Пустые ячейки (точка)"
                badge="Пусто"
                description="Точка . создаёт пустую ячейку в grid-template-areas."
                preview={
                  <div className="grid gap-1 h-32 w-full" style={{
                    gridTemplateAreas: '"header header header" "sidebar . main" "sidebar . main" "footer footer footer"',
                    gridTemplateColumns: '40px 1fr 1fr',
                    gridTemplateRows: '24px 1fr 1fr 24px'
                  }}>
                    <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'header' }}>header</div>
                    <div className="bg-neutral-300 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'sidebar' }}>nav</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300" style={{ gridArea: 'main' }}>main</div>
                    <div className="bg-neutral-100 text-neutral-400 text-[9px] font-mono flex items-center justify-center rounded border border-dashed border-neutral-300" style={{ gridArea: '2 / 2 / 4 / 3' }}>. (empty)</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'footer' }}>footer</div>
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar .    main"
    "sidebar .    main"
    "footer footer footer";
  /* Точка = пустая ячейка */
  grid-template-columns: 200px 1fr 1fr;
  gap: 1rem;
}`}
              />
              <PatternCardTall 
                title="grid-template shorthand"
                badge="Сокращение"
                description="Компактная запись строк, колонок и areas в одном свойстве."
                preview={
                  <div className="grid gap-1 h-32 w-full" style={{
                    gridTemplate: '"header header" 40px "nav main" 1fr "footer footer" 28px / 50px 1fr'
                  }}>
                    <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'header' }}>header (40px)</div>
                    <div className="bg-neutral-300 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'nav' }}>nav</div>
                    <div className="bg-neutral-100 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-200" style={{ gridArea: 'main' }}>main (1fr)</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'footer' }}>footer (28px)</div>
                  </div>
                }
                code={`/* Синтаксис: 
   grid-template:
     "area-name" row-size
     / col-sizes;
*/
.container {
  display: grid;
  grid-template:
    "header header" 60px
    "nav    main"   1fr
    "footer footer" auto
    / 200px 1fr;
  gap: 1rem;
}`}
              />
            </div>
          </TabsContent>

          {/* TAB: ALIGNMENT */}
          <TabsContent value="alignment" className="mt-0 space-y-6">
            <SectionTitle number="07">Выравнивание в Grid</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PatternCard 
                title="justify-items (горизонтально)"
                description="Выравнивает элементы внутри ячеек по горизонтали."
                preview={
                  <div className="w-full grid grid-cols-3 justify-items-center gap-1">
                    {[1,2,3].map(n => <div key={n} className="w-8 h-6 bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">⟷</div>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center; /* start | center | end | stretch */
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="align-items (вертикально)"
                description="Выравнивает элементы внутри ячеек по вертикали."
                preview={
                  <div className="w-full grid grid-cols-3 items-center gap-1 h-16">
                    {[1,2,3].map(n => <div key={n} className="h-5 bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">↕</div>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  align-items: center; /* start | center | end | stretch */
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="justify-content (весь грид)"
                description="Выравнивает всю сетку внутри контейнера."
                preview={
                  <div className="w-full flex justify-center gap-1">
                    {[1,2,3].map(n => <GridItem key={n} className="!w-10">{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 80px 80px 80px;
  justify-content: center;
  /* start | center | end | space-between | space-around | space-evenly */
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="place-items (сокращение)"
                description="Сокращение для align-items и justify-items."
                preview={
                  <div className="w-full h-16 grid grid-cols-3 place-items-center gap-1">
                    {[1,2,3].map(n => <div key={n} className="w-8 h-5 bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">•</div>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px 80px;
  place-items: center;
  /* align-items + justify-items */
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="place-content (весь грид)"
                description="Сокращение для align-content и justify-content."
                preview={
                  <div className="w-full h-20 grid gap-1 place-content-center" style={{ gridTemplateColumns: 'repeat(3, 50px)' }}>
                    {[1,2,3].map(n => <GridItem key={n} className="!w-12">{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 60px);
  place-content: center;
  /* align-content + justify-content */
  /* start | center | end | space-between | space-around | space-evenly */
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="justify-self (индивидуально)"
                description="Выравнивание отдельного элемента по горизонтали."
                preview={
                  <div className="w-full grid grid-cols-3 gap-1 h-12">
                    <div className="justify-self-start w-10 h-6 bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">start</div>
                    <div className="justify-self-center w-10 h-6 bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded">center</div>
                    <div className="justify-self-end w-10 h-6 bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">end</div>
                  </div>
                }
                code={`.item-start { justify-self: start; }
.item-center { justify-self: center; }
.item-end { justify-self: end; }
.item-stretch { justify-self: stretch; }`}
              />
              <PatternCard 
                title="align-self (индивидуально)"
                description="Выравнивание отдельного элемента по вертикали."
                preview={
                  <div className="w-full grid grid-cols-3 gap-1 h-16">
                    <div className="self-start h-6 bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">start</div>
                    <div className="self-center h-6 bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded">center</div>
                    <div className="self-end h-6 bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">end</div>
                  </div>
                }
                code={`.item-start { align-self: start; }
.item-center { align-self: center; }
.item-end { align-self: end; }
.item-stretch { align-self: stretch; }
/* place-self = align-self + justify-self */`}
              />
              <PatternCard 
                title="align-content (весь грид)"
                description="Выравнивает весь грид внутри контейнера по вертикали."
                preview={
                  <div className="w-full h-24 grid gap-1 align-content-start" style={{ gridTemplateColumns: 'repeat(3, 40px)', gridTemplateRows: 'repeat(2, 20px)' }}>
                    {[1,2,3,4,5,6].map(n => <GridItem key={n} className="!w-10 !h-5">{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 60px);
  align-content: start; /* start | center | end | space-between | space-around | space-evenly */
  height: 300px; /* фиксированная высота */
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="justify-content (весь грид)"
                description="Выравнивает весь грид внутри контейнера по горизонтали."
                preview={
                  <div className="w-full h-16 grid gap-1 justify-content-center" style={{ gridTemplateColumns: 'repeat(3, 40px)', gridTemplateRows: 'repeat(2, 20px)' }}>
                    {[1,2,3,4,5,6].map(n => <GridItem key={n} className="!w-10 !h-5">{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 60px);
  justify-content: center; /* start | center | end | space-between | space-around | space-evenly */
  width: 400px; /* фиксированная ширина */
  gap: 1rem;
}`}
              />
            </div>
          </TabsContent>

          {/* TAB: FLOW */}
          <TabsContent value="flow" className="mt-0 space-y-6">
            <SectionTitle number="08">Grid Auto Flow — порядок размещения</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PatternCard 
                title="row (по умолчанию)"
                description="Элементы заполняют строки слева направо."
                preview={
                  <div className="w-full grid grid-cols-3 gap-1">
                    {[1,2,3,4,5,6].map(n => <GridItem key={n}>{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="column"
                description="Элементы заполняют колонки сверху вниз."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateRows: 'repeat(2, 1fr)', gridAutoFlow: 'column', gridAutoColumns: '1fr' }}>
                    {[1,2,3,4,5,6].map(n => <GridItem key={n}>{n}</GridItem>)}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 1rem;
}`}
              />
              <PatternCard 
                title="dense"
                description="Пытается заполнить пустые ячейки."
                preview={
                  <div className="w-full grid grid-cols-3 gap-1" style={{ gridAutoFlow: 'dense' }}>
                    <div className="col-span-2 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">span 2</div>
                    <GridItem>2</GridItem>
                    <GridItem>3</GridItem>
                    <GridItem>4</GridItem>
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  gap: 1rem;
}
.big { grid-column: span 2; }`}
              />
            </div>
          </TabsContent>

          {/* TAB: PRACTICAL */}
          <TabsContent value="practical" className="mt-0 space-y-6">
            <SectionTitle number="09">Практические примеры</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PatternCardTall 
                title="Адаптивная галерея"
                description="Автоматически подстраивается под ширину экрана."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(45px, 1fr))' }}>
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n} className="aspect-square bg-neutral-200 rounded flex items-center justify-center text-[10px] text-neutral-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                }
                code={`.gallery {
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}
.gallery img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}`}
              />
              <PatternCardTall 
                title="Святая троица (Holy Grail)"
                description="Классический макет с шапкой, подвалом, боковой панелью."
                preview={
                  <div className="grid gap-1 h-40 w-full" style={{
                    gridTemplateAreas: '"header header" "nav main" "footer footer"',
                    gridTemplateColumns: '40px 1fr',
                    gridTemplateRows: '28px 1fr 28px'
                  }}>
                    <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'header' }}>header</div>
                    <div className="bg-neutral-300 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'nav' }}>nav</div>
                    <div className="bg-neutral-100 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-200" style={{ gridArea: 'main' }}>main</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'footer' }}>footer</div>
                  </div>
                }
                code={`.layout {
  display: grid;
  grid-template:
    "header header" auto
    "nav main" 1fr
    "footer footer" auto
    / 200px 1fr;
  min-height: 100vh;
  gap: 1rem;
}`}
              />
              <PatternCardTall 
                title="Карточки товаров"
                description="Три колонки на десктопе, две на планшете."
                preview={
                  <div className="w-full grid grid-cols-3 gap-1">
                    {[1,2,3,4,5,6].map(n => (
                      <div key={n} className="bg-neutral-100 border border-neutral-200 rounded p-2">
                        <div className="h-8 bg-neutral-200 rounded mb-1"></div>
                        <div className="h-1.5 bg-neutral-300 rounded w-2/3"></div>
                      </div>
                    ))}
                  </div>
                }
                code={`.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .products { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .products { grid-template-columns: 1fr; }
}`}
              />
              <PatternCardTall 
                title="Dashboard виджеты"
                description="Сложная раскладка дашборда с виджетами."
                preview={
                  <div className="w-full grid grid-cols-2 gap-1" style={{ gridTemplateRows: 'auto 1fr 1fr' }}>
                    <div className="col-span-2 bg-neutral-300 text-neutral-700 text-[9px] font-mono flex items-center justify-center rounded py-1">stats</div>
                    <div className="row-span-2 bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded">chart</div>
                    <div className="bg-neutral-100 border border-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded">card</div>
                    <div className="bg-neutral-100 border border-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded">card</div>
                  </div>
                }
                code={`.dashboard {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr 1fr;
  gap: 1.5rem;
}
.stats { grid-column: 1 / -1; }
.chart { grid-row: span 2; }`}
              />
              <PatternCardTall 
                title="Форма регистрации"
                description="Двухколоночная форма с лейблами и полями ввода."
                preview={
                  <div className="w-full grid grid-cols-2 gap-2 p-2 bg-neutral-50 rounded">
                    <div className="text-[9px] text-neutral-600 font-mono">Name:</div>
                    <div className="bg-white border border-neutral-300 rounded px-1 text-[9px] text-neutral-400">input</div>
                    <div className="text-[9px] text-neutral-600 font-mono">Email:</div>
                    <div className="bg-white border border-neutral-300 rounded px-1 text-[9px] text-neutral-400">input</div>
                    <div className="col-span-2 bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded py-1">Submit</div>
                  </div>
                }
                code={`.form {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 1rem;
  align-items: center;
}
.label { justify-self: end; }
.input { width: 100%; }
.button { 
  grid-column: 1 / -1;
  justify-self: center;
}`}
              />
              <PatternCardTall 
                title="Навигационное меню"
                description="Горизонтальная навигация с логотипом и меню."
                preview={
                  <div className="w-full grid gap-1" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
                    <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded px-2">Logo</div>
                    <div className="grid grid-cols-4 gap-1">
                      {['Home','About','Work','Contact'].map(item => (
                        <div key={item} className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded">{item}</div>
                      ))}
                    </div>
                    <div className="bg-neutral-300 text-neutral-700 text-[9px] font-mono flex items-center justify-center rounded px-2">Menu</div>
                  </div>
                }
                code={`.nav {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
}
.menu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 0.5rem;
}`}
              />
              <PatternCardTall 
                title="Модальное окно"
                description="Центрированное модальное окно с overlay."
                preview={
                  <div className="w-full h-24 bg-neutral-100 relative rounded">
                    <div className="absolute inset-0 bg-neutral-800/50 rounded"></div>
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="bg-white border border-neutral-300 rounded p-3 w-32">
                        <div className="text-[9px] text-neutral-800 font-mono mb-2">Modal Title</div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded py-0.5">Cancel</div>
                          <div className="bg-neutral-800 text-white text-[8px] font-mono flex items-center justify-center rounded py-0.5">OK</div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
                code={`.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: grid;
  place-items: center;
}
.modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  display: grid;
  gap: 1rem;
}
.modal-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}`}
              />
              
              {/* Print styles для Grid */}
              <PatternCardTall 
                title="Print styles для Grid"
                badge="Печать"
                description="Оптимизация grid для печати."
                preview={
                  <div className="w-full h-28 bg-neutral-50 p-2 rounded border-2 border-dashed border-neutral-300">
                    <div className="grid gap-1 h-full" style={{ 
                      gridTemplateColumns: '1fr 1fr 1fr',
                      gridTemplateRows: 'auto 1fr auto'
                    }}>
                      <div className="bg-neutral-800 text-white text-[8px] font-mono flex items-center justify-center rounded col-span-3">Header</div>
                      <div className="bg-neutral-300 text-neutral-700 text-[8px] font-mono flex items-center justify-center rounded">Sidebar</div>
                      <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300 col-span-2">Content</div>
                      <div className="bg-neutral-100 text-neutral-500 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-200 col-span-3">Footer</div>
                    </div>
                  </div>
                }
                code={`/* Стили для печати */
@media print {
  .grid {
    display: block !important;
    /* или grid, но с явными размерами */
  }
  .grid-item {
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: 1rem;
  }
}
/* Для многостраничных grid */
.grid-print {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
@media print {
  .grid-print {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
/* break-before, break-after, break-inside */`}
              />
              
              {/* Grid в темной теме */}
              <PatternCardTall 
                title="Grid в темной теме"
                badge="Тема"
                description="Адаптация grid для темной темы."
                preview={
                  <div className="w-full h-28 bg-neutral-900 p-2 rounded">
                    <div className="grid gap-1 h-full" style={{ 
                      gridTemplateColumns: '1fr 1fr 1fr'
                    }}>
                      <div className="bg-neutral-700 text-neutral-200 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-600">Dark 1</div>
                      <div className="bg-neutral-600 text-neutral-300 text-[9px] font-mono flex items-center justify-center rounded">Dark 2</div>
                      <div className="bg-neutral-500 text-neutral-400 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-400">Dark 3</div>
                    </div>
                  </div>
                }
                code={`/* Темная тема */
@media (prefers-color-scheme: dark) {
  .grid {
    --bg-color: #1f2937;
    --text-color: #f9fafb;
    --border-color: #374151;
  }
}
/* Или с классом */
.dark .grid {
  background: #111827;
  color: #f9fafb;
}
.dark .grid-item {
  background: #1f2937;
  border-color: #374151;
}
/* CSS custom properties для тем */
:root {
  --grid-bg: #ffffff;
  --grid-text: #111827;
}
.dark {
  --grid-bg: #111827;
  --grid-text: #f9fafb;
}
.grid { background: var(--grid-bg); color: var(--grid-text); }`}
              />
              
              {/* Доступность в Grid */}
              <PatternCardTall 
                title="Доступность в Grid"
                badge="A11y"
                description="Grid с учетом доступности."
                preview={
                  <div className="w-full h-28 bg-neutral-50 p-2 rounded">
                    <div className="grid gap-1 h-full" style={{ 
                      gridTemplateColumns: '1fr 1fr 1fr',
                      gridTemplateAreas: '"header header header" "nav main aside" "footer footer footer"'
                    }}>
                      <header className="bg-neutral-800 text-white text-[8px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'header' }}>Header</header>
                      <nav className="bg-neutral-300 text-neutral-700 text-[8px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'nav' }}>Nav</nav>
                      <main className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300" style={{ gridArea: 'main' }}>Main</main>
                      <aside className="bg-neutral-100 text-neutral-500 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-200" style={{ gridArea: 'aside' }}>Aside</aside>
                      <footer className="bg-neutral-400 text-neutral-800 text-[8px] font-mono flex items-center justify-center rounded col-span-3" style={{ gridArea: 'footer' }}>Footer</footer>
                    </div>
                  </div>
                }
                code={`/* Семантические элементы */
.grid {
  display: grid;
  grid-template-areas: 
    "header header header"
    "nav main aside"
    "footer footer footer";
}
header { grid-area: header; }
nav { grid-area: nav; }
main { grid-area: main; }
aside { grid-area: aside; }
footer { grid-area: footer; }

/* Фокус и навигация */
.grid-item:focus {
  outline: 2px solid #007acc;
  outline-offset: 2px;
}
/* Порядок DOM vs визуальный порядок */
.sidebar {
  order: -1; /* Визуально первый, но в DOM последний */
}
/* ARIA landmarks уже есть в семантических тегах */`}
              />
              
              {/* Производительность Grid */}
              <PatternCardTall 
                title="Производительность Grid"
                badge="Perf"
                description="Оптимизация производительности grid."
                preview={
                  <div className="w-full h-28 bg-neutral-50 p-2 rounded">
                    <div className="grid gap-1 h-full" style={{ 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                      contain: 'layout style paint'
                    }}>
                      {Array.from({length: 8}, (_, i) => (
                        <div key={i} className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                }
                code={`/* CSS containment для производительности */
.grid {
  contain: layout style paint;
  /* layout: изолирует layout recalc */
  /* style: изолирует style recalc */
  /* paint: изолирует paint */
}
/* Или отдельно */
.grid-item {
  contain: layout;
  /* Предотвращает layout recalc за пределами элемента */
}

/* Избегайте reflow */
.grid {
  /* Стабильные размеры */
  width: 100%;
  height: 400px;
  
  /* Избегайте изменения grid-template-columns часто */
  /* Используйте transform вместо изменения размеров */
}

/* Will-change для анимируемых свойств */
.animated-grid {
  will-change: grid-template-columns;
}
/* После анимации */
.animated-grid:not(:hover) {
  will-change: auto;
}
/* will-change сообщает браузеру о предстоящих изменениях */`}
              />
              
              {/* Grid Level 3 — Masonry */}
              <PatternCardTall 
                title="Grid Level 3 — Masonry"
                badge="Эксперимент"
                description="Кладка (masonry) layout в CSS Grid."
                preview={
                  <div className="w-full h-40 bg-neutral-50 p-2 rounded overflow-hidden">
                    <div className="grid gap-1 h-full" style={{ 
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gridTemplateRows: 'masonry'
                    }}>
                      <div className="bg-neutral-800 text-white text-[8px] font-mono flex items-center justify-center rounded p-4">Tall</div>
                      <div className="bg-neutral-300 text-neutral-700 text-[8px] font-mono flex items-center justify-center rounded p-2">Short</div>
                      <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded p-6 border border-neutral-300">Medium</div>
                      <div className="bg-neutral-100 text-neutral-500 text-[8px] font-mono flex items-center justify-center rounded p-3 border border-neutral-200">Small</div>
                      <div className="bg-neutral-400 text-neutral-800 text-[8px] font-mono flex items-center justify-center rounded p-5">Large</div>
                      <div className="bg-neutral-600 text-neutral-200 text-[8px] font-mono flex items-center justify-center rounded p-1">Tiny</div>
                    </div>
                  </div>
                }
                code={`/* CSS Grid Level 3 — Masonry */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: masonry;
  /* masonry — новая ключевое слово */
}
/* Или для колонок */
.grid-vertical {
  grid-template-columns: masonry;
  grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
}

/* Masonry flow */
.grid-item {
  /* Элементы автоматически распределяются по рядам/колонкам */
  /* Заполняя пробелы как в кладке кирпичей */
}

/* Пока экспериментально, поддержка ограничена */
/* Используйте с осторожностью */`}
              />
              
              {/* CSS Math functions */}
              <PatternCardTall 
                title="CSS Math functions"
                badge="Математика"
                description="Математические функции в grid."
                preview={
                  <div className="w-full h-28 bg-neutral-50 p-2 rounded">
                    <div className="grid gap-1 h-full" style={{ 
                      gridTemplateColumns: 'minmax(100px, 1fr) minmax(150px, 2fr) minmax(80px, 0.5fr)',
                      gap: 'calc(1rem + 0.5vw)'
                    }}>
                      <div className="bg-neutral-800 text-white text-[8px] font-mono flex items-center justify-center rounded">minmax</div>
                      <div className="bg-neutral-300 text-neutral-700 text-[8px] font-mono flex items-center justify-center rounded">calc()</div>
                      <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300">math</div>
                    </div>
                  </div>
                }
                code={`/* CSS Math functions */
.grid {
  /* calc() — вычисления */
  width: calc(100% - 2rem);
  gap: calc(1rem + 0.5vw);
  
  /* minmax() — диапазоны */
  grid-template-columns: 
    minmax(200px, 1fr) 
    minmax(100px, 300px) 
    minmax(50px, 0.5fr);
  
  /* clamp() — ограниченные значения */
  padding: clamp(0.5rem, 2vw, 1.5rem);
  
  /* min() / max() — минимум/максимум */
  font-size: min(2rem, 5vw);
  height: max(200px, 50vh);
  
  /* round() — округление */
  width: round(100px, 50px); /* к ближайшему 50px */
}
/* Новые функции: sin(), cos(), tan(), exp(), etc. (экспериментально) */`}
              />
              
              {/* Grid Inspector Tools */}
              <PatternCardTall 
                title="Grid Inspector Tools"
                badge="Инструменты"
                description="Инструменты разработчика для отладки grid."
                preview={
                  <div className="w-full h-28 bg-neutral-50 p-2 rounded">
                    <div className="grid gap-1 h-full" style={{ 
                      gridTemplateColumns: '1fr 1fr 1fr',
                      gridTemplateRows: 'auto 1fr auto'
                    }}>
                      <div className="bg-neutral-800 text-white text-[8px] font-mono flex items-center justify-center rounded" style={{ gridColumn: '1 / -1' }}>Header</div>
                      <div className="bg-neutral-300 text-neutral-700 text-[8px] font-mono flex items-center justify-center rounded">Nav</div>
                      <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300">Main</div>
                      <div className="bg-neutral-100 text-neutral-500 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-200">Aside</div>
                      <div className="bg-neutral-400 text-neutral-800 text-[8px] font-mono flex items-center justify-center rounded" style={{ gridColumn: '1 / -1' }}>Footer</div>
                    </div>
                  </div>
                }
                code={`/* CSS для отладки Grid */
/* Временные стили для разработки */
.grid {
  /* Визуализация линий сетки */
  background: 
    linear-gradient(to right, #ff0000 1px, transparent 1px),
    linear-gradient(to bottom, #ff0000 1px, transparent 1px);
  background-size: var(--grid-size, 20px) var(--grid-size, 20px);
}

.grid-item {
  /* Нумерация элементов */
  position: relative;
}
.grid-item::before {
  content: counter(grid-item);
  position: absolute;
  top: -1rem;
  left: -1rem;
  background: red;
  color: white;
  padding: 0.2rem 0.4rem;
  font-size: 0.8rem;
  border-radius: 50%;
}
.grid {
  counter-reset: grid-item;
}
.grid-item {
  counter-increment: grid-item;
}

/* Используйте Firefox Grid Inspector или Chrome DevTools */
/* Layout > Grid в DevTools показывает визуальную сетку */`}
              />
            </div>
          </TabsContent>

          {/* TAB: ORDER */}
          <TabsContent value="order" className="mt-0 space-y-6">
            <SectionTitle number="10">Порядок элементов (order)</SectionTitle>
            <PatternCard 
              title="order — изменение визуального порядка"
              description="Свойство order позволяет изменить визуальный порядок элементов без изменения HTML."
              preview={
                <div className="w-full grid grid-cols-4 gap-1">
                  <div className="bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded" style={{ order: 3 }}>1→4</div>
                  <div className="bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded" style={{ order: 1 }}>2→2</div>
                  <div className="bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded" style={{ order: 2 }}>3→3</div>
                  <div className="bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded" style={{ order: 0 }}>4→1</div>
                </div>
              }
              code={`.item-1 { order: 3; }  /* будет последним */
.item-2 { order: 1; }  /* будет первым */
.item-3 { order: 2; }  /* в середине */
.item-4 { order: -1; } /* самым первым */

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}`}
            />
          </TabsContent>

          {/* TAB: BENTO */}
          <TabsContent value="bento" className="mt-0 space-y-6">
            <SectionTitle number="11">Bento Grid и современные макеты</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PatternCardTall 
                title="Bento Grid"
                description="Популярный макет с карточками разного размера."
                preview={
                  <div className="grid grid-cols-4 grid-rows-2 gap-1 h-28 w-full">
                    <div className="col-span-2 row-span-2 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">Hero</div>
                    <div className="bg-neutral-200 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">A</div>
                    <div className="bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded">B</div>
                    <div className="bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded">C</div>
                    <div className="bg-neutral-200 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">D</div>
                  </div>
                }
                code={`.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));
  gap: 1rem;
}
.hero { grid-column: span 2; grid-row: span 2; }
.tall { grid-row: span 2; }
.wide { grid-column: span 2; }`}
              />
              <PatternCardTall 
                title="Apple-style Bento"
                description="Минималистичный Bento Grid в стиле Apple."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: 'minmax(40px, auto)' }}>
                    <div className="col-span-4 row-span-2 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">Hero</div>
                    <div className="col-span-2 row-span-2 bg-neutral-200 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">Side</div>
                  </div>
                }
                code={`.apple-bento {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(80px, auto);
  gap: 1rem;
}
.hero { grid-column: span 4; grid-row: span 2; }
.side { grid-column: span 2; grid-row: span 2; }`}
              />
              <PatternCardTall 
                title="Stats Dashboard Bento"
                description="Дашборд со статистикой и графиком."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 'minmax(28px, auto)' }}>
                    <div className="col-span-3 row-span-2 bg-neutral-200 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">Chart</div>
                    <div className="bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">M1</div>
                    <div className="bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">M2</div>
                    <div className="col-span-4 bg-neutral-100 border border-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">Footer</div>
                  </div>
                }
                code={`.stats-bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
  gap: 1rem;
}
.chart { grid-column: span 3; grid-row: span 2; }
.metric { grid-row: span 1; }`}
              />
              <PatternCardTall 
                title="Profile Card Bento"
                description="Профиль пользователя с аватаром и статистикой."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ gridTemplateColumns: '1fr 2fr', gridTemplateRows: 'auto auto auto' }}>
                    <div className="row-span-2 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">Avatar</div>
                    <div className="bg-neutral-200 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">Name</div>
                    <div className="bg-neutral-100 border border-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">Bio</div>
                    <div className="col-span-2 bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded">Stats</div>
                  </div>
                }
                code={`.profile-bento {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto auto;
  gap: 1rem;
}
.avatar { grid-row: span 2; }
.stats { grid-column: span 2; }`}
              />
              <PatternCardTall 
                title="Feature Grid Bento"
                description="Сетка фич продукта с иконками."
                preview={
                  <div className="grid grid-cols-3 gap-1 h-28 w-full">
                    <div className="col-span-2 row-span-2 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">Main Feature</div>
                    <div className="bg-neutral-200 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">F1</div>
                    <div className="bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded">F2</div>
                    <div className="bg-neutral-300 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded">F3</div>
                    <div className="bg-neutral-200 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">F4</div>
                  </div>
                }
                code={`.feature-bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.feature-main { 
  grid-column: span 2; 
  grid-row: span 2; 
}`}
              />
              <PatternCardTall 
                title="Kanban Board Bento"
                description="Канбан-доска с тремя колонками."
                preview={
                  <div className="grid grid-cols-3 gap-1 h-28 w-full">
                    {['To Do', 'In Progress', 'Done'].map((col, i) => (
                      <div key={col} className="flex flex-col gap-1">
                        <div className={`text-[9px] font-mono flex items-center justify-center py-1 rounded ${i === 0 ? 'bg-neutral-300' : i === 1 ? 'bg-neutral-800 text-white' : 'bg-neutral-200 border border-neutral-300'}`}>{col}</div>
                        <div className="flex-1 bg-neutral-100 border border-neutral-200 rounded p-1 space-y-1">
                          <div className="h-3 bg-neutral-200 rounded"></div>
                          <div className="h-3 bg-neutral-200 rounded w-3/4"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                }
                code={`.kanban-bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.column {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0.5rem;
}`}
              />
              <PatternCardTall 
                title="Weather Widget Bento"
                description="Виджет погоды с текущей температурой."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto auto' }}>
                    <div className="col-span-2 bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded py-3">☀️ 24°C</div>
                    <div className="bg-neutral-200 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">Mon</div>
                    <div className="bg-neutral-200 text-neutral-700 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">Tue</div>
                    <div className="col-span-2 bg-neutral-100 border border-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">Forecast</div>
                  </div>
                }
                code={`.weather-bento {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 1rem;
}
.current { grid-column: span 2; }
.forecast { grid-column: span 2; }`}
              />
              <PatternCardTall 
                title="Login Split Screen"
                description="Экран входа с разделением на зоны."
                preview={
                  <div className="grid grid-cols-2 gap-1 h-28 w-full">
                    <div className="bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">Brand</div>
                    <div className="bg-neutral-100 border border-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded">Form</div>
                  </div>
                }
                code={`.login-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
@media (max-width: 768px) {
  .login-split { grid-template-columns: 1fr; }
  .brand { display: none; }
}`}
              />
              <PatternCardTall 
                title="Card Stack Effect"
                description="Эффект стопки карточек."
                preview={
                  <div className="grid place-items-center h-24 w-full">
                    <div className="w-20 h-12 bg-neutral-200 border border-neutral-300 rounded transform -rotate-3"></div>
                    <div className="w-20 h-12 bg-neutral-300 rounded transform rotate-1 absolute"></div>
                    <div className="w-20 h-12 bg-neutral-800 rounded transform rotate-3 -translate-y-2 absolute"></div>
                  </div>
                }
                code={`.card-stack {
  display: grid;
  place-items: center;
}
.card { grid-area: 1 / 1; }
.card:nth-child(1) { transform: rotate(-3deg); }
.card:nth-child(2) { transform: rotate(1deg); z-index: 1; }
.card:nth-child(3) { transform: rotate(3deg) translateY(-10px); z-index: 2; }`}
              />
            </div>
          </TabsContent>

          {/* TAB: ADVANCED */}
          <TabsContent value="advanced" className="mt-0 space-y-6">
            <SectionTitle number="12">Продвинутые Grid Layouts</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nested Grid */}
              <PatternCardTall 
                title="Nested Grid (Вложенный грид)"
                badge="Вложенность"
                description="Грид внутри элемента грида для сложных макетов."
                preview={
                  <div className="grid grid-cols-2 gap-1 h-28 w-full">
                    <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded">Sidebar</div>
                    <div className="grid grid-cols-2 gap-0.5 p-0.5">
                      {['1','2','3','4'].map(n => (
                        <div key={n} className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300">{n}</div>
                      ))}
                    </div>
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem;
}
.nested {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}`}
              />
              
              {/* Overlap */}
              <PatternCardTall 
                title="Overlap (Наложение элементов)"
                badge="z-index"
                description="Несколько элементов в одной ячейке с наложением."
                preview={
                  <div className="grid h-28 w-full" style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr' }}>
                    <div className="bg-neutral-300 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded" style={{ gridArea: '1 / 1' }}>Base</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300" style={{ gridArea: '1 / 2' }}>Side</div>
                    <div className="bg-neutral-800/90 text-white text-[10px] font-mono flex items-center justify-center rounded z-10" style={{ gridArea: '1 / 1 / 2 / 3', width: '75%', height: '32px', justifySelf: 'center', alignSelf: 'center' }}>Overlay</div>
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.base { grid-area: 1 / 1; }
.side { grid-area: 1 / 2; }
.overlay {
  grid-area: 1 / 1 / 2 / 3; /* вся строка */
  z-index: 10;
  justify-self: center;
  align-self: center;
}`}
              />
              
              {/* Named Lines */}
              <PatternCardTall 
                title="Named Grid Lines"
                badge="Имена"
                description="Именованные линии для удобного позиционирования."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ 
                    gridTemplateColumns: '[start] 1fr [middle] 1fr [end]',
                    gridTemplateRows: '[top] 1fr [bottom]'
                  }}>
                    <div className="bg-neutral-800 text-white text-[10px] font-mono flex items-center justify-center rounded">start→middle</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">middle→end</div>
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: 
    [start] 100px [middle] 1fr [end];
  grid-template-rows: 
    [header] auto [content] 1fr [footer];
}
.item {
  grid-column: start / middle;
  grid-row: header / content;
}`}
              />
              
              {/* Aspect Ratio Grid */}
              <PatternCardTall 
                title="Aspect Ratio Grid"
                badge="Пропорции"
                description="Сетка с сохранением пропорций ячеек."
                preview={
                  <div className="grid grid-cols-3 gap-1 w-full">
                    {[1,2,3,4,5,6].map(n => (
                      <div key={n} className="aspect-square bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">1:1</div>
                    ))}
                  </div>
                }
                code={`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.item {
  aspect-ratio: 1; /* квадрат */
  /* или aspect-ratio: 16/9; */
}`}
              />
              
              {/* Responsive Grid */}
              <PatternCardTall 
                title="Responsive Grid (auto-fill)"
                badge="Адаптив"
                description="Автоматическое количество колонок без медиа-запросов."
                preview={
                  <div className="grid gap-1 w-full" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))' }}>
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <div key={n} className="h-10 bg-neutral-200 text-neutral-600 text-[10px] font-mono flex items-center justify-center rounded border border-neutral-300">{n}</div>
                    ))}
                  </div>
                }
                code={`.responsive-grid {
  display: grid;
  grid-template-columns: 
    repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}
/* Без медиа-запросов! */`}
              />
              
              {/* Subgrid */}
              <PatternCardTall 
                title="Subgrid (синхронизация)"
                badge="CSS Subgrid"
                description="Дочерний грид наследует строки/колонки родителя."
                preview={
                  <div className="grid grid-cols-3 gap-1 h-28 w-full">
                    <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded">Nav</div>
                    <div className="col-span-2 grid grid-rows-2 gap-0.5">
                      <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300">Header</div>
                      <div className="bg-neutral-100 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-200">Content</div>
                    </div>
                  </div>
                }
                code={`.parent {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr;
}
.child {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 2;
}
/* Поддержка: Chrome 117+, Safari 16+ */`}
              />
              
              {/* Magazine Layout */}
              <PatternCardTall 
                title="Magazine Layout"
                badge="Журнал"
                description="Журнальная раскладка с колонками текста."
                preview={
                  <div className="grid grid-cols-3 gap-1 h-28 w-full">
                    <div className="col-span-2 row-span-2 bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded p-1">Главный материал</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300">Статья</div>
                    <div className="bg-neutral-100 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-200">Новости</div>
                    <div className="col-span-2 bg-neutral-300 text-neutral-700 text-[8px] font-mono flex items-center justify-center rounded">Цитата</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300">Реклама</div>
                  </div>
                }
                code={`.magazine {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: repeat(3, auto);
}
.featured { 
  grid-column: span 2;
  grid-row: span 2; 
}`}
              />
              
              {/* Grid Lines Visualization */}
              <PatternCardTall 
                title="Grid Lines (нумерация)"
                badge="Линии"
                description="Визуализация нумерации линий сетки."
                preview={
                  <div className="grid gap-0 h-28 w-full relative" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
                    <div className="bg-neutral-200 border border-neutral-300 text-neutral-600 text-[9px] font-mono flex items-center justify-center">1-2</div>
                    <div className="bg-neutral-300 text-neutral-600 text-[9px] font-mono flex items-center justify-center">2-3</div>
                    <div className="bg-neutral-200 border border-neutral-300 text-neutral-600 text-[9px] font-mono flex items-center justify-center">3-4</div>
                    <div className="bg-neutral-100 border border-neutral-200 text-neutral-500 text-[9px] font-mono flex items-center justify-center">1-2</div>
                    <div className="bg-neutral-200 text-neutral-500 text-[9px] font-mono flex items-center justify-center">2-3</div>
                    <div className="bg-neutral-100 border border-neutral-200 text-neutral-500 text-[9px] font-mono flex items-center justify-center">3-4</div>
                  </div>
                }
                code={`/* Линии нумеруются:
   Колонки: 1 | 2 | 3 | 4
   Строки:  1 | 2 | 3
*/
.item {
  grid-column: 1 / 3; /* от линии 1 до 3 */
  grid-row: 2 / -1;   /* от 2 до последней */
}
/* Отрицательные числа — с конца */`}
              />
              
              {/* Masonry Layout */}
              <PatternCardTall 
                title="Masonry Layout (CSS columns)"
                badge="Masonry"
                description="Кирпичная кладка через CSS columns (настоящий grid masonry в разработке)."
                preview={
                  <div className="columns-3 gap-1 h-28 w-full">
                    <div className="break-inside-avoid bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded p-2 mb-1 h-16">1</div>
                    <div className="break-inside-avoid bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300 p-2 mb-1 h-10">2</div>
                    <div className="break-inside-avoid bg-neutral-300 text-neutral-700 text-[9px] font-mono flex items-center justify-center rounded p-2 mb-1 h-20">3</div>
                    <div className="break-inside-avoid bg-neutral-100 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-200 p-2 mb-1 h-12">4</div>
                    <div className="break-inside-avoid bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300 p-2 mb-1 h-14">5</div>
                    <div className="break-inside-avoid bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded p-2 h-8">6</div>
                  </div>
                }
                code={`.masonry {
  columns: 3 250px; /* кол-во, мин.ширина */
  column-gap: 1rem;
}
.item {
  break-inside: avoid; /* не разрывать */
  margin-bottom: 1rem;
}
/* CSS Grid masonry в разработке! */`}
              />
              
              {/* Full-bleed Layout */}
              <PatternCardTall 
                title="Full-bleed Layout"
                badge="Full-bleed"
                description="Контент выходит за пределы контейнера на всю ширину."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ gridTemplateColumns: '1fr minmax(auto, 100px) 1fr' }}>
                    <div className="col-span-3 bg-neutral-300 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded py-1">full-width header</div>
                    <div className="bg-neutral-100 border border-neutral-200 text-neutral-400 text-[8px] font-mono flex items-center justify-center rounded">margin</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300">content</div>
                    <div className="bg-neutral-100 border border-neutral-200 text-neutral-400 text-[8px] font-mono flex items-center justify-center rounded">margin</div>
                    <div className="col-span-3 bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded py-1">full-width image</div>
                  </div>
                }
                code={`.full-bleed {
  display: grid;
  grid-template-columns: 
    1fr min(65ch, 100%) 1fr;
}
.full-width {
  grid-column: 1 / -1;
}
.content {
  grid-column: 2;
}`}
              />
              
              {/* Sticky Footer */}
              <PatternCardTall 
                title="Sticky Footer"
                badge="Footer"
                description="Подвал всегда прижат к низу, даже при малом контенте."
                preview={
                  <div className="grid h-28 w-full" style={{ gridTemplateRows: 'auto 1fr auto' }}>
                    <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded py-1">Header</div>
                    <div className="bg-neutral-100 border border-neutral-200 text-neutral-500 text-[9px] font-mono flex items-center justify-center rounded my-1">Main content (1fr fills space)</div>
                    <div className="bg-neutral-300 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded">Sticky Footer</div>
                  </div>
                }
                code={`.page {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  /* 1fr занимает всё пространство */
}
/* Альтернатива: 
   body { display: grid; grid-template-rows: auto 1fr auto; min-height: 100vh; } */`}
              />
              
              {/* CSS Variables Grid */}
              <PatternCardTall 
                title="Grid + CSS Variables"
                badge="Динамический"
                description="Изменяем Grid через CSS переменные."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ '--cols': 'repeat(3, 1fr)', '--gap': '0.5rem' } as React.CSSProperties, { gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.25rem' }}>
                    {[1,2,3,4,5,6].map(n => (
                      <div key={n} className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300 py-2">Item {n}</div>
                    ))}
                  </div>
                }
                code={`:root {
  --grid-cols: repeat(3, 1fr);
  --grid-gap: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: var(--grid-cols);
  gap: var(--grid-gap);
}
/* JS: document.documentElement.style.setProperty('--grid-cols', 'repeat(4, 1fr)') */`}
              />
              
              {/* Auto-fit/auto-fill */}
              <PatternCardTall 
                title="Auto-fit / Auto-fill"
                badge="Responsive"
                description="Автоматическое создание колонок с minmax() для адаптивности."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))' }}>
                    {Array.from({length: 8}, (_, i) => (
                      <div key={i} className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300 min-h-[20px]">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
/* auto-fit: скрывает пустые колонки
   auto-fill: сохраняет пустые колонки */`}
              />
              
              {/* Grid Template Areas */}
              <PatternCardTall 
                title="Grid Template Areas"
                badge="ASCII"
                description="Определение областей через ASCII-арт для читаемости."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ 
                    gridTemplateAreas: '"header header" "sidebar main" "footer footer"',
                    gridTemplateColumns: '150px 1fr',
                    gridTemplateRows: 'auto 1fr auto'
                  }}>
                    <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'header' }}>Header</div>
                    <div className="bg-neutral-300 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'sidebar' }}>Sidebar</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300" style={{ gridArea: 'main' }}>Main</div>
                    <div className="bg-neutral-100 text-neutral-500 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-200" style={{ gridArea: 'footer' }}>Footer</div>
                  </div>
                }
                code={`.container {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`}
              />
              
              {/* Holy Grail Layout */}
              <PatternCardTall 
                title="Holy Grail Layout"
                badge="Классика"
                description="Классический макет: header, 3 колонки, footer."
                preview={
                  <div className="grid gap-1 h-32 w-full" style={{ 
                    gridTemplateAreas: '"header header header" "left main right" "footer footer footer"',
                    gridTemplateColumns: '150px 1fr 150px',
                    gridTemplateRows: 'auto 1fr auto'
                  }}>
                    <div className="bg-neutral-800 text-white text-[8px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'header' }}>Header</div>
                    <div className="bg-neutral-300 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'left' }}>Left</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300" style={{ gridArea: 'main' }}>Main</div>
                    <div className="bg-neutral-300 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded" style={{ gridArea: 'right' }}>Right</div>
                    <div className="bg-neutral-100 text-neutral-500 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-200" style={{ gridArea: 'footer' }}>Footer</div>
                  </div>
                }
                code={`.holy-grail {
  display: grid;
  grid-template-areas: 
    "header header header"
    "left main right"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}`}
              />
              
              {/* Aspect Ratio Grid */}
              <PatternCardTall 
                title="Aspect Ratio Grid"
                badge="Соотношение"
                description="Грид с сохранением соотношения сторон элементов."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))' }}>
                    {Array.from({length: 6}, (_, i) => (
                      <div key={i} className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300 aspect-square">
                        {i + 1}
                      </div>
                    ))}
                  </div>
                }
                code={`.aspect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}
.item {
  aspect-ratio: 1; /* квадрат */
  /* или aspect-ratio: 16 / 9; для видео */
}`}
              />
              
              {/* Subgrid */}
              <PatternCardTall 
                title="Subgrid"
                badge="Наследование"
                description="Дочерний грид наследует линии родительского."
                preview={
                  <div className="grid gap-1 h-32 w-full" style={{ gridTemplateColumns: '200px 1fr', gridTemplateRows: 'auto 1fr auto' }}>
                    <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded" style={{ gridColumn: '1 / -1' }}>Header</div>
                    <div className="bg-neutral-300 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded">Sidebar</div>
                    <div className="grid gap-0.5 p-0.5" style={{ gridTemplateColumns: 'subgrid', gridTemplateRows: 'subgrid' }}>
                      <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300">Sub 1</div>
                      <div className="bg-neutral-100 text-neutral-500 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-200">Sub 2</div>
                      <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300">Sub 3</div>
                    </div>
                    <div className="bg-neutral-100 text-neutral-500 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-200" style={{ gridColumn: '1 / -1' }}>Footer</div>
                  </div>
                }
                code={`/* Subgrid наследует линии родителя */
.parent {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}
.child {
  display: grid;
  grid-template-columns: subgrid; /* наследует колонки */
  grid-template-rows: subgrid;    /* наследует строки */
  grid-column: 2; /* занимает вторую колонку родителя */
}
/* Поддержка: Firefox, Safari. Chrome в разработке */`}
              />
              
              {/* Grid + Flexbox */}
              <PatternCardTall 
                title="Grid + Flexbox"
                badge="Комбинация"
                description="Grid контейнер с Flexbox элементами."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ gridTemplateColumns: '1fr 2fr' }}>
                    <div className="bg-neutral-300 text-neutral-600 text-[9px] font-mono flex flex-col justify-center rounded p-1">
                      <div>Flex</div>
                      <div>Column</div>
                    </div>
                    <div className="grid gap-0.5" style={{ gridTemplateColumns: '1fr 1fr' }}>
                      <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300">Grid 1</div>
                      <div className="bg-neutral-100 text-neutral-500 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-200">Grid 2</div>
                    </div>
                  </div>
                }
                code={`.hybrid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
}
.flex-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.grid-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}`}
              />
              
              {/* Container Queries */}
              <PatternCardTall 
                title="Container Queries"
                badge="Адаптивность"
                description="Grid адаптируется к размеру контейнера."
                preview={
                  <div className="w-64 bg-neutral-50 p-2 rounded">
                    <div className="grid gap-1" style={{ 
                      containerType: 'inline-size',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))'
                    }}>
                      {Array.from({length: 6}, (_, i) => (
                        <div key={i} className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300 p-1">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                }
                code={`.container {
  container-type: inline-size;
  /* или container-type: size; для width + height */
}
@container (min-width: 400px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@container (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
/* Container queries позволяют адаптировать layout к размеру родителя */`}
              />
              
              {/* Grid с анимациями */}
              <PatternCardTall 
                title="Grid с анимациями"
                badge="Анимации"
                description="Плавные переходы для grid-template-columns."
                preview={
                  <div className="w-full h-28 bg-neutral-50 p-2 rounded">
                    <div className="grid gap-1 h-full transition-all duration-500" style={{ 
                      gridTemplateColumns: '1fr 1fr 1fr',
                      animation: 'gridShift 3s ease-in-out infinite'
                    }}>
                      <style jsx>{`
                        @keyframes gridShift {
                          0%, 100% { grid-template-columns: 1fr 1fr 1fr; }
                          50% { grid-template-columns: 2fr 1fr 1fr; }
                        }
                      `}</style>
                      <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded">1</div>
                      <div className="bg-neutral-300 text-neutral-700 text-[9px] font-mono flex items-center justify-center rounded">2</div>
                      <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300">3</div>
                    </div>
                  </div>
                }
                code={`.animated-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  transition: grid-template-columns 0.3s ease;
}
.animated-grid:hover {
  grid-template-columns: 2fr 1fr 1fr;
}
/* Анимируйте: grid-template-columns, grid-template-rows, gap */`}
              />
              
              {/* Scroll-snap в Grid */}
              <PatternCardTall 
                title="Scroll-snap в Grid"
                badge="Прокрутка"
                description="Плавная прокрутка карточек с фиксацией."
                preview={
                  <div className="w-full h-28 overflow-x-auto bg-neutral-50 rounded">
                    <div className="grid gap-2 p-2" style={{ 
                      gridTemplateColumns: 'repeat(6, 200px)',
                      gridAutoFlow: 'column',
                      scrollSnapType: 'x mandatory',
                      width: 'max-content'
                    }}>
                      {Array.from({length: 6}, (_, i) => (
                        <div key={i} className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300 h-20 scroll-snap-align-start">
                          Card {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                }
                code={`.scroll-container {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 1rem;
  width: max-content;
}
.card {
  scroll-snap-align: start;
  /* start | center | end */
}
/* Плавная навигация по карточкам */`}
              />
              
              {/* Grid с backdrop-filter */}
              <PatternCardTall 
                title="Grid с backdrop-filter"
                badge="Фильтры"
                description="Размытие фона за элементами сетки."
                preview={
                  <div className="w-full h-28 bg-gradient-to-r from-blue-400 to-purple-500 relative rounded overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-3 gap-1 p-2">
                      <div className="bg-white/20 backdrop-blur-sm text-white text-[9px] font-mono flex items-center justify-center rounded border border-white/30">Blur</div>
                      <div className="bg-white/30 backdrop-blur-md text-white text-[9px] font-mono flex items-center justify-center rounded border border-white/30">More</div>
                      <div className="bg-white/40 backdrop-blur-lg text-white text-[9px] font-mono flex items-center justify-center rounded border border-white/30">Most</div>
                    </div>
                  </div>
                }
                code={`.backdrop-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.item {
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
/* backdrop-filter: blur() | brightness() | contrast() | etc. */`}
              />
              
              {/* CSS clip-path в Grid */}
              <PatternCardTall 
                title="CSS clip-path в Grid"
                badge="Формы"
                description="Геометрические формы с clip-path."
                preview={
                  <div className="grid grid-cols-4 gap-1 h-28 w-full">
                    <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>Triangle</div>
                    <div className="bg-neutral-300 text-neutral-700 text-[9px] font-mono flex items-center justify-center rounded" style={{ clipPath: 'circle(50%)' }}>Circle</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300" style={{ clipPath: 'ellipse(50% 30%)' }}>Ellipse</div>
                    <div className="bg-neutral-100 text-neutral-500 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-200" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>Hexagon</div>
                  </div>
                }
                code={`.shapes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.triangle { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
.circle { clip-path: circle(50%); }
.hexagon { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
/* clip-path: circle() | ellipse() | polygon() | path() */`}
              />
              
              {/* CSS clamp() — fluid typography */}
              <PatternCardTall 
                title="CSS clamp() — fluid typography"
                badge="Fluid"
                description="Адаптивный размер текста в grid."
                preview={
                  <div className="grid grid-cols-3 gap-1 h-28 w-full items-center">
                    <div className="bg-neutral-200 text-neutral-600 flex items-center justify-center rounded border border-neutral-300 p-2">
                      <span className="text-[clamp(0.8rem,2vw,1.5rem)] font-mono">Small</span>
                    </div>
                    <div className="bg-neutral-300 text-neutral-700 flex items-center justify-center rounded p-2">
                      <span className="text-[clamp(1rem,3vw,2rem)] font-mono font-bold">Medium</span>
                    </div>
                    <div className="bg-neutral-800 text-white flex items-center justify-center rounded p-2">
                      <span className="text-[clamp(1.2rem,4vw,2.5rem)] font-mono font-bold">Large</span>
                    </div>
                  </div>
                }
                code={`.fluid-text {
  font-size: clamp(1rem, 2vw, 2rem);
  /* min, preferred, max */
}
.grid-item {
  padding: clamp(0.5rem, 2vw, 1.5rem);
  gap: clamp(0.5rem, 1.5vw, 1rem);
}
/* clamp() работает для любых свойств: width, height, margin, etc. */`}
              />
              
              {/* CSS logical properties */}
              <PatternCardTall 
                title="CSS logical properties"
                badge="Логические"
                description="Логические свойства для интернационализации."
                preview={
                  <div className="grid grid-cols-2 gap-1 h-28 w-full">
                    <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300 p-2" style={{ 
                      marginBlockStart: '0.5rem',
                      marginInlineEnd: '0.5rem',
                      paddingBlock: '0.5rem',
                      paddingInline: '0.5rem'
                    }}>
                      Logical<br/>Properties
                    </div>
                    <div className="bg-neutral-300 text-neutral-700 text-[9px] font-mono flex items-center justify-center rounded p-2" style={{
                      borderBlockStart: '2px solid',
                      borderInlineEnd: '2px solid'
                    }}>
                      Border<br/>Logical
                    </div>
                  </div>
                }
                code={`.logical {
  /* Вместо margin-top/bottom */
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  
  /* Вместо margin-left/right */
  margin-inline-start: 1rem;
  margin-inline-end: 1rem;
  
  /* Вместо padding-top/bottom */
  padding-block: 1rem;
  
  /* Вместо border-left/right */
  border-inline-start: 2px solid black;
}
/* Логические свойства адаптируются под направление текста */`}
              />
              
              {/* prefers-reduced-motion */}
              <PatternCardTall 
                title="prefers-reduced-motion"
                badge="Accessibility"
                description="Отключение анимаций для пользователей с ограничениями."
                preview={
                  <div className="w-full h-28 bg-neutral-50 p-2 rounded">
                    <div className="grid gap-1 h-full" style={{ 
                      gridTemplateColumns: '1fr 1fr 1fr',
                      transition: 'grid-template-columns 0.3s ease'
                    }}>
                      <div className="bg-neutral-800 text-white text-[9px] font-mono flex items-center justify-center rounded hover:scale-105 transition-transform">Hover me</div>
                      <div className="bg-neutral-300 text-neutral-700 text-[9px] font-mono flex items-center justify-center rounded">Item 2</div>
                      <div className="bg-neutral-200 text-neutral-600 text-[9px] font-mono flex items-center justify-center rounded border border-neutral-300">Item 3</div>
                    </div>
                  </div>
                }
                code={`/* Отключаем анимации для пользователей */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Или конкретно для grid */
.grid {
  transition: grid-template-columns 0.3s ease;
}
@media (prefers-reduced-motion: reduce) {
  .grid {
    transition: none;
  }
}
/* Уважайте предпочтения пользователей */`}
              />
              
              {/* Grid + CSS custom properties динамика */}
              <PatternCardTall 
                title="Grid + CSS custom properties"
                badge="Динамика"
                description="Динамическое изменение grid через JavaScript."
                preview={
                  <div className="w-full h-28 bg-neutral-50 p-2 rounded">
                    <div className="grid gap-1 h-full" style={{ 
                      '--cols': 'repeat(3, 1fr)',
                      '--gap': '0.25rem',
                      gridTemplateColumns: 'var(--cols)',
                      gap: 'var(--gap)'
                    } as React.CSSProperties}>
                      {Array.from({length: 6}, (_, i) => (
                        <div key={i} className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                }
                code={`:root {
  --grid-cols: repeat(3, 1fr);
  --grid-gap: 1rem;
  --grid-rows: auto;
}
.grid {
  display: grid;
  grid-template-columns: var(--grid-cols);
  grid-template-rows: var(--grid-rows);
  gap: var(--grid-gap);
}
/* JavaScript для динамики */
const root = document.documentElement;
function updateGrid(cols) {
  root.style.setProperty('--grid-cols', \`repeat(\${cols}, 1fr)\`);
}
// Вызываем: updateGrid(4) для изменения на 4 колонки */`}
              />
              
              {/* Implicit named lines */}
              <PatternCardTall 
                title="Implicit named lines"
                badge="Неявные"
                description="Именование неявных линий сетки."
                preview={
                  <div className="grid gap-1 h-28 w-full" style={{ 
                    gridTemplateColumns: '[main-start] 1fr [main-end sidebar-start] 200px [sidebar-end]',
                    gridTemplateRows: '[header-start] auto [header-end content-start] 1fr [content-end footer-start] auto [footer-end]'
                  }}>
                    <div className="bg-neutral-800 text-white text-[8px] font-mono flex items-center justify-center rounded" style={{ gridColumn: 'main-start / main-end', gridRow: 'header-start / header-end' }}>Header</div>
                    <div className="bg-neutral-300 text-neutral-700 text-[8px] font-mono flex items-center justify-center rounded" style={{ gridColumn: 'sidebar-start / sidebar-end', gridRow: 'content-start / content-end' }}>Sidebar</div>
                    <div className="bg-neutral-200 text-neutral-600 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-300" style={{ gridColumn: 'main-start / main-end', gridRow: 'content-start / content-end' }}>Main</div>
                    <div className="bg-neutral-100 text-neutral-500 text-[8px] font-mono flex items-center justify-center rounded border border-neutral-200" style={{ gridColumn: 'main-start / sidebar-end', gridRow: 'footer-start / footer-end' }}>Footer</div>
                  </div>
                }
                code={`.grid {
  display: grid;
  grid-template-columns: 
    [main-start] 1fr [main-end sidebar-start] 200px [sidebar-end];
  grid-template-rows:
    [header-start] auto [header-end content-start] 1fr [content-end footer-start] auto [footer-end];
}
.header { 
  grid-column: main-start / main-end;
  grid-row: header-start / header-end;
}
.sidebar { 
  grid-column: sidebar-start / sidebar-end;
  grid-row: content-start / content-end;
}
/* Именованные линии можно использовать даже для неявных областей */`}
              />
              
              {/* Grid с writing-mode */}
              <PatternCardTall 
                title="Grid с writing-mode"
                badge="Текст"
                description="Вертикальный текст и азиатские направления."
                preview={
                  <div className="grid grid-cols-2 gap-1 h-28 w-full">
                    <div className="bg-neutral-200 text-neutral-600 flex items-center justify-center rounded border border-neutral-300 p-2">
                      <div className="writing-mode-vertical text-[10px] font-mono">Vertical Text</div>
                    </div>
                    <div className="bg-neutral-300 text-neutral-700 flex items-center justify-center rounded p-2">
                      <div className="writing-mode-vertical-rl text-[10px] font-mono">RTL Vertical</div>
                    </div>
                  </div>
                }
                code={`.vertical-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.vertical-text {
  writing-mode: vertical-rl; /* right-to-left */
  /* или vertical-lr (left-to-right) */
  text-orientation: mixed; /* auto | upright | mixed */
}
/* writing-mode влияет на направление flex и grid */`}
              />
              
              {/* Grid с object-fit */}
              <PatternCardTall 
                title="Grid с object-fit"
                badge="Изображения"
                description="Адаптивные изображения в grid ячейках."
                preview={
                  <div className="grid grid-cols-3 gap-1 h-28 w-full">
                    <div className="bg-neutral-200 rounded overflow-hidden">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23888'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='0.35em' fill='white' font-size='12'%3E1:1%3C/text%3E%3C/svg%3E" 
                           alt="1:1" className="w-full h-full object-cover" />
                    </div>
                    <div className="bg-neutral-300 rounded overflow-hidden">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Crect width='200' height='100' fill='%23666'/%3E%3Ctext x='100' y='50' text-anchor='middle' dy='0.35em' fill='white' font-size='12'%3E2:1%3C/text%3E%3C/svg%3E" 
                           alt="2:1" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-neutral-800 rounded overflow-hidden">
                      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 200'%3E%3Crect width='100' height='200' fill='%23333'/%3E%3Ctext x='50' y='100' text-anchor='middle' dy='0.35em' fill='white' font-size='12'%3E1:2%3C/text%3E%3C/svg%3E" 
                           alt="1:2" className="w-full h-full object-fill" />
                    </div>
                  </div>
                }
                code={`.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* cover | contain | fill | none | scale-down */
  object-position: center; /* center | top | bottom | left | right */
}
/* object-fit сохраняет пропорции изображений в grid */`}
              />
            </div>
          </TabsContent>

          {/* TAB: CHEATSHEET */}
          <TabsContent value="cheatsheet" className="mt-0 space-y-6">
            {/* Container Properties */}
            <section>
              <SectionTitle>Свойства контейнера</SectionTitle>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <table className="w-full text-[10px]">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="text-left py-2 px-3 font-medium text-neutral-700">Свойство</th>
                      <th className="text-left py-2 px-3 font-medium text-neutral-700">Значения</th>
                      <th className="text-left py-2 px-3 font-medium text-neutral-400">Описание</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">display</td><td className="text-neutral-500 px-3">grid | inline-grid | subgrid</td><td className="text-neutral-400 px-3">тип контейнера</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">grid-template-columns</td><td className="text-neutral-500 px-3">размеры колонок</td><td className="text-neutral-400 px-3">определяет колонки</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">grid-template-rows</td><td className="text-neutral-500 px-3">размеры строк</td><td className="text-neutral-400 px-3">определяет строки</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">grid-template-areas</td><td className="text-neutral-500 px-3">именованные области</td><td className="text-neutral-400 px-3">визуальное именование</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">gap</td><td className="text-neutral-500 px-3">16px | 8px 16px</td><td className="text-neutral-400 px-3">отступы между ячейками</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">justify-items</td><td className="text-neutral-500 px-3">start | center | end | stretch</td><td className="text-neutral-400 px-3">горизонтально</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">align-items</td><td className="text-neutral-500 px-3">start | center | end | stretch</td><td className="text-neutral-400 px-3">вертикально</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">justify-content</td><td className="text-neutral-500 px-3">start | center | space-*</td><td className="text-neutral-400 px-3">весь грид горизонтально</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">align-content</td><td className="text-neutral-500 px-3">start | center | space-*</td><td className="text-neutral-400 px-3">весь грид вертикально</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">grid-auto-flow</td><td className="text-neutral-500 px-3">row | column | dense</td><td className="text-neutral-400 px-3">порядок размещения</td></tr>
                    <tr><td className="py-1.5 px-3">grid-auto-rows/columns</td><td className="text-neutral-500 px-3">60px | minmax()</td><td className="text-neutral-400 px-3">размер неявных треков</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Item Properties */}
            <section>
              <SectionTitle>Свойства элементов</SectionTitle>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <table className="w-full text-[10px]">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="text-left py-2 px-3 font-medium text-neutral-700">Свойство</th>
                      <th className="text-left py-2 px-3 font-medium text-neutral-700">Значения</th>
                      <th className="text-left py-2 px-3 font-medium text-neutral-400">Описание</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">grid-column</td><td className="text-neutral-500 px-3">span 2 | 1 / 3 | 1 / -1</td><td className="text-neutral-400 px-3">позиция по колонкам</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">grid-row</td><td className="text-neutral-500 px-3">span 2 | 1 / 3</td><td className="text-neutral-400 px-3">позиция по строкам</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">grid-area</td><td className="text-neutral-500 px-3">header | 1/1/3/4</td><td className="text-neutral-400 px-3">имя или позиция</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">justify-self</td><td className="text-neutral-500 px-3">start | center | end | stretch</td><td className="text-neutral-400 px-3">горизонтально</td></tr>
                    <tr><td className="py-1.5 px-3">align-self</td><td className="text-neutral-500 px-3">start | center | end | stretch</td><td className="text-neutral-400 px-3">вертикально</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Functions */}
            <section>
              <SectionTitle>Функции</SectionTitle>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <table className="w-full text-[10px]">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="text-left py-2 px-3 font-medium text-neutral-700">Функция</th>
                      <th className="text-left py-2 px-3 font-medium text-neutral-700">Пример</th>
                      <th className="text-left py-2 px-3 font-medium text-neutral-400">Описание</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono">
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">repeat()</td><td className="text-neutral-500 px-3">repeat(3, 1fr) | repeat(auto-fit, minmax(200px, 1fr))</td><td className="text-neutral-400 px-3">повторение</td></tr>
                    <tr className="border-b border-neutral-100"><td className="py-1.5 px-3">minmax()</td><td className="text-neutral-500 px-3">minmax(100px, 1fr) | minmax(auto, 500px)</td><td className="text-neutral-400 px-3">диапазон</td></tr>
                    <tr><td className="py-1.5 px-3">fit-content()</td><td className="text-neutral-500 px-3">fit-content(200px) | fit-content(50%)</td><td className="text-neutral-400 px-3">максимум до значения</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Keywords */}
            <section>
              <SectionTitle>Ключевые слова</SectionTitle>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-mono">
                <div className="border border-neutral-200 rounded px-2 py-1.5"><span className="text-neutral-500">fr</span> — доля пространства</div>
                <div className="border border-neutral-200 rounded px-2 py-1.5"><span className="text-neutral-500">auto</span> — по контенту</div>
                <div className="border border-neutral-200 rounded px-2 py-1.5"><span className="text-neutral-500">auto-fit</span> — растягивает</div>
                <div className="border border-neutral-200 rounded px-2 py-1.5"><span className="text-neutral-500">auto-fill</span> — сохраняет пустые</div>
                <div className="border border-neutral-200 rounded px-2 py-1.5"><span className="text-neutral-500">min-content</span> — минимум</div>
                <div className="border border-neutral-200 rounded px-2 py-1.5"><span className="text-neutral-500">max-content</span> — максимум</div>
                <div className="border border-neutral-200 rounded px-2 py-1.5"><span className="text-neutral-500">span n</span> — занять n ячеек</div>
                <div className="border border-neutral-200 rounded px-2 py-1.5"><span className="text-neutral-500">subgrid</span> — наследовать сетку</div>
              </div>
            </section>
          </TabsContent>
        </div>

        {/* Sidebar Navigation */}
        <aside className="w-44 border-l border-neutral-200 shrink-0 hidden lg:block bg-neutral-50/50">
          <div className="sticky top-16 px-4 pt-10 pb-5">
            <TabsList className="flex flex-col gap-0 bg-transparent p-0 w-full">
              {/* Основы */}
              <div className="flex items-center gap-1.5 mb-2">
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono font-medium">§01-03</div>
                <div className="flex-1 border-t border-dashed border-neutral-300"></div>
              </div>
              {sectionsTop.map((section, index) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="w-full justify-start rounded-none px-0 py-2 text-xs text-left
                    data-[state=active]:bg-transparent data-[state=active]:text-neutral-900
                    text-neutral-400 hover:text-neutral-600 border-0
                    relative pl-3
                    before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
                    before:w-2 before:h-2 before:rounded-full before:border before:border-neutral-300
                    data-[state=active]:before:bg-neutral-800 data-[state=active]:before:border-neutral-800
                    before:bg-white"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] text-neutral-300 font-mono">{String(index + 1).padStart(2, '0')}</span>
                    {section.label}
                  </span>
                </TabsTrigger>
              ))}
              
              {/* Разделитель */}
              <div className="my-3 flex items-center gap-2">
                <div className="flex-1 border-t border-dashed border-neutral-300"></div>
                <div className="w-1.5 h-1.5 border border-neutral-300 rotate-45"></div>
                <div className="flex-1 border-t border-dashed border-neutral-300"></div>
              </div>
              
              {/* Продвинутые */}
              <div className="flex items-center gap-1.5 mb-2">
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono font-medium">§04-12</div>
                <div className="flex-1 border-t border-dashed border-neutral-300"></div>
              </div>
              {sectionsBottom.map((section, index) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="w-full justify-start rounded-none px-0 py-2 text-xs text-left
                    data-[state=active]:bg-transparent data-[state=active]:text-neutral-900
                    text-neutral-400 hover:text-neutral-600 border-0
                    relative pl-3
                    before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
                    before:w-2 before:h-2 before:rounded-full before:border before:border-neutral-300
                    data-[state=active]:before:bg-neutral-800 data-[state=active]:before:border-neutral-800
                    before:bg-white"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] text-neutral-300 font-mono">{String(index + 4).padStart(2, '0')}</span>
                    {section.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-4 shrink-0 bg-white">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-neutral-500 font-mono">
          <span className="font-medium">CSS Grid Reference · 88 интерактивных примеров</span>
          <div className="flex gap-4 items-center">
            <span>Next.js 16</span>
            <span className="text-neutral-300">•</span>
            <span>TypeScript</span>
            <span className="text-neutral-300">•</span>
            <span>Tailwind CSS</span>
            <span className="text-neutral-300">•</span>
            <span>Radix UI</span>
          </div>
        </div>
      </footer>
    </Tabs>
  )
}
