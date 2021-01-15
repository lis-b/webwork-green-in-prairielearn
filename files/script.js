chrome.storage.sync.get({"all": true},
    function(x) {
        if (x.all) {
            var link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("type", "text/css");
            link.setAttribute("href", chrome.runtime.getURL("files/otherElements.css"));
            document.documentElement.appendChild(link);
        }
    })