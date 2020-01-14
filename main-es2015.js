(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-top min-height-full section-background pt-3\" id=\"about-us\">\n    <h3 class=\"text-center mt-3 title-text\">ABOUT US</h3>\n\n    <p class=\"mb-0 text-center pl-5 pr-5 pt-3 pb-4\">\n        Panchajanya pre - school, Learning through play is a primary objective of our team.\n        Our pre - school's journey started on 2016 and is likely to grow larger qucikly. We want our provision to\n        inspire active learning and ensure high levels of engagement from the children which's they interact with\n        activities of their choosing, helping us to build on an ethos of creativity and critical thinking we acheive\n        this by providing open ended achieve this by providing open ended resources that will not only engage the\n        children's interest but also creative stimulating challenges for them too. We provide ourselves on having just\n        the right balance of child imitated.\n    </p>\n\n    <h4 class=\"title-text text-center\">OUR MISSION</h4>\n    <div class=\"pl-5 pr-5 pt-4 pb-5\">\n        <h5 style=\"text-transform: uppercase;\">Pramote an environment that is FUN, healthy, Safe, Secure and Welcoming</h5>\n        <ul>\n            <li>Provide high quality care and education for all children Pre - School.</li>\n            <li>Associate closely with parents / care takers to meet the needs of each child and support with any difficulties that may arise.</li>\n            <li>Associate with parents to help children to learn through play and devlop mentally, physically and socially.</li>\n            <li>Add to the life and well being of our local community.</li>\n            <li>Add education value at every stage of student's development.</li>\n            <li>Provide opportunity for all children to develop their potential as individuals.  We acknowledge that each child is unique and consider their apecial needs and abilities.</li>\n            <li>We provide wide and varied learning environment with opportunities to explore, discover and build all the skills needed to prepare for the next step of learning.</li>\n            <li>Panchajanya educational and charitable trust, believes that the foundations for happy and creative learning are fostered.</li>\n        </ul>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"d-flex align-items-center justify-content-between w-100 p-2\">\n  <div class=\"col\">\n    <img src=\"../assets/images/panchajanya-brocher1.jpg\" class=\"logo-img col-2\">\n  </div>\n  <div id=\"web-header\" class=\"col d-flex align-items-center justify-content-center\">\n    <ul class=\"nav nav-pills w-100 d-flex align-items-center justify-content-between\" id=\"pills-tab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active home tab\"  data-toggle=\"pill\" routerLink=\"Home\" role=\"tab\"\n          aria-controls=\"pills-home\" >Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link about-us tab\"  data-toggle=\"pill\" routerLink=\"about-us\" role=\"tab\"\n          aria-controls=\"pills-profile\" >About Us</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link our-programs tab\"  data-toggle=\"pill\" routerLink=\"our-programs\" role=\"tab\"\n          aria-controls=\"pills-contact tab\">Our Programs</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link contact-us tab\" (click)=\"goToHome()\" style=\"cursor: pointer;\" data-toggle=\"pill\"  role=\"tab\"\n            aria-controls=\"pills-contact\">Contact Us</a>\n        </li>\n    </ul>\n  </div>\n  <div id=\"mobile-header\" class=\"hide\">\n    \n  </div>\n</header>\n\n<section class=\"position-relative min-height-full\">\n  <app-home *ngIf=\"isHome\"></app-home>\n  <router-outlet></router-outlet>\n</section>\n\n<footer class=\"d-flex align-items-center justify-content-between p-2\">\n  <div class=\"col d-flex align-items-center\">\n    <a class=\"pt-1 pb-1 pl-2 pr-2\" routerLink=\"Home\">Home</a>\n    <a class=\"pt-1 pb-1 pl-2 pr-2\" routerLink=\"about-us\">About Us</a>\n    <a class=\"pt-1 pb-1 pl-2 pr-2\" routerLink=\"our-programs\">Our Programs</a>\n    <!-- <a class=\"pt-1 pb-1 pl-2 pr-2\" routerLink=\"contact-us\">Contact Us</a> -->\n  </div>\n  <div class=\"col text-right\">\n    <p class=\"mb-0\">Copyright @ 2020.</p>\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-top\">\n    <h3>Contact Us</h3>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-top\">\n    <!-- Carousel -->\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n                <img class=\"d-block w-100\" src=\"../../assets/images/first-slide.jpg\" alt=\"First slide\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                    <h2>Education</h2 >\n                    <p class=\"mb-0\">is not preparation for life;</p>\n                    <p>Education is life itself</p>\n                </div>\n            </div>\n            <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" style=\"opacity: 0.7;\" src=\"../../assets/images/second-slide.jpg\" alt=\"Second slide\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                    <h2 style=\"color: #58e0da;\">The purpose</h2>\n                    <p class=\"mb-0\" style=\"color: #58e0da;\">of education is to replace an empty mind</p>\n                    <p style=\"color: #58e0da;\">with an open mind.</p>\n                </div>\n            </div>\n            <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" style=\"opacity: 0.7;\" src=\"../../assets/images/third-slide.jpg\" alt=\"Third slide\">\n                <div class=\"carousel-caption d-none d-md-block\">\n                    <h2 style=\"color: #ee0a0a;\">Children want</h2>\n                    <p style=\"color: #ee0a0a;\"  class=\"mb-0\">the same things we want. To laugh,to be challenged,</p>\n                    <p style=\"color: #ee0a0a;\">to be entertained, and delighted.</p>\n                </div>\n            </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n\n    <!-- what we offer -->\n    <section class=\"pt-5\" id=\"what-we-offer\">\n        <h3 class=\"text-center title-text\">WHAT WE OFFER</h3>\n        <div class=\"d-flex justify-content-between align-items-center pt-3\">\n            <div class=\"position-relative col m-4\">\n                <div class=\"position-absolute\" style=\"top: 0;\">\n                    <i class=\"fa fa-child icon\" style=\"padding: 1rem 1.5rem;\"></i>\n                    <div class=\"text w-100 p-3\" style=\"background-color: #f0c016;\">\n                        <p class=\"mt-3 title\">Child Kit</p>\n                        <p>We offer child kit of Nursery, LKG, UKG to build their early hood environment with safe and creative environment</p>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"position-relative col m-4\">\n                <div class=\"position-absolute\" style=\"top: 0;\">\n                    <i class=\"fa fa-lightbulb-o icon\" style=\"padding: 1rem 1.5rem;\"></i>\n                    <div class=\"text p-3\" style=\"background-color: #f08e16;\">\n                        <p class=\"mb-0 mt-3 title\">Teacher Sourcing</p>\n                        <p class=\"title\">and Selection</p>\n                        <p>We offer teachers training to help teaachers in thier future.</p>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"position-relative col m-4\">\n                <div class=\"position-absolute\" style=\"top: 0;\">\n                    <i class=\"fa fa-suitcase\"></i>\n                    <div class=\"text w-100 p-3\" style=\"background-color: #16cff0;\">\n                        <p class=\"mb-0 mt-3 title\">Market Expert </p>\n                        <p class=\"title\">Support</p>\n                        <p>We offer market expert support for the people who are willing to join education field.</p>\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"position-relative col m-4\">\n                <div class=\"position-absolute\" style=\"top: 0;\">\n                    <i class=\"fa fa-bullhorn icon\"></i>\n                    <div class=\"text w-100 p-3\" style=\"background-color: #1636f0;\">\n                        <p class=\"mt-3 title\">Auto Campaign</p>\n                        <p>We offer auto campaign to students and teachers to become a part of society.</p>\n                    </div>\n                </div>\n\n            </div>\n            <!-- <div></div>\n            <div></div>\n            <div></div> -->\n        </div>\n    </section>\n\n\n    <!-- Welcome To Our School -->\n    <section class=\"pt-5\" id=\"welcome-to-school\">\n        <h3 class=\"text-center title-text\">WELCOME TO OUR SCHOOL</h3>\n        <div class=\"d-flex p-5\">\n            <div class=\"col-5\">\n                <img src=\"../../assets/images/welcome-to-school.jpg\" style=\"max-width: 100%;margin: auto;\">\n            </div>\n            <div class=\"col\">\n                <p class=\"mt-3\">Panchajanya pre - school, Learning through play is a primary objective of our team.\n                    Our pre - school's journey started on 2016 and is likely to grow larger qucikly. We want our\n                    provision to\n                    inspire active learning and ensure high levels of engagement from the children which's they interact\n                    with\n                    activities of their choosing, helping us to build on an ethos of creativity and critical thinking we\n                    acheive\n                    this by providing open ended achieve this by providing open ended resources that will not only\n                    engage the\n                    children's interest but also creative stimulating challenges for them too.....</p>\n                <button (click)=\"goToAboutUs()\">Learn more....</button>\n            </div>\n        </div>\n    </section>\n\n    <!--  -->\n\n    <!-- Our Gallery -->\n    <section class=\"pt-5\" id=\"gallery\">\n        <h3 class=\"text-center title-text\">OUR GALLERY</h3>\n        <div class=\"ml-5 mt-5\">\n            <ngx-masonry-gallery [width]='250' [images]='images'></ngx-masonry-gallery>\n        </div>\n    </section>\n\n    <div data-to=\"300\" data-speed=\"1500\">A</div>\n\n    <!--Contact Us  -->\n    <section class=\"pt-5\" id=\"contact-us-box\">\n        <h3 class=\"text-center title-text\">CONTACT US</h3>\n        <div class=\"d-flex justify-content-center p-5\">\n            <div class=\"d-flex pr-5\">\n                <i class=\"fa fa-location-arrow mr-3\"></i>\n                <div>\n                    <p>Panchajanya Pre School</p>\n                    <p><b>Franchises :</b></p>\n                    <p>Sulla Near Hubli-580 023</p>\n                    <p>Dharwad</p>\n                </div>\n\n            </div>\n            <div class=\"d-flex pl-5 pr-5\">\n                <i class=\"fa fa-envelope mr-3\"></i>\n                <a href=\"emailto:panchajanyapreschool@gmail.com\">panchajanyapreschool@gmail.com</a>\n            </div>\n            <div class=\"d-flex flex-column pl-5\">\n                <div class=\"d-flex align-items-center\">\n                    <i class=\"fa fa-phone mr-3\"></i>\n                    <a href=\"tel:8217256578\" class=\"mb-0\">+91 8217256578</a>\n                </div>\n\n                <div class=\"d-flex align-items-center\">\n                    <i class=\"fa fa-phone mr-3\"></i>\n                    <a href=\"tel:7892748070\" class=\"mb-0\">+91 8217256578</a>\n                </div>\n\n                <div class=\"d-flex align-items-center\">\n                    <i class=\"fa fa-phone mr-3\"></i>\n                    <a href=\"tel:6362761615\" class=\"mb-0\">+91 8217256578</a>\n                </div>\n\n            </div>\n        </div>\n    </section>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/our-programs/our-programs.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/our-programs/our-programs.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-top min-height-full section-background pt-3\" id=\"our-programs-box\">\n    <h3 class=\"text-center mt-3 title-text\">OUR PROGRAMS</h3>\n    <div class=\"p-3 pl-4 pr-4\">\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                    aria-selected=\"true\">\n                    <i class=\"fa fa-child mr-2\"></i>\n                    <span>CHILD KIT</span>\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\"\n                    aria-controls=\"profile\" aria-selected=\"false\">\n                    <i class=\"fa fa-user mr-2\"></i>\n                    <span>TEACHERS KIT</span>\n                </a>\n            </li>\n        </ul>\n        <div class=\"tab-content p-3\" id=\"myTabContent\">\n            <div class=\"tab-pane fade show active \" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n                <div class=\"d-flex align-items-start\">\n                    <div class=\"left-content col-4\">\n                        <img src=\"../../assets/images/six.jpg\" class=\"img-fluid\">\n                    </div>\n                    <div class=\"right-content col\">\n                        <h4>Program Overview</h4>\n                        <p>Our school providing a pre-school development program for children to have a safe and richly\n                            simulating learning environment. Our school will help to have chlidrens a narturing and\n                            caring\n                            atmosphere, wide and variety of learning opportunities. Our program will help yourn child to\n                            build to confidence, creativeness and cognitive development.\n                        </p>\n                        <p>\n                            Providing a safe and simulating environment and a happy, friendly and a caring atmosphere. A\n                            specially tailored leading to approved learning outcomes. Providing individual care and\n                            attention made possible by a low ratio of teachers to students.\n                        </p>\n                        <p> Give your child the chance to interact with children live, play, and learn together. We\n                            provide opportunity for you and your family to be directly involved in the education of your\n                            child and the activities of the group. </p>\n\n                        <h4>We offer child kit for</h4>\n                        <div class=\"form-row d-flex align-items-center justify-content-center\">\n                            <div class=\"card p-3 m-3\" style=\"background-color: \t#C1AEDA;\">\n                                <p class=\"mb-0 text-center\" style=\"font-weight: 600;\">2.5 - 3.5 years</p>\n                                <p class=\"mb-0 text-center\" style=\"font-weight: 600;\">Nursery</p>\n                            </div>\n                            <div class=\"card p-3 m-3\" style=\"background-color: #72C6F3;\">\n                                <p class=\"mb-0 text-center\" style=\"font-weight: 600;\">3.5 - 4.5 years</p>\n                                <p class=\"mb-0 text-center\" style=\"font-weight: 600;\">LKG</p>\n                            </div>\n                            <div class=\"card p-3 m-3\" style=\"background-color: #EF9C9C;\">\n                                <p class=\"mb-0 text-center\" style=\"font-weight: 600;\">4.5 - 5.5 years</p>\n                                <p class=\"mb-0 text-center\" style=\"font-weight: 600;\">UKG</p>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"mt-3\">\n                    <h4 class=\"text-center\">Our Program Benifits</h4>\n                    <p style=\"text-transform: uppercase;font-weight:500;letter-spacing: 1px;margin-top: 1rem;\"\n                        class=\"text-center\">Educating the mind without educating the heart is no education\n                        at all.</p>\n                    <div class=\"benifits\">\n                        <div class=\"form-row\">\n                            <div class=\"text col benifits-card m-3\">\n                                <h5>Confidence</h5>\n                                <p>Our school method is designed to instill confidence in children by allowing them\n                                    to\n                                    accomplish tasks without interference. This is done through unique materials\n                                    with\n                                    controls of error which helps them keep working until they succeed. </p>\n                            </div>\n                            <div class=\"text col benifits-card m-3\">\n                                <h5>Problem Solving</h5>\n                                <p>Children are better able to resolve their own problems when they are allowed to work\n                                    uninterrupted on material until they can grasp it. This persistence makes them more\n                                    capable and less reliant on others as they progress into their future learning.</p>\n                            </div>\n                            <div class=\"text col benifits-card m-3\">\n                                <h5>Critical Thinking</h5>\n                                <p>Students in our pre school environment are encoraged to learn through discovery. This\n                                    allows them to pursue their own questions and research which are sparked by the\n                                    materials provided. This independence enhances critical thiniking skills.</p>\n                            </div>\n                        </div>\n                        <div class=\"form-row\">\n                            <div class=\"text col benifits-card m-3\">\n                                <h5>Creative</h5>\n                                <p> Theatre, music and art play a important role in the pre school environment. Students\n                                    are not marked on their ideas. They are able to pursue their own creative projects\n                                    without fear of judgemen, this allows for wider range of expression.\n                                </p>\n                            </div>\n                            <div class=\"text col benifits-card m-3\">\n                                <h5>Collabration</h5>\n                                <p>Our pre school students learn the values of respect for others, conflict resolution\n                                    and collabration in calm, peaceful environment. Classrooms are non-competitive\n                                    spaces where students help each other.</p>\n                            </div>\n                            <div class=\"text col benifits-card m-3\">\n                                <h5>Cognitive Development</h5>\n                                <p>During in our preschool, amazing changes happen in children's thinking skills as\n                                    their\n                                    memories are becoming stronger and this lead to\n                                    share their ideas in new and interesting ways. </p>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"tab-pane fade \" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n                <div class=\"d-flex align-items-start\">\n                    <div class=\"left-content col-4\">\n                        <img src=\"../../assets/images/teacher-training.png\" class=\"img-fluid\">\n                    </div>\n                    <div class=\"right-content col\">\n                        <h4>Program Overview</h4>\n                        <p>Our school providing a pre-school development program for children to have a safe and richly\n                            simulating learning environment. Our school will help to have chlidrens a narturing and\n                            caring\n                            atmosphere, wide and variety of learning opportunities. Our program will help yourn child to\n                            build to confidence, creativeness and cognitive development.\n                        </p>\n                        <p>\n                            Providing a safe and simulating environment and a happy, friendly and a caring atmosphere. A\n                            specially tailored leading to approved learning outcomes. Providing individual care and\n                            attention made possible by a low ratio of teachers to students.\n                        </p>\n                        <p> Give your child the chance to interact with children live, play, and learn together. We\n                            provide opportunity for you and your family to be directly involved in the education of your\n                            child and the activities of the group. </p>\n                    </div>\n                </div>\n                <div class=\"training-timings pt-3\">\n                    <h4 class=\"pt-5 text-center mb-4\">Training Schedule</h4>\n                    <p style=\"text-transform: uppercase;\" class=\"text-center\"><b>Our task, regarding creativity, is to\n                            help children climb\n                            their own mountains, as high as\n                            possible. No one can do more.</b></p>\n\n                    <div class=\"d-flex\">\n                        <div class=\"col\">\n                            <p class=\"text-center mb-4 mt-3\" style=\"font-weight: 600;\">6 days Pre Service Training</p>\n                            <div class=\"timeline\">\n                                <div class=\"container left\">\n                                    <div class=\"content\" style=\"background-color: \t#FAF9BA;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: black;\">Teacher Orientation</p>\n                                    </div>\n                                </div>\n                                <div class=\"container right\">\n                                    <div class=\"content\" style=\"background-color: #64090E;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">ECS - Early Childhood Stage (2\n                                            - 6 years)</p>\n                                    </div>\n                                </div>\n                                <div class=\"container left\">\n                                    <div class=\"content\" style=\"background-color:#020E39 ;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">Understanding academics plan\n                                            and activities</p>\n                                    </div>\n                                </div>\n                                <div class=\"container right\">\n                                    <div class=\"content\" style=\"background-color: #0FC49E;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">Curriculam and methodology</p>\n                                    </div>\n                                </div>\n                                <div class=\"container left\">\n                                    <div class=\"content\" style=\"background-color: #0A8100;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">Using TLMs</p>\n                                    </div>\n                                </div>\n                                <div class=\"container right\">\n                                    <div class=\"content\" style=\"background-color: #F3FF05;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: black;\">Teachers Motivation</p>\n                                    </div>\n                                </div>\n                                <div class=\"container left\">\n                                    <div class=\"content\" style=\"background-color: #F10903;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">Critical Thinking and\n                                            stratergies for enhancement</p>\n                                    </div>\n                                </div>\n                                <div class=\"container right\">\n                                    <div class=\"content\" style=\"background-color: #5D0888;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">Study skills stratergies to\n                                            teach your learners.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <p class=\"text-center mb-4 mt-3\" style=\"font-weight: 600;\">6 days In Service Training</p>\n                            <div class=\"timeline\">\n                                <div class=\"container left\">\n                                    <div class=\"content\" style=\"background-color: \t#FAF9BA;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: black;\">Using of Session Plan and\n                                            Child Work Books</p>\n                                    </div>\n                                </div>\n                                <div class=\"container right\">\n                                    <div class=\"content\" style=\"background-color: #64090E;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">PL - Playing through learning\n                                        </p>\n                                    </div>\n                                </div>\n                                <div class=\"container left\">\n                                    <div class=\"content\" style=\"background-color:#020E39 ;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">LSRW - phonics</p>\n                                    </div>\n                                </div>\n                                <div class=\"container right\">\n                                    <div class=\"content\" style=\"background-color: #0FC49E;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">Languages - Kannada, English,\n                                            Hindi</p>\n                                    </div>\n                                </div>\n                                <div class=\"container left\">\n                                    <div class=\"content\" style=\"background-color: #0A8100;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">learning EVS with funny</p>\n                                    </div>\n                                </div>\n                                <div class=\"container right\">\n                                    <div class=\"content\" style=\"background-color: #F3FF05;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: black;\">learning Art and Craft</p>\n                                    </div>\n                                </div>\n                                <div class=\"container left\">\n                                    <div class=\"content\" style=\"background-color: #F10903;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">How to tell stories and Rhymes\n                                        </p>\n                                    </div>\n                                </div>\n                                <div class=\"container right\">\n                                    <div class=\"content\" style=\"background-color: #5D0888;\">\n                                        <p class=\"mb-0 text-center\" style=\"color: white;\">Classroom management and\n                                            creative development/p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() {
        $('.tab').removeClass('active');
        $('.about-us').addClass('active');
        window.scrollTo(0, 0);
    }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _our_programs_our_programs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./our-programs/our-programs.component */ "./src/app/our-programs/our-programs.component.ts");






