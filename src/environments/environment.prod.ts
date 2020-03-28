export const environment = {
  production: true,
  storage_config_name: "config",
  tmdb_api_url: "https://api.themoviedb.org/",
  tmdb_api_key: "?api_key="
};
export const getApiEndpoint = (endPoint: string) => {
  return `${environment.tmdb_api_url}${endPoint}${environment.tmdb_api_key}`;
};