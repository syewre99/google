function FindProxyForURL(url, host) {
    // Define the DNS over HTTPS server
    var dohServer = "https://cloudflare-dns.com/dns-query";

    // Define which domains you want to use the proxy for
    if (shExpMatch(host, "*")) {
        return "HTTPS " + dohServer;
    }

    // Default return
    return "DIRECT";
}
