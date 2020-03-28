const copydir = require("copy-dir");

copydir.sync("public/assets", "docs/assets", {});

process.exit();
