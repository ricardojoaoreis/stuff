function FindProxyForURL(url, host) {
   if (dnsDomainIs(host, "acm.org") ||
	dnsDomainIs(host, "springerlink.com") ||
	dnsDomainIs(host, "springer.com") ||
	dnsDomainIs(host, "sciencedirect.com") || 
	dnsDomainIs(host, "cd.ist.utl.pt") || 
	dnsDomainIs(host, "b-on.pt") || 
	dnsDomainIs(host, "acs.org") || 
	dnsDomainIs(host, "journals.aip.org") || 
	dnsDomainIs(host, "arjournals.annualreviews.org") || 
	dnsDomainIs(host, "epnet.com") || 
	dnsDomainIs(host, "rsc.org") || 
	dnsDomainIs(host, "iop.org") || 
	dnsDomainIs(host, "csa.org") || 
	dnsDomainIs(host, "siam.org") || 
	dnsDomainIs(host, "interscience.wiley.com") || 
	dnsDomainIs(host, "wiley.com") || 
	dnsDomainIs(host, "isiknowledge.com") || 
	dnsDomainIs(host, "isiwebofknowledge.com") || 
	dnsDomainIs(host, "scirus.com") || 
	dnsDomainIs(host, "reitoria.utl.pt") || 
	dnsDomainIs(host, "zentralblatt-math.org") || 
	dnsDomainIs(host, "ieeexplore.ieee.org") || 
	dnsDomainIs(host, "scholar.google.pt")) {
	return "PROXY proxy.ist.utl.pt:3128 ; DIRECT"
   }

   return "DIRECT";
}

