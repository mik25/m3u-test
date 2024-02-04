module.exports={
    id: "org.community.YourIPTV",
    version: "2.0.0",
    name: "MikMc IPTV",
    logo: "https://hy-torrentio.surge.sh/configure_files/h_y-high-resolution-logo-transparent.png",
    description: "STREMIO IPTV",
    types: ["movie", "series","tv","channel"],
    background: "https://raw.githubusercontent.com/mik25/stremaline/main/blownaway.jpg",
    resources: ["movie","series","tv"],
    catalogs: [],
    idPrefixes: ["yiptv:"],
    behaviorHints:{configurable : true, configurationRequired: true },
};
