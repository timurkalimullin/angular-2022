export interface SearchItem {
  kind: string;
  etag: string;
  id: {
    videoId: string;
  };
  snippet: Snippet;
  statistics: Statistics;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

export interface Thumbnails {
  default: ThumbSize;
  medium: ThumbSize;
  high: ThumbSize;
  standard: ThumbSize;
  maxres: ThumbSize;
}

export interface ThumbSize {
  url: string;
  width: number;
  height: number;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
