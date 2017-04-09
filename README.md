# ctdocs
This package parses JSON-defined documentation data and displays it in a web page.


# Back (Init Config)

    import os
    
    copies = {
    	"css": ["custom.css"]
    }
    copies[os.path.join("js", "core")] = ["data.js"]
    syms = {
    	"html": ["docs"],
    	"js": ["docs"]
    }

# Front (JS Config)

## core.config.ctdocs
### Import line: 'CT.require("core.config");'
    {
    }