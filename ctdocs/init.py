import os

copies = {
	"css": ["custom.css"]
}
copies[os.path.join("js", "core")] = ["data.js"]
syms = {
	"html": ["docs"],
	"js": ["docs"]
}