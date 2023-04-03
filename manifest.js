module.exports={
    id: "org.community.YourIPTV",
    version: "1.1.1",
    name: "IPTV TEST",
    logo: "https://raw.githubusercontent.com/mik25/stremio-greek-tv/master/hank.jpg",
    description: "Multi Header M3U Tester",
    types: ["movie", "series","tv","channel"],
    background: "https://dl.strem.io/addon-background.jpg",
    resources: ["movie","series","tv"],
    catalogs: [],
    idPrefixes: ["yiptv:"],
    behaviorHints:{configurable : true, configurationRequired: true },
};
