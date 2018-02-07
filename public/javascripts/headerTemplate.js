var headerTemplate = `<header class="main new-header header-modern resize-processed">
  <div class="header-top-bar">
    <div class="container">
      <div class="row">
        <div class="secondary-menu-container col-md-12 show-desktop" style="display: none">
          <div class="secondary-menu panel-panel">
            <div class="panel-pane pane-block pane-menu-menu-secondary-menu-new">
              <div class="pane-content">
                <ul class="menu" role="menu">
                  <li class="first leaf parent-item"><a href="https://www.docusign.net/Member/authenticate.aspx" data-ga="navigation|top|access documents" role="menuitem">Access Documents</a></li>
                  <li class="leaf parent-item"><a href="https://www.docusign.com/contact-sales" data-ga="navigation|top|contact sales" role="menuitem">Contact Sales</a></li>
                  <li class="last leaf parent-item"><a href="tel:+18777202040" data-ga="navigation|top|call sales" role="menuitem">Sales: 1-877-720-2040</a></li>
                </ul>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <nav class="header-bottom-bar sticky-bar" id="sticky-navigation">
    <div class="container">
      <div class="row">
        <div class="logo col-md-2 panel-panel">
          <div class="panel-pane pane-pane-header">
            <div class="pane-content">
              <a href="https://www.docusign.com/" title="DocuSign" rel="home">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 117 32.92" enable-background="new 0 0 363.17 102.177" xml:space="preserve"><path class="ltr-d" d="M0,30.47H6c5,0,9.43-2.92,9.43-8.34,0-6.13-4.52-8.43-9.93-8.43H0V30.47M3.69,17.11H5.88c3.12,0,5.76,1.54,5.76,4.84,0,3.81-2.58,5.12-6,5.12H3.69Z" transform="translate(0 -7.54)"></path><path class="ltr-o" d="M16.28,24.71c0,3.68,2.84,6,6.39,6s6.4-2.37,6.4-6-2.84-6-6.4-6-6.39,2.37-6.39,6m3.55,0a2.69,2.69,0,0,1,2.46-2.91h.38a2.69,2.69,0,0,1,2.84,2.91,2.7,2.7,0,0,1-2.84,2.92,2.69,2.69,0,0,1-2.84-2.92" transform="translate(0 -7.54)"></path><path class="ltr-c" d="M40.57,20.22a5.76,5.76,0,0,0-4.1-1.54c-3.56,0-6.39,2.37-6.39,6s2.84,6,6.39,6a5.76,5.76,0,0,0,4.1-1.54l-2.35-2.47a2.27,2.27,0,0,1-1.73.88,2.69,2.69,0,0,1-2.84-2.92,2.69,2.69,0,0,1,2.84-2.91,2.19,2.19,0,0,1,1.73.88l2.35-2.46" transform="translate(0 -7.54)"></path><path class="ltr-u" d="M52.7,19H49.14v5.73c0,1.5-.28,2.94-2.13,2.94s-1.84-1.73-1.84-3V19H41.61V25.3c0,3.08.66,5.45,4.27,5.45a3.72,3.72,0,0,0,3.36-1.85h0v1.56H52.7V18.93" transform="translate(0 -7.54)"></path><rect class="dash-1" x="53.61" y="21.94" width="5.63" height="1.16"></rect><rect class="dash-2" x="61.86" y="21.94" width="5.63" height="1.16"></rect><rect class="dash-3" x="70.12" y="21.94" width="5.63" height="1.16"></rect><rect class="dash-4" x="78.37" y="21.94" width="5.63" height="1.16"></rect><rect class="dash-5" x="86.62" y="21.94" width="5.63" height="1.16"></rect><rect class="dash-6" x="94.87" y="21.94" width="5.63" height="1.16"></rect><rect class="dash-7" x="103.12" y="21.94" width="5.63" height="1.16"></rect><rect class="dash-8" x="111.37" y="21.94" width="5.63" height="1.16"></rect><path class="ltr-sign" d="M85.07,27.76c-.61-.61,5.56-5.54,7.42-5.29-.71,2.14-6.81,5.9-7.42,5.29m7.26,2.05a34.7,34.7,0,0,0,3.18-7.66c0-1.39-1.26-2.12-2.62-2.12-4.47,0-11.68,7.62-13.2,7.62-1.73,0,.92-3.65.92-5.08,0-.95-.85-1.93-1.53-1.93-1.32,0-5.49,4-8.22,4.88a6.14,6.14,0,0,0,.92-2.74c0-4.88-13.83-3-13.83-5.76,0-2.46,8.65-6.7,13.72-6.7.71,0,5.38.31,5.38,1.93,0,.61-1,.81-1,1.42s.51.71,1.12.71a1.65,1.65,0,0,0,1.52-1.83c0-4.14-3.6-5-6.5-5-7.49,0-16.36,6.5-16.36,9.45,0,3.86,12.6,3.15,12.6,6.61,0,4.16-13.51,7.92-13.51,8.94s.72.92,1.53.92c5.49,0,19.91-9.15,21.13-10.37.1,2.13-.8,4.16-.8,5.07s.7,2.15,1.73,2.15,2.54-1.53,4.78-2.74c-.1.71.51,1.83,1.32,1.83,1.73,0,7-4.27,8-5a12.05,12.05,0,0,1-2.2,5,6.54,6.54,0,0,0-1.73-.22c-2.1,0-7.9,6.14-7.9,9,0,1.12.61,2.24,1.73,2.24,1.55,0,7.15-4.61,9.22-9.31.91.1,2.39.78,2.39.06s-1-1.2-1.78-1.4M83,38c-.36,0-.58-.16-.58-1,0-2.61,5.44-6.31,7.33-6.31C88.65,33.16,84,38,83,38M81.24,15a1.27,1.27,0,1,1,2.54,0,1.27,1.27,0,1,1-2.54,0m17,9.85c-.71.92-2.54,3-2.54,3.86s.41,1.32,1,1.32c1.52,0,6.5-6,8.84-6,1.73,0-1.11,6.2,2.65,6.2,1.36,0,5.91-3,5.91-4.75,0-.31-.32-.84-.73-.84-.24,0-3.35,3.76-4.67,3.76-1.12,0,0-2.33,0-3.86s-.25-2.95-1.83-2.95c-2.13,0-5.19,2.74-5.89,3.15a2.71,2.71,0,0,0,.41-1.32,2.05,2.05,0,0,0-1.83-1.73c-.7,0-4.46,1.93-4.46,4.4,0,.61,2.23-1.55,3.14-1.24" transform="translate(0 -7.54)"></path><path class="symb-registered" d="M113.9,36.36h.44v-1h.32l.62,1h.46l-.62-1a.58.58,0,0,0,.58-.66c0-.46-.27-.72-.84-.72h-.92v2.39m.44-2h.32c.27,0,.58,0,.58.33s-.3.33-.58.33h-.32Zm-1.73.83a2.09,2.09,0,1,0,2.11-2.06h0a2.09,2.09,0,0,0-2.08,2.09m.37,0a1.73,1.73,0,1,1,1.73,1.73A1.73,1.73,0,0,1,113,35.21" transform="translate(0 -7.54)"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div id="hamburger" class="hamburger-new hide-desktop jquery-once-1-processed"><span></span><span></span><span></span><span></span></div>
        <div class="col-xs-12 navigation-bar">
          <div class="commercial-buttons panel-panel">
            <div class="panel-pane pane-fieldable-panels-pane pane-current-1241 commercial-primary-cta pane-bundle-mini-cta">
              <div class="pane-content">
                <div class="fieldable-panels-pane">
                  <a href="https://go.docusign.com/o/trial/?tgr=com-trial-Header" class="btn-yellow btn btn-small" data-ga="navigation|cta|free trial">Free Trial</a>  
                </div>
              </div>
            </div>
            <div class="panel-separator"></div>
            <div class="panel-pane pane-fieldable-panels-pane pane-current-1556 us-login-button pane-bundle-mini-cta" id="us-login-button">
              <div class="pane-content">
                <div class="fieldable-panels-pane">
                  <a href="https://www.docusign.com/login" class="btn-white btn btn-small" data-ga="navigation|cta|login">LOG IN</a>  
                </div>
              </div>
            </div>
            <div class="panel-separator"></div>
            <div class="panel-pane pane-custom pane-2">
              <div class="pane-content">
                <ul style="padding-left:12px; margin-top:-5px;">
                  <li style="float: left;"><a data-ga="navigation|top|access documents" href="https://www.docusign.net/Member/authenticate.aspx">Access Documents</a></li>
                  <li style="float: left;"><a data-ga="navigation|top|contact sales" href="https://www.docusign.com/contact-sales" style="">Contact Sales</a></li>
                  <li style="float: left;"><a data-ga="navigation|top|call sales" href="tel:+18777202040">1-877-720-2040</a></li>
                </ul>  
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 navigation-container show-desktop" style="display: none">
          <div class="primary-menu panel-panel no-submenu">
            <div class="panel-pane pane-block pane-menu-menu-main-menu-modern-us">
              <div class="pane-content">
                <ul class="menu" role="menu">
                  <li class="first expanded parent-item"><a role="menuitem" class="nolink">Products</a>
                    <ul class="menu" role="menu">
                      <li class="first leaf"><a href="https://www.docusign.com/products/electronic-signature" data-ga="navigation|products|electronic signature" role="menuitem">Electronic Signature</a></li>
                      <li class="leaf"><a href="https://www.docusign.com/products/payments" data-ga="navigation|products|payments" role="menuitem">Payments</a></li>
                      <li class="leaf"><a href="https://www.docusign.com/features-and-benefits/mobile" data-ga="navigation|products|mobile" role="menuitem">Mobile</a></li>
                      <li class="leaf"><a href="https://www.docusign.com/products/integrations" data-ga="navigation|products|integrations" role="menuitem">Integrations</a></li>
                      <li class="leaf"><a href="https://www.docusign.com/developer-center/api-overview" data-ga="navigation|products|esignature api" role="menuitem" title="eSignature API">eSignature API</a></li>
                      <li class="last leaf"><a href="https://www.docusign.com/features-and-benefits/services-support" data-ga="navigation|products|services" role="menuitem">Services</a></li>
                    </ul>
                  </li>
                  <li class="expanded multi-level-parent parent-item"><a role="menuitem" class="nolink">Solutions</a>
                    <ul class="menu" role="menu">
                      <li class="first expanded menu-title"><a role="menuitem" class="nolink">SIZE OF BUSINESS</a>
                        <ul class="menu" role="menu">
                          <li class="first leaf"><a href="https://www.docusign.com/features-and-benefits/enterprises" data-ga="navigation|solutions|enterprise" role="menuitem">Enterprise</a></li>
                          <li class="leaf"><a href="https://www.docusign.com/features-and-benefits/small-and-medium-sized-businesses" data-ga="navigation|solutions|smb" role="menuitem">SMB</a></li>
                          <li class="last leaf"><a href="https://www.docusign.com/features-and-benefits/individuals" data-ga="navigation|solutions|individual" role="menuitem">Individual</a></li>
                        </ul>
                      </li>
                      <li class="expanded menu-title"><a role="menuitem" class="nolink">INDUSTRIES</a>
                        <ul class="menu" role="menu">
                          <li class="first leaf"><a href="https://www.docusign.com/industries/real-estate" data-ga="navigation|solutions|real estate" role="menuitem">Real Estate</a></li>
                          <li class="leaf"><a href="https://www.docusign.com/industries/financial-services" data-ga="navigation|solutions|financial services" role="menuitem">Financial Services</a></li>
                          <li class="leaf"><a href="https://www.docusign.com/solutions/industries/insurance" data-ga="navigation|solutions|insurance" role="menuitem">Insurance</a></li>
                          <li class="leaf"><a href="https://www.docusign.com/solutions/industries/healthcare" data-ga="navigation|solutions|healthcare" role="menuitem">Healthcare</a></li>
                          <li class="last leaf"><a href="https://www.docusign.com/solutions" data-ga="navigation|solutions|see all" role="menuitem">SEE ALL</a></li>
                        </ul>
                      </li>
                      <li class="expanded menu-title"><a role="menuitem" class="nolink">DEPARTMENTS</a>
                        <ul class="menu" role="menu">
                          <li class="first leaf"><a href="https://www.docusign.com/solutions/departments/sales" data-ga="navigation|solutions|sales" role="menuitem">Sales</a></li>
                          <li class="leaf"><a href="https://www.docusign.com/solutions/departments/human-resources" data-ga="navigation|solutions|human resources" role="menuitem">Human Resources</a></li>
                          <li class="leaf"><a href="https://www.docusign.com/solutions/departments/procurement" data-ga="navigation|solutions|procurement" role="menuitem">Procurement</a></li>
                          <li class="leaf"><a href="https://www.docusign.com/solutions/industries/legal" data-ga="navigation|solutions|legal" role="menuitem">Legal</a></li>
                          <li class="last leaf"><a href="https://www.docusign.com/solutions" data-ga="navigation|solutions|see all" role="menuitem">SEE ALL</a></li>
                        </ul>
                      </li>
                      <li class="last expanded menu-title"><a role="menuitem" class="nolink">DEVELOPERS AND PARTNERS</a>
                        <ul class="menu" role="menu">
                          <li class="first leaf"><a href="https://www.docusign.com/developer-center" data-ga="navigation|solutions|developer center" role="menuitem">Developer Center</a></li>
                          <li class="leaf"><a href="https://www.docusign.com/partners" data-ga="navigation|solutions|partner programs" role="menuitem">Partner Programs</a></li>
                          <li class="last leaf"><a href="https://docusigncommunity.force.com/partners/login" data-ga="navigation|solutions|partner portal" role="menuitem">Partner Portal</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="expanded parent-item no-left-margin"><a role="menuitem" class="nolink">Pricing</a>
                    <ul class="menu" role="menu">
                      <li class="first leaf"><a href="https://www.docusign.com/products-and-pricing" data-ga="navigation|pricing|general plans" role="menuitem">General Plans</a></li>
                      <li class="leaf"><a href="https://www.docusign.com/products-and-pricing/real-estate-editions" data-ga="navigation|pricing|real estate plans" role="menuitem">Real Estate Plans</a></li>
                      <li class="leaf"><a href="https://www.docusign.com/products-and-pricing/api-plans" data-ga="navigation|pricing|api plans" role="menuitem">API Plans</a></li>
                      <li class="last leaf"><a href="https://www.docusign.com/contact-sales" data-ga="navigation|pricing|contact sales" role="menuitem">Contact Sales</a></li>
                    </ul>
                  </li>
                  <li class="expanded parent-item"><a role="menuitem" class="nolink">Support</a>
                    <ul class="menu" role="menu">
                      <li class="first leaf"><a href="https://support.docusign.com/" data-ga="navigation|support|support center" role="menuitem">Support Center</a></li>
                      <li class="leaf"><a href="https://support.docusign.com/knowledgemarket" data-ga="navigation|support|knowledge market" role="menuitem">Knowledge Market</a></li>
                      <li class="leaf"><a href="https://support.docusign.com/docusignuniversity" data-ga="navigation|support|docusign university" role="menuitem">DocuSign University</a></li>
                      <li class="leaf"><a href="https://support.docusign.com/en/community" data-ga="navigation|support|community" role="menuitem">Community</a></li>
                      <li class="last leaf"><a href="https://trust.docusign.com" data-ga="navigation|support|trust center" role="menuitem">Trust Center</a></li>
                    </ul>
                  </li>
                  <li class="last expanded parent-item"><a role="menuitem" class="nolink">Resources</a>
                    <ul class="menu" role="menu">
                      <li class="first leaf"><a href="https://www.docusign.com/resources" data-ga="navigation|resources|resource center" role="menuitem">Resource Center</a></li>
                      <li class="leaf"><a href="https://secure.docusign.com/demo" data-ga="navigation|resources|demo" role="menuitem">Demo</a></li>
                      <li class="leaf"><a href="https://www.docusign.com/news-center" data-ga="navigation|resources|news center" role="menuitem">News Center</a></li>
                      <li class="leaf"><a href="https://www.docusign.com/customers" data-ga="navigation|resources|customer stories" role="menuitem">Customer Stories</a></li>
                      <li class="leaf"><a href="https://www.docusign.com/how-it-works/legality/global" data-ga="navigation|resources|legality guide" role="menuitem">Legality Guide</a></li>
                      <li class="leaf"><a href="https://www.docusign.com/company/events" data-ga="navigation|resources|events" role="menuitem">Events</a></li>
                      <li class="last leaf"><a href="https://www.docusign.com/blog/" data-ga="navigation|resources|blog" role="menuitem">Blog</a></li>
                    </ul>
                  </li>
                </ul>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="search-form-container panel-panel">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="panel-pane pane-block pane-dcs-search-search">
              <div class="pane-content">
                <div class="searchbox">
                  <form action="/" method="post" id="dcs-search-searchbox" accept-charset="UTF-8">
                    <div>
                      <div class="form-item form-type-textfield form-item-searchboxip">
                        <input placeholder="Search" class="form-control form-text search-box search-stuff form-text" type="text" id="edit-searchboxip" name="searchboxip" value="" size="15" maxlength="128">
                      </div>
                      <input class="form-submit search-submit form-submit" type="submit" id="edit-submit--2" name="op" value="Go">
                      <input type="hidden" name="form_build_id" value="form-7ox5nUSxBxl1Yp7Te-94Z8ZdKkQl5N1yxS3SxzfUIoM">
                      <input type="hidden" name="form_id" value="dcs_search_searchbox">
                    </div>
                  </form>
                </div>  
              </div>
            </div>
          <div id="search-close-btn" class="icon-close-thin show-desktop jquery-once-2-processed" style="display: none">Search</div>
        </div>
      </div>
    </div>
  </div>
  <div class="commercial-buttons panel-panel" style="display: none">
    <div class="panel-pane pane-fieldable-panels-pane pane-current-1241 commercial-primary-cta pane-bundle-mini-cta">
      <div class="pane-content">
        <div class="fieldable-panels-pane">
          <a href="https://go.docusign.com/o/trial/?tgr=com-trial-Header" class="btn-yellow btn btn-small" data-ga="navigation|cta|free trial">Free Trial</a>  
        </div>
      </div>
    </div>
    <div class="panel-separator"></div>
    <div class="panel-pane pane-fieldable-panels-pane pane-current-1556 us-login-button pane-bundle-mini-cta" id="us-login-button">
      <div class="pane-content">
        <div class="fieldable-panels-pane">
        <a href="https://www.docusign.com/login" class="btn-white btn btn-small" data-ga="navigation|cta|login">LOG IN</a>  
        </div>
      </div>
    </div>
    <div class="panel-separator"></div>
      <div class="panel-pane pane-custom pane-2">
        <div class="pane-content">
          <ul style="padding-left:12px; margin-top:-5px;">
            <li style="float: left;"><a data-ga="navigation|top|access documents" href="https://www.docusign.net/Member/authenticate.aspx">Access Documents</a></li>
            <li style="float: left;"><a data-ga="navigation|top|contact sales" href="https://www.docusign.com/contact-sales" style="">Contact Sales</a></li>
            <li style="float: left;"><a data-ga="navigation|top|call sales" href="tel:+18777202040">1-877-720-2040</a></li>
          </ul>  
        </div>
      </div>
    </div>
  </nav>
</header>`;

var bodyTag = document.getElementsByTagName('body')[0];

function insertCSS(url) {
  var link = document.createElement( "link" );
  link.href = url;
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";

  document.getElementsByTagName( "head" )[0].appendChild( link );
} 

function insertJS(url) {
  var script = document.createElement("script");
  script.src = url;
  script.id = "jquery";

  bodyTag.appendChild( script );
}

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}


insertCSS("https://www.docusign.com/sites/default/files/advagg_css/css__9XO1Tr4TJdBSNbpjQMWVOoNQhweWEh79CCMJHUjaY0I__jIu6szWpvWX62-1N-yzHhuxfhRN9riLXBy8iSYhHo8w__g9DnhmAtW_rsVEsHs8nwciM7eP_y1UISNVa6-mdoIxk.css");
insertCSS("https://www.docusign.com/sites/default/files/advagg_css/css__Oupz5n8qQ0o315IScov8NbGmkcJ1uprRapQ9RXNO8UY__05JIzqz5C9lL4lUQmm8CbCho6YGXc1yqPZ1cZPkzX4U__g9DnhmAtW_rsVEsHs8nwciM7eP_y1UISNVa6-mdoIxk.css");
insertJS("https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js");
insertJS("http://code.jquery.com/jquery-latest.min.js");
bodyTag.insertAdjacentHTML('afterbegin', headerTemplate);

document.getElementById('jquery')
   .addEventListener('load', function() {
    var $=jQuery;
    var $html = $('html'),
       $menu_button = $('#hamburger'),
          navClass = 'js-nav';

    if ($menu_button.length) {
     $menu_button.click( function(e) {
      e.preventDefault();
      if (!$html.hasClass(navClass)) {
          $html.addClass(navClass);
          $('.new-header .primary-menu .parent-item ').removeClass('expand');
        } else {
          $html.removeClass(navClass);
        }
     });
   }

   });

