function FindProxyForURL(url, host) {
    // Cloudflare DNS addresses
    var dns1 = "1.1.1.1";
    var dns2 = "1.0.0.1";

    // Direct all traffic through the specified DNS servers
    if (dnsResolve(host) == dns1 || dnsResolve(host) == dns2) {
        return "DIRECT";
    }

    // Default proxy configuration (no proxy)
    return "DIRECT";
}
