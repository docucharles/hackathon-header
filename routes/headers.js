var express = require('express');
var router = express.Router();

/* GET headers page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Headers',
  	topBar: [
  		{
  			text: "Access Documents",
  			url: "https://www.docusign.net/Member/authenticate.aspx",
  			dataGa: "navigation|top|access documents",
  			role: "menuitem",
  			className: "first leaf parent-item"
  		},
  		{
  			text: "Contact Sales",
  			url: "https://www.docusign.com/contact-sales",
  			dataGa: "navigation|top|contact sales",
  			role: "menuitem",
  			className: "leaf parent-item"
  		},
  		{
  			text: "Sales: 1-877-720-2040",
  			url: "tel:+18777202040",
  			dataGa: "navigation|top|call sales",
  			role: "menuitem",
  			className: "last leaf parent-item"
  		}
  	],
  	commercial: [
  		{
  			text: "Free Trial",
  			url: "https://go.docusign.com/o/trial/?tgr=com-trial-Header",
  			dataGa: "navigation|cta|free trial",
  			className: "btn-yellow btn btn-small"
  		},
  		{
  			text: "LOG IN",
  			url: "https://www.docusign.com/login",
  			dataGa: "navigation|cta|login",
  			className: "btn-white btn btn-small"
  		}
  	]
  });
});

module.exports = router;