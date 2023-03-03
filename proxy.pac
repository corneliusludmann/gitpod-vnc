function FindProxyForURL(url, host) {
	if (shExpMatch(host, "*.sdm.network")) {
		return "PROXY 127.0.0.1:65230";
	}
	return "DIRECT";
}