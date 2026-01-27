const mod = {

	handle (req, res, next) {
		const root = req.protocol + '://' + req.get('host');

		if (req.url.toLowerCase().match('/.well-known/webfinger'))
			return res.json({
				links: [{
					rel: 'remotestorage',
					href: root + '/storage',
					type: 'draft-dejong-remotestorage-01',
				}],
			});

		if (req.headers.authorization)
			return (() => {
				return res.status(200).send('OK');
			})();

		return res.status(401).send('Unauthorized');
	},

};

export default mod;
