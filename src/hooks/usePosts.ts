import { posts, categories, getPostBySlug, getPostsByCategory as getPostsByCat, getCategoryBySlug, searchPosts as searchMockPosts, type Post, type Category } from "@/data/mockPosts";

export type { Post as BlogPost } from "@/data/mockPosts";

export function usePublishedPosts() {
  return {
    data: posts,
    isLoading: false,
    error: null,
  };
}

export function usePostBySlug(slug: string) {
  return {
    data: slug ? getPostBySlug(slug) || null : null,
    isLoading: false,
    error: null,
  };
}

export function useCategories() {
  return {
    data: categories,
    isLoading: false,
    error: null,
  };
}

export function usePostsByCategory(categorySlug: string) {
  const category = getCategoryBySlug(categorySlug);
  const catPosts = getPostsByCat(categorySlug);
  return {
    data: { category: category || null, posts: catPosts },
    isLoading: false,
    error: null,
  };
}
