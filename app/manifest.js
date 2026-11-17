export default function manifest() {
  return {
    name: "Codesudio",
    short_name: "Codesudio",
    description: "Custom software & digital products, built for Saudi businesses.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#FBFCFB",
    theme_color: "#FBFCFB",
    icons: [
      { src: "/pwa-icon/192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/pwa-icon/512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/pwa-icon/512", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