const routes = [
    {
        path: 'about-us',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
    },
    {
        path: 'Home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'our-programs',
        component: _our_programs_our_programs_component__WEBPACK_IMPORTED_MODULE_5__["OurProgramsComponent"]
    }
    // ,
    // {
    //   path:'Home#contact-us-box',
    //   component:HomeComponent
    // }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    text-decoration: none;\r\n    -webkit-text-decoration-color: white;\r\n            text-decoration-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsb0NBQTRCO1lBQTVCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AppComponent = class AppComponent {
    constructor(location, router) {
        this.router = router;
        this.isHome = false;
        router.events.subscribe((val) => {
            if (location.path() != '') {
                this.isHome = false;
            }
            else {
                this.isHome = true;
                $('.tab').removeClass('active');
                $('.home').addClass('active');
            }
        });
        window.scrollTo(0, 0);
    }
    goToHome() {
        this.router.navigate(['Home#contact-us-box']);
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _our_programs_our_programs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-programs/our-programs.component */ "./src/app/our-programs/our-programs.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-masonry-gallery */ "./node_modules/ngx-masonry-gallery/fesm2015/ngx-masonry-gallery.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _our_programs_our_programs_component__WEBPACK_IMPORTED_MODULE_6__["OurProgramsComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_masonry_gallery__WEBPACK_IMPORTED_MODULE_9__["MasonryGalleryModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["PathLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")).default]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.urls = [
            '../../assets/images/one.jpg',
            '../../assets/images/two.jpg',
            '../../assets/images/three.JPG',
            '../../assets/images/four.JPG',
            '../../assets/images/five.jpg',
            '../../assets/images/six.jpg',
            '../../assets/images/seven.JPG',
            '../../assets/images/eight.JPG',
            '../../assets/images/nine.jpg',
            '../../assets/images/fourteen.jpg',
            '../../assets/images/play.jpg',
            '../../assets/images/thirteen.jpg',
            '../../assets/images/eleven.JPG',
            '../../assets/images/twele.jpg',
            '../../assets/images/welcome-to-school.jpg'
        ];
    }
    get images() {
        return this.urls.map(m => ({
            imageUrl: m
        }));
    }
    goToAboutUs() {
        this.router.navigate(['about-us']);
    }
    ngOnInit() {
        // $('.contact-us').on('click',function(){
        //   console.log("h")
        //   this.router.navigate(['Home'])
        // })
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/our-programs/our-programs.component.css":
/*!*********************************************************!*\
  !*** ./src/app/our-programs/our-programs.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291ci1wcm9ncmFtcy9vdXItcHJvZ3JhbXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/our-programs/our-programs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/our-programs/our-programs.component.ts ***!
  \********************************************************/
/*! exports provided: OurProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurProgramsComponent", function() { return OurProgramsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurProgramsComponent = class OurProgramsComponent {
    constructor() {
        window.scrollTo(0, 0);
        $('.tab').removeClass('active');
        $('.our-programs').addClass('active');
    }
    ngOnInit() {
    }
};
OurProgramsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-programs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-programs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/our-programs/our-programs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./our-programs.component.css */ "./src/app/our-programs/our-programs.component.css")).default]
    })
], OurProgramsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Panchajanya School Project\New folder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map