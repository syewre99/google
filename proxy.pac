function FindProxyForURL(url, host) {
    // Define proxy servers
    var proxy1 = "PROXY proxy1.example.com:8080";
    var proxy2 = "PROXY proxy2.example.com:8080";
    var direct = "DIRECT";

    // Optimize based on destination domain
    if (dnsDomainIs(host, ".fastsite.com")) {
        return proxy1;
    } else if (dnsDomainIs(host, ".anothersite.com")) {
        return proxy2;
    } else {
        return direct;
    }
}
