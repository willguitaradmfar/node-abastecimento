module.exports = function(app, config, passport) {

	// commit.sh cp-resources files gerar model README.md test xslt
	// commit.sh cp-resources files gerar model README.md test xslt VIEW DO SITE PUBLICO
	// commit.sh cp-resources files gerar model README.md test xslt
	app.get(config.public.url.site, function(req, res) {
		console.log(req.user);

		res.render('site/index', {
			config: config.public,
			env: config.env,
			session: req.user
		});
	});

	
};