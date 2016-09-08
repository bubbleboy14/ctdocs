CT.require("CT.all");
CT.require("core");
CT.require("core.data");

CT.onload(function() {
	CT.initCore();
	var md2ht = function(line) {
		if (line.startsWith("\t"))
			line = line.replace(/\t/g, "    ");
		if (line.startsWith("###")) {
			return CT.dom.node(line.split("# ")[1], "div", "big");
		} else if (line.startsWith("##")) {
			return CT.dom.node(line.split("# ")[1], "div", "bigger");
		} else if (line.startsWith("#")) {
			return CT.dom.node(line.split("# ")[1], "div", "biggest");
		} else if (line.startsWith(" ")) {
			var len = line.length,
				line = line.trimLeft();
			return [CT.dom.pad(len - line.length), CT.dom.node(line, "span")];
		}
		return line || CT.dom.br();
	}, processSection = function(section) {
		section.children.forEach(function(child) {
			child.content = child.content.split("\n").map(md2ht);
		});
		return section;
	}, content = CT.dom.node(null, null, "ctcontent2"),
		clist = CT.dom.node(CT.panel.accordion(core.data.map(processSection), function(section) {
			CT.dom.setContent(content, section.content);
		}), "div", "ctlist2");
	CT.dom.setContent("ctmain", [clist, content]);
	clist.firstChild.expand();
});