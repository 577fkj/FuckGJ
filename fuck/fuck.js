function GetQueryValue(queryName) {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) { return pair[1]; }
    }
    return null;
}

var money = GetQueryValue("m");
if (money == null) {
    document.getElementById("money").innerHTML = "900.00"
} else {
    document.getElementById("money").innerHTML = money
}