export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  date: string;
  imageUrl: string;
  originalUrl: string;
  category?: string;
}

export interface ApiResponse {
  articles: NewsArticle[];
  hasMore: boolean;
  page: number;
}
