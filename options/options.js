chrome.storage.sync.get({"all": false},
    function(x) {
        document.getElementById("all").checked = x.all;
        document.getElementById("progressBars").checked = !x.all;
    })

for (i = 0; i < 2; i++) {
    document.getElementsByTagName("input")[i].addEventListener("click", setOptions);
};

function setOptions() {
    chrome.storage.sync.set({"all": document.getElementById("all").checked});
}
    