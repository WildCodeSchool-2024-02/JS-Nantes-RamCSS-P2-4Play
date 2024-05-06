const DOMAIN = import.meta.env.VITE_API_URL ||
  process.env.NODE_ENV === "development" ?
  "http://localhost:3000"
  :
  "https://4play.nantes-1.wilders.dev";

export default DOMAIN;