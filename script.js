function r() { 
    document.getElementById("res").innerHTML = marked.parse(document.getElementById("codeeditor").value)
    hljs.highlightAll()
}

function copy() { 
    navigator.clipboard.writeText(document.getElementById("res").innerHTML)
}