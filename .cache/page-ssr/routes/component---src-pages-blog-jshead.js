exports.id = "component---src-pages-blog-jshead";
exports.ids = ["component---src-pages-blog-jshead"];
exports.modules = {

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Header = ({
  posts
}) => {
  const {
    0: searchInput,
    1: setSearchInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const handleChange = e => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    posts.filter(post => {
      return post.title.match(searchInput);
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      margin: 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Search here",
    onChange: handleChange,
    value: searchInput
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Social Icons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Logo"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);



const Container = ({
  children
}) => {
  console.log(children);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "main"
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags */ "./src/components/tags.js");


const Sidebar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    class: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    style: {
      width: 250
    },
    src: "/static/evilsaint_shield_logo.png",
    alt: "Logo",
    title: "Logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    id: "side-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/",
    className: "home-link"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/about",
    className: "about-link"
  }, "About us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/blog",
    className: "blog-link"
  }, "Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/articles",
    className: "portfolio-link"
  }, "Articles")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/tutorials",
    className: "portfolio-link"
  }, "Tutorials")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/ctfs",
    className: "portfolio-link"
  }, "CTFs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/books",
    className: "blog-link"
  }, "Books")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/contact",
    className: "contact-link"
  }, "Contact Me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/courses",
    className: "blog-link"
  }, "Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/portfolio",
    className: "portfolio-link"
  }, "Portfolio")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tags__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/components/tags.js":
/*!********************************!*\
  !*** ./src/components/tags.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_310218920_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/310218920.json */ "./public/page-data/sq/d/310218920.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_create_tags_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/create-tags-set */ "./src/utils/create-tags-set.js");




const Tags = () => {
  const tags = _public_page_data_sq_d_310218920_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const tagsArr = (0,_utils_create_tags_set__WEBPACK_IMPORTED_MODULE_3__["default"])(tags);
  const sortedTagsArr = Array.from(tagsArr).join(" ").split(" ").filter(el => el != "").sort();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      marginRight: 10
    }
  }, sortedTagsArr.map(tag => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: `/tags/${tag}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "tags"
  }, tag, " "))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tags);

/***/ }),

/***/ "./src/pages/blog.js?export=head":
/*!***************************************!*\
  !*** ./src/pages/blog.js?export=head ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");




const BlogPage = ({
  data
}) => {
  var _data$site$siteMetada;
  const siteTitle = ((_data$site$siteMetada = data.site.siteMetadata) === null || _data$site$siteMetada === void 0 ? void 0 : _data$site$siteMetada.title) || `Title`;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMdx.nodes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    posts: posts
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus consequat diam, non fringilla ante faucibus vel. Etiam sed condimentum elit.")), posts.map(post => {
    const title = post.frontmatter.title || post.fields.slug;
    const tag = post.frontmatter.tags && post.frontmatter.tags.includes(",") ? post.frontmatter.tags.split(",") : post.frontmatter.tags;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card",
      key: post.fields.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "card-link",
      to: `.${post.fields.slug}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
      className: "card-title"
    }, title), tag ? Array.isArray(tag) ? tag.map(tag => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "tags"
    }, " ", tag, " ")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "tags"
    }, " ", tag, " ") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card-date"
    }, post.frontmatter.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "card-description"
    }, post.frontmatter.description));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);
const pageQuery = "2335596421";

/***/ }),

/***/ "./src/utils/create-tags-set.js":
/*!**************************************!*\
  !*** ./src/utils/create-tags-set.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTagsSet(tags) {
  if (!tags.allMdx) return 0;
  const tagsArrObj = tags.allMdx.nodes.map(obj => obj.frontmatter.tags ? obj.frontmatter.tags.split(",") : null);
  const tagsArr = [];
  for (let i = 0; i < tagsArrObj.length; i++) {
    if (tagsArrObj[i]) tagsArrObj[i].map(tag => tagsArr.push(tag));
  }
  const uniqueTagsSet = new Set(tagsArr);
  return uniqueTagsSet;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTagsSet);

/***/ }),

