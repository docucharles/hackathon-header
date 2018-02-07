var express = require('express');
var router = express.Router();

/* GET headers page. */
router.get('/', function(req, res, next) {
  res.render('index', {
	"topBar": [
		{
			"text": "Access Documents",
			"data-ga": "navigation|top|access documents",
			"url": "https://www.docusign.net/Member/authenticate.aspx",
			"className": "first leaf parent-item",
			"role": "menuitem"
		},
		{
			"text": "Contact Sales",
			"data-ga": "navigation|top|contact sales",
			"url": "https://www.docusign.com/contact-sales",
			"className": "leaf parent-item",
			"role": "menuitem"
		},
		{
			"text": "Sales: 1-877-720-2040",
			"data-ga": "navigation|top|call sales",
			"url": "tel:+18777202040",
			"className": "last leaf parent-item",
			"role": "menuitem"
		}
	]
  });
});

module.exports = router;