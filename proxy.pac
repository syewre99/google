function FindProxyForURL(url, host) {
    // List of domains to use DoH for
    var dohDomains = [
        ".google.com",
        ".youtube.com",
        ".facebook.com"
    ];

    // Use a specific proxy for the listed domains
    for (var i = 0; i < dohDomains.length; i++) {
        if (dnsDomainIs(host, dohDomains[i])) {
            // Change PROXY_IP:PORT to the actual proxy IP and port you want to use
            return "HTTPS PROXY_IP:PORT";
        }
    }

    // Default to direct connection for other domains
    return "DIRECT";
}
