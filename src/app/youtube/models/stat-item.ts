export interface VideoResponse {
  kind: string;
  etag: string;
  items?: VideoItem[] | null;
  pageInfo: PageInfo;
}
export interface VideoItem {
  kind: string;
  etag: string;
  id: string;
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
  tags?: string[] | null;
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultLanguage?: string | null;
  defaultAudioLanguage?: string | null;
}
export interface Thumbnails {
  default: DefaultOrMediumOrHighOrStandardOrMaxres;
  medium: DefaultOrMediumOrHighOrStandardOrMaxres;
  high: DefaultOrMediumOrHighOrStandardOrMaxres;
  standard?: DefaultOrMediumOrHighOrStandardOrMaxres1 | null;
  maxres?: DefaultOrMediumOrHighOrStandardOrMaxres2 | null;
}
export interface DefaultOrMediumOrHighOrStandardOrMaxres {
  url: string;
  width: number;
  height: number;
}
export interface DefaultOrMediumOrHighOrStandardOrMaxres1 {
  url: string;
  width: number;
  height: number;
}
export interface DefaultOrMediumOrHighOrStandardOrMaxres2 {
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
  favoriteCount: string;
  commentCount: string;
}
export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
