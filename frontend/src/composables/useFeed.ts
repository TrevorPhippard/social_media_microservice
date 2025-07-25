import { ref } from 'vue'

interface Post {
  id: string
  author: { avatar?: string; username: string }
  content: string
  media?: { type: string; url: string }
  likeCount: number
  commentCount: number
  shareCount: number
  viewerHasLiked: boolean
  comments: Array<{ id: string; author: any; content: string }>
}

// Mock API delay and pagination
const PAGE_SIZE = 5

export function useFeed() {
  const posts = ref<Post[]>([])
  const page = ref(0)
  const isLoading = ref(false)
  const hasMore = ref(true)

  async function fetchPosts(pageNum: number): Promise<Post[]> {
    // Replace with real API call
    await new Promise((r) => setTimeout(r, 1000))
    if (pageNum > 3) return [] // mock 4 pages max

    const mockPosts: Post[] = Array.from({ length: PAGE_SIZE }).map((_, i) => ({
      id: `post_${pageNum * PAGE_SIZE + i}`,
      author: { username: 'User ' + (pageNum * PAGE_SIZE + i + 1) },
      content: 'This is a mock post content for post #' + (pageNum * PAGE_SIZE + i + 1),
      likeCount: Math.floor(Math.random() * 20),
      commentCount: Math.floor(Math.random() * 10),
      shareCount: Math.floor(Math.random() * 5),
      viewerHasLiked: false,
      comments: [],
    }))

    return mockPosts
  }

  async function loadMore() {
    if (isLoading.value || !hasMore.value) return
    isLoading.value = true
    const newPosts = await fetchPosts(page.value)
    if (newPosts.length === 0) hasMore.value = false
    posts.value.push(...newPosts)
    page.value++
    isLoading.value = false
  }

  return { posts, loadMore, isLoading, hasMore }
}
