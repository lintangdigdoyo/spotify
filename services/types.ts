export enum QueryKeyEnum {
  TOKEN = "TOKEN",
  FEATURED_PLAYLISTS = "FEATURED_PLAYLISTS",
  GENRES = "GENRES",
  ALBUMS = "ALBUMS",
}

/** Token */

export interface TokenRes {
  access_token: string;
  token_type: string;
  expires_in: number;
}

/** Playlists */

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

/** Albums */

export interface AlbumsRes {
  albums: Albums;
}

export interface AlbumsParams {
  limit?: number;
  offset?: number;
}

export interface Albums extends Omit<Playlists, "items"> {
  items: AlbumsItem[];
}

export interface AlbumsItem {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  copyrights: Copyright[];
  external_ids: ExternalIDS;
  genres: string[];
  label: string;
  popularity: number;
  album_group: string;
  artists: Artist[];
}

/** Genres */

export interface GenresRes {
  genres: string[];
}

/** Other types */

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Copyright {
  text: string;
  type: string;
}

export interface ExternalIDS {
  isrc: string;
  ean: string;
  upc: string;
}

export interface Restrictions {
  reason: string;
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
