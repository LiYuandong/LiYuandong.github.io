var proxy = "PROXY 171.217.104.162:7777";

function FindProxyForURL(url, host) {
    url = url.toLowerCase();
    host = host.toLowerCase();
    if (shExpMatch(url, "*mobimedical*") || shExpMatch(url, "*motherchildren*")) {
        return proxy;
    }
    ;
    return "DIRECT";
}
