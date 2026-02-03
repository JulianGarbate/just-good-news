import { NewsArticle } from '@/types/news';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export async function fetchArticles(page: number = 1): Promise<{ articles: NewsArticle[], hasMore: boolean }> {
  try {
    const response = await fetch(`${API_URL}/news?page=${page}&limit=6`, {
      next: { revalidate: 300 }, // Cache por 5 minutos
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      articles: data.articles || [],
      hasMore: data.hasMore || false
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { articles: [], hasMore: false };
  }
}

export async function fetchArticleById(id: string): Promise<NewsArticle | null> {
  try {
    const response = await fetch(`${API_URL}/news/${id}`, {
      next: { revalidate: 300 },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}
