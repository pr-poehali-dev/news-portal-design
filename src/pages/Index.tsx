import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Орбита Земли: Наблюдение за планетой из космоса",
    description: "Спутники позволяют нам видеть Землю с совершенно новой перспективы, открывая невидимые ранее детали атмосферы и поверхности",
    category: "Satellite",
    date: "15 окт 2024",
    image: "https://cdn.poehali.dev/files/b58ced3e-b22c-4b2f-85a1-14e4e556055b.jpg",
    readTime: "5 мин"
  },
  {
    id: 2,
    title: "Технология спутниковой связи нового поколения",
    description: "Современные спутники передают данные со скоростью света, обеспечивая связь в самых отдаленных уголках планеты",
    category: "Technology",
    date: "12 окт 2024",
    image: "https://cdn.poehali.dev/files/b58ced3e-b22c-4b2f-85a1-14e4e556055b.jpg",
    readTime: "7 мин"
  },
  {
    id: 3,
    title: "Мониторинг климата: Взгляд из космоса",
    description: "Спутниковые системы помогают отслеживать изменения климата в режиме реального времени по всей планете",
    category: "Galaxy",
    date: "10 окт 2024",
    image: "https://cdn.poehali.dev/files/b58ced3e-b22c-4b2f-85a1-14e4e556055b.jpg",
    readTime: "6 мин"
  },
  {
    id: 4,
    title: "Геостационарные орбиты и их значение",
    description: "Геостационарные спутники остаются над одной точкой Земли, обеспечивая постоянную связь и наблюдение",
    category: "Satellite",
    date: "8 окт 2024",
    image: "https://cdn.poehali.dev/files/b58ced3e-b22c-4b2f-85a1-14e4e556055b.jpg",
    readTime: "4 мин"
  },
  {
    id: 5,
    title: "Исследование океанов с помощью спутников",
    description: "Спутниковые данные помогают ученым изучать течения, температуру и состояние мирового океана",
    category: "Galaxy",
    date: "5 окт 2024",
    image: "https://cdn.poehali.dev/files/b58ced3e-b22c-4b2f-85a1-14e4e556055b.jpg",
    readTime: "8 мин"
  },
  {
    id: 6,
    title: "Будущее космической навигации",
    description: "Новое поколение навигационных спутников обеспечит точность до сантиметров в любой точке планеты",
    category: "Technology",
    date: "3 окт 2024",
    image: "https://cdn.poehali.dev/files/b58ced3e-b22c-4b2f-85a1-14e4e556055b.jpg",
    readTime: "5 мин"
  }
];

const popularArticles = [
  { id: 1, title: "Первый запуск частного космического корабля", views: "12.5K" },
  { id: 2, title: "Новые открытия телескопа James Webb", views: "10.2K" },
  { id: 3, title: "Марсианская миссия: Обновление", views: "9.8K" },
  { id: 4, title: "Квантовая связь через спутники", views: "8.5K" }
];

const categories = ["Все", "Technology", "Galaxy", "Satellite"];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Rocket" size={32} className="text-primary" />
              <h1 className="text-xl font-bold tracking-tight">SPACE NEWS BLOG</h1>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Technology</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Galaxy</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Satellite</a>
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative hidden lg:block">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск статей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 bg-secondary border-border"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              <div className="mb-4">
                <div className="relative">
                  <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Поиск статей..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 bg-secondary border-border"
                  />
                </div>
              </div>
              <nav className="flex flex-col gap-2">
                <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors">About</a>
                <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors">Technology</a>
                <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors">Galaxy</a>
                <a href="#" className="px-4 py-2 text-sm font-medium hover:bg-secondary rounded-md transition-colors">Satellite</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1">
            <div className="mb-6 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {filteredArticles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <span className="text-xs text-muted-foreground">• {article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {article.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="gap-2 group-hover:gap-3 transition-all">
                      Читать далее
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Статьи не найдены</h3>
                <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </main>

          <aside className="w-full lg:w-80 space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                  Популярные статьи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {popularArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium leading-tight mb-1 group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Icon name="Eye" size={12} />
                        {article.views}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={20} className="text-primary" />
                  О блоге
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Space News Blog — это платформа для тех, кто интересуется космическими технологиями, 
                  спутниковыми системами и исследованием галактик.
                </p>
                <Button variant="outline" className="w-full gap-2">
                  <Icon name="Mail" size={16} />
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>

      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Rocket" size={28} className="text-primary" />
                <h2 className="text-lg font-bold">SPACE NEWS BLOG</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Ваш источник актуальных новостей о космосе и технологиях
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Galaxy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Satellite</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@spacenews.blog
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Globe" size={16} />
                  www.spacenews.blog
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Space News Blog. Created with poehali.dev</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