/***/ "./src/components/style.css":
/*!**********************************!*\
  !*** ./src/components/style.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./public/page-data/sq/d/310218920.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/310218920.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"My Online Portfolio"}},"allMdx":{"nodes":[{"fields":{"slug":"/git-error-fatal-protocol-error-bad-line-length-character"},"excerpt":"On the weekend I ran into an problem with Git that couldnt debug fatal: protocol error: bad line length character: Warn\\n\\n\\nhttps…","frontmatter":{"date":"5th June 2022 ","title":"Git Error - fatal: protocol error: bad line length character","description":"","tags":"git"}},{"fields":{"slug":"/reporting-in-english-for-non-natives"},"excerpt":"When looking at the analytics for evilsaint.com, it always surprises me just how wide an audience this website receives! As a native English…","frontmatter":{"date":"7th January 2022 ","title":"Reporting in English for non-natives","description":"Reporting in English for non-natives","tags":"reporting"}},{"fields":{"slug":"/hashcat-now-offers-auto-detection"},"excerpt":null,"frontmatter":{"date":"2nd October 2021 ","title":"Hashcat Now Offers Auto Detection","description":"The latest edition of Hashcat now has an auto-detect mode built-in. If you pass a hashes file to Hashcat with no additional options, it will try to detect the hash types. It is a new feature, and so you will need a recent copy of Hashcat to utilise this feature.","tags":"hashcat"}},{"fields":{"slug":"/3-des-support-for-open-ssl"},"excerpt":"git clone https://github.com/drwetter/testssl.sh/ /opt cd /opt/testssl.sh/bin\\ncp openssl.Linux.x86_64 /usr/bin/\\necho \\"export OPENSSL_CONF…","frontmatter":{"date":"17th August 2021 ","title":"3DES Support For OpenSSL","description":"","tags":"ssl, tls"}},{"fields":{"slug":"/error-importing-to-notion"},"excerpt":"consultant@DESKTOP-CFSRHKG MINGW64 ~/Desktop/bkup/finish $ file Access\\\\ Tokens-1.md Access Tokens-1.md: Unicode text, UTF-16, little-endian…","frontmatter":{"date":"13th August 2021 ","title":"Error Importing To Notion","description":"productivity","tags":"productivity"}},{"fields":{"slug":"/why-can-i-not-delete-an-audible-original-podcast"},"excerpt":null,"frontmatter":{"date":"11th August 2021 ","title":"Why Can I Not Delete An Audible Original Podcast","description":"Deleting an Aubile Original Podcast","tags":"audible"}},{"fields":{"slug":"/finding-out-what-x-conf-setting"},"excerpt":"If you often find yourself configuring Xfce then this tip might be for! Xfce or XFCE (pronounced as four individual letters) is a free and…","frontmatter":{"date":"1st July 2021 ","title":"Finding Out What XConf Setting","description":"Finding out what xconf settings blog","tags":null}},{"fields":{"slug":"/disable-parrot-os-updater-on-kde"},"excerpt":null,"frontmatter":{"date":"28th April 2021 ","title":"Disable Parrot OS Updater On KDE","description":"","tags":"kde, parrot-os"}},{"fields":{"slug":"/hp-smart-app-forcing-account-creation-to-use-basic-functionality"},"excerpt":null,"frontmatter":{"date":"21st April 2021 ","title":"HP Smart App Forcing Account Creation To Use Basic Functionality","description":"Remote HP Smart App","tags":null}},{"fields":{"slug":"/app-wiz-cpl-vs-apps-and-features"},"excerpt":"Appwiz.cpl is a run command shortcut to open the Add/Remove Programs or Uninstall a Program list on Microsoft Windows XP, Vista, 7, 8, and…","frontmatter":{"date":"21st April 2021 ","title":"AppWiz.cpl vs Apps and Features","description":"","tags":null}},{"fields":{"slug":"/docker-down-again"},"excerpt":null,"frontmatter":{"date":"15th April 2021 ","title":"Docker Down Again","description":"","tags":"docker"}},{"fields":{"slug":"/i-must-learn-to-check-status-docker-com"},"excerpt":null,"frontmatter":{"date":"14th April 2021 ","title":"I must learn to check status.docker.com","description":"","tags":"docker"}},{"fields":{"slug":"/appending-dates-to-filenames-in-cron-jobs"},"excerpt":null,"frontmatter":{"date":"29th March 2021 ","title":"Appending Dates To Filenames in Cron Jobs","description":"","tags":null}},{"fields":{"slug":"/v-mware-workstation-cannot-connect-to-the-virtual-machine"},"excerpt":null,"frontmatter":{"date":"23rd March 2021 ","title":"VMware Workstation cannot connect to the virtual machine","description":"","tags":"vmware, building-labs"}},{"fields":{"slug":"/error-dumping-postgres-database"},"excerpt":null,"frontmatter":{"date":"21st March 2021 ","title":"Error Dumping Postgres Database","description":"","tags":"postgres"}},{"fields":{"slug":"/hostnames-for-setting-up-labs"},"excerpt":"When setting up a pentest lab, one of the most important decisions you need to make is choosing a scheme for your machine names. The below…","frontmatter":{"date":"21st March 2021 ","title":"Hostnames For Setting Up Labs","description":"","tags":null}},{"fields":{"slug":"/enable-ssh-mac-os-x"},"excerpt":null,"frontmatter":{"date":"17th March 2021 ","title":"Enable SSH Mac OS X","description":"","tags":"ssh, macosx"}},{"fields":{"slug":"/resetting-the-nessus-password-on-kali-linux-or-parrot-os"},"excerpt":null,"frontmatter":{"date":"17th March 2021 ","title":"Resetting The Nessus Password On Kali Linux Or Parrot OS","description":"","tags":"nessus"}}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-blog-jshead.js.map