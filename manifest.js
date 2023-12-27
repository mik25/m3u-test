module.exports={
    id: "org.community.YourIPTV",
    version: "2.0.0",
    name: "MikMc IPTV",
    logo: "https://raw.githubusercontent.com/mik25/hy-uhd/main/self-portrait-my-music-room-ride-of-the-valkyries-thomas-pollart%20(2).jpg",
    description: "STREMIO IPTV",
    types: ["movie", "series","tv","channel"],
    background: "https://raw.githubusercontent.com/mik25/m3u-test/main/blownaway.jpg",
    resources: ["movie","series","tv"],
    catalogs: [],
    idPrefixes: ["yiptv:"],
    behaviorHints:{configurable : true, configurationRequired: true },
};
