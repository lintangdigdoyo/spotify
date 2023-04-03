export enum QueryKeyEnum {
  TOKEN = "TOKEN",
  FEATURED_PLAYLISTS = "FEATURED_PLAYLISTS",
}

export interface TokenRes {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface PlaylistsRes {
  message: string;
  playlists: Playlists;
}

export interface PlaylistsParams {
  limit?: number;
  offset?: number;
}

export interface Playlists {
  href: string;
  items: PlaylistsItem[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface PlaylistsItem {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color: string | null;
  public: boolean | null;
  snapshot_id: string;
  tracks: Tracks;
  type: ItemType;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  url: string;
  width: number | null;
  height: number | null;
}

export interface Owner {
  display_name: string | null;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: OwnerType;
  uri: string;
}

export interface Tracks {
  href: string;
  total: number;
}

export enum OwnerType {
  User = "user",
}

export enum ItemType {
  Playlist = "playlist",
}
