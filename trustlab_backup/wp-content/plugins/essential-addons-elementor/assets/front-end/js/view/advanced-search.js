/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/view/advanced-search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/view/advanced-search.js":
/*!****************************************!*\
  !*** ./src/js/view/advanced-search.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AdvancedSearch = /*#__PURE__*/function () {\n  function AdvancedSearch() {\n    _classCallCheck(this, AdvancedSearch);\n\n    // register hooks\n    elementorFrontend.hooks.addAction(\"frontend/element_ready/eael-advanced-search.default\", this.initFrontend.bind(this));\n    this.searchText = null;\n    this.offset = 0;\n    this.catId = null;\n  } // init frontend features\n\n\n  _createClass(AdvancedSearch, [{\n    key: \"initFrontend\",\n    value: function initFrontend($scope, $) {\n      this.scope = $scope;\n      this.search = $scope[0].querySelector(\".eael-advanced-search\");\n      this.searchForm = $scope[0].querySelector(\".eael-advanced-search-form\");\n      this.settingsData = JSON.parse(this.searchForm.dataset.settings);\n      this.$ = $;\n      this.showSearchResult();\n      this.SearchByText();\n      this.searchByKeyword();\n      this.hideContainer($scope);\n      this.cateOnChange();\n      this.onButtonClick();\n      this.loadMoreData();\n      this.clearData($scope);\n    }\n  }, {\n    key: \"showSearchResult\",\n    value: function showSearchResult() {\n      if (!this.search) {\n        return false;\n      }\n\n      var $scope = this.scope;\n      this.search.addEventListener('focus', this.inputSearchOnFocusBind.bind(this, $scope));\n    }\n    /**\n     * inputSearchOnFocusBind\n     * @param $scope\n     * @param event\n     */\n\n  }, {\n    key: \"inputSearchOnFocusBind\",\n    value: function inputSearchOnFocusBind($scope, event) {\n      var _$scope$;\n\n      if (!((_$scope$ = $scope[0]) !== null && _$scope$ !== void 0 && _$scope$.querySelector('.eael-advanced-search').value)) {\n        return false;\n      }\n\n      var searchContainer = $scope[0].querySelector('.eael-advanced-search-result');\n\n      if (searchContainer.querySelector('.eael-advanced-search-content').innerHTML.trim() !== '') {\n        searchContainer.style.display = 'block';\n        this.popularkeyWordDispaly(false, $scope);\n      }\n    }\n    /**\n     * SearchByText\n     * @constructor\n     */\n\n  }, {\n    key: \"SearchByText\",\n    value: function SearchByText() {\n      var _this = this;\n\n      var timeOutRef = null;\n      var $scope = this.scope;\n      $scope[0].querySelector('.eael-advanced-search').addEventListener('keyup', function (e) {\n        var _$scope$0$querySelect, _$scope$0$querySelect2;\n\n        var isMobile = window.matchMedia(\"only screen and (max-width: 760px)\").matches;\n\n        if (isMobile) {\n          if (e.keyCode === 32 || e.keyCode === 91) {\n            return;\n          }\n        } else {\n          if (e.isComposing || e.keyCode === 229 || e.keyCode === 32 || e.keyCode === 91) {\n            return;\n          }\n        }\n\n        var searchText = e.target.value.trim();\n        _this.searchContainer = $scope[0].querySelector('.eael-advanced-search-result');\n        _this.searchText = searchText;\n\n        if (searchText.length < 1) {\n          _this.clearOldData(_this.searchContainer, $scope);\n\n          _this.searchContainer.style.display = 'none';\n\n          _this.popularkeyWordDispaly(true, $scope);\n\n          _this.customTriggerEvent('advSearchClear', {\n            $scope: $scope\n          });\n\n          return false;\n        }\n\n        _this.searchForm = $scope[0].querySelector(\".eael-advanced-search-form\");\n        _this.settingsData = JSON.parse(_this.searchForm.dataset.settings);\n        var $data = {\n          action: \"fetch_search_result\",\n          s: searchText,\n          settings: _objectSpread({}, _this.settingsData),\n          nonce: localize.nonce\n        };\n        _this.loader = $scope[0].querySelector('.eael-adv-search-loader');\n        var catId = (_$scope$0$querySelect = $scope[0].querySelector('.eael-adv-search-cate')) === null || _$scope$0$querySelect === void 0 ? void 0 : (_$scope$0$querySelect2 = _$scope$0$querySelect.value) === null || _$scope$0$querySelect2 === void 0 ? void 0 : _$scope$0$querySelect2.trim();\n\n        if (parseInt(catId) > 0) {\n          $data.settings.cat_id = catId;\n        }\n\n        var popularKeyword = sessionStorage.getItem('eael_popular_keyword');\n\n        if (popularKeyword && _this.searchText.length < 3) {\n          delete $data.settings.show_popular_keyword;\n        } //need to delay ajax request when typing\n\n\n        clearTimeout(timeOutRef);\n        timeOutRef = setTimeout(function () {\n          timeOutRef = null;\n\n          _this.makeAjaxRequest($data, $scope);\n        }, 500);\n      });\n    }\n  }, {\n    key: \"searchByKeyword\",\n    value: function searchByKeyword() {\n      document.addEventListener('click', this.searchByKeywordEventBind.bind(this), false);\n    }\n    /**\n     *\n     * @returns {boolean}\n     * @param event\n     */\n\n  }, {\n    key: \"searchByKeywordEventBind\",\n    value: function searchByKeywordEventBind(event) {\n      if (event.target.className !== 'eael-popular-keyword-item') {\n        return false;\n      }\n\n      this.searchText = event.target.dataset.keyword;\n      this.triggerKeyupEvent(event);\n    }\n    /**\n     * cateOnChange\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"cateOnChange\",\n    value: function cateOnChange() {\n      var categorySelector = this.searchForm.querySelector('.eael-adv-search-cate');\n\n      if (!categorySelector) {\n        return false;\n      }\n\n      var $scope = this.scope;\n      categorySelector.addEventListener('change', this.categoryOnChangeEvent.bind(this, $scope), false);\n    }\n    /**\n     *\n     * @param $scope\n     * @param event\n     */\n\n  }, {\n    key: \"categoryOnChangeEvent\",\n    value: function categoryOnChangeEvent($scope, event) {\n      this.searchText = $scope[0].querySelector('.eael-advanced-search').value;\n      this.catId = event.target.value;\n\n      if (this.searchText) {\n        this.triggerKeyupEvent(event);\n      }\n    }\n    /**\n     * onButtonClick\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"onButtonClick\",\n    value: function onButtonClick() {\n      var searchButton = this.searchForm.querySelector('.eael-advanced-search-button');\n\n      if (!searchButton) {\n        return false;\n      }\n\n      var $scope = this.scope;\n      searchButton.addEventListener('click', this.searchButtonClickBind.bind(this, $scope), false);\n    }\n    /**\n     * searchButtonClickBind\n     * @param $scope\n     * @param event\n     */\n\n  }, {\n    key: \"searchButtonClickBind\",\n    value: function searchButtonClickBind($scope, event) {\n      event.preventDefault();\n\n      if (this.searchText) {\n        var newText = $scope[0].querySelector('.eael-advanced-search').value;\n\n        if (this.searchText !== newText) {\n          this.searchText = newText;\n          this.triggerKeyupEvent(event);\n        } else {\n          var searchContainer = $scope[0].querySelector('.eael-advanced-search-result');\n          searchContainer.style.display = 'block';\n          this.popularkeyWordDispaly(false, $scope);\n        }\n      }\n    }\n  }, {\n    key: \"loadMoreData\",\n    value: function loadMoreData() {\n      var $scope = this.scope;\n      $scope[0].querySelector('.eael-advanced-search-load-more-button').addEventListener('click', this.loadMoreDataBind.bind(this, $scope), false);\n    }\n  }, {\n    key: \"loadMoreDataBind\",\n    value: function loadMoreDataBind($scope, event) {\n      event.preventDefault();\n      this.searchForm = $scope[0].querySelector(\".eael-advanced-search-form\");\n      this.settingsData = JSON.parse(this.searchForm.dataset.settings);\n      this.offset += this.settingsData.post_per_page;\n      var $data = {\n        action: \"fetch_search_result\",\n        s: this.searchText,\n        settings: _objectSpread(_objectSpread({}, this.settingsData), {}, {\n          \"offset\": this.offset,\n          'cat_id': this.catId\n        }),\n        nonce: localize.nonce\n      };\n      delete $data.settings.show_category;\n      delete $data.settings.show_popular_keyword;\n      this.$.ajax({\n        url: localize.ajaxurl,\n        type: \"post\",\n        data: $data,\n        context: this,\n        success: function success(response) {\n          var _response$data, _response$data2;\n\n          event.target.style.display = (_response$data = response.data) !== null && _response$data !== void 0 && _response$data.more_data ? 'block' : 'none';\n\n          if ((_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.post_lists) {\n            $scope[0].querySelector('.eael-advanced-search-result').querySelector('.eael-advanced-search-content').insertAdjacentHTML('beforeend', response.data.post_lists);\n          }\n        },\n        error: function error(response) {\n          event.target.style.display = 'none';\n        }\n      });\n    }\n    /**\n     * manageRendering\n     *\n     * @param data\n     * @param selector\n     * @param $scope\n     */\n\n  }, {\n    key: \"manageRendering\",\n    value: function manageRendering(data, selector, $scope) {\n      selector.style.display = 'block';\n      this.contentNotFound = true;\n      this.renderPopularKeyword(data, selector);\n      this.renderCategory(data, selector);\n      this.renderContent(data, selector, $scope);\n      this.contentNotFoundRender($scope);\n      this.popularkeyWordDispaly(false, $scope);\n      var searchTextlength = $scope[0].querySelector('.eael-advanced-search').value.length;\n      $scope[0].querySelector('.eael-adv-search-close').style.display = searchTextlength > 0 ? 'block' : 'none';\n    }\n  }, {\n    key: \"contentNotFoundRender\",\n    value: function contentNotFoundRender($scope) {\n      $scope[0].querySelector('.eael-advanced-search-not-found').style.display = this.contentNotFound ? 'block' : 'none';\n      $scope[0].querySelector('.eael-advanced-search-result').style.maxHeight = this.contentNotFound ? 'inherit' : '';\n    }\n  }, {\n    key: \"clearData\",\n    value: function clearData($scope) {\n      var _this2 = this;\n\n      var $this = this;\n      $scope[0].querySelector('.eael-adv-search-close').addEventListener('click', function (event) {\n        event.preventDefault();\n        $scope[0].querySelector('.eael-adv-search-close').style.display = 'none';\n        $scope[0].querySelector('.eael-advanced-search').value = '';\n        $scope[0].querySelector('.eael-advanced-search-result').style.display = 'none';\n        $this.search = '';\n\n        _this2.popularkeyWordDispaly(true, $scope);\n      });\n    }\n    /**\n     * triggerKeyupEvent\n     *\n     * @param e\n     */\n\n  }, {\n    key: \"triggerKeyupEvent\",\n    value: function triggerKeyupEvent(e) {\n      var closestElement = e.target.closest('.elementor-widget-eael-advanced-search'),\n          Input = closestElement.querySelector('.eael-advanced-search'),\n          eventCreate = document.createEvent('HTMLEvents');\n      Input.value = this.searchText;\n      eventCreate.initEvent('keyup', false, true);\n      Input.dispatchEvent(eventCreate);\n    }\n    /**\n     * Create Custom event and dispatch\n     * @param eventName\n     * @param data\n     */\n\n  }, {\n    key: \"customTriggerEvent\",\n    value: function customTriggerEvent(eventName, data) {\n      var event = new CustomEvent(eventName, {\n        detail: _objectSpread({}, data)\n      });\n      document.dispatchEvent(event);\n    }\n    /**\n     * renderPopularKeyword\n     *\n     * @param data\n     * @param selector\n     */\n\n  }, {\n    key: \"renderPopularKeyword\",\n    value: function renderPopularKeyword(data, selector) {\n      var keyword = selector.querySelector('.eael-advanced-search-popular-keyword > .eael-popular-keyword-content');\n\n      if (this.settingsData.show_popular_keyword) {\n        if (keyword.innerHTML == '') {\n          var popularKeyword = sessionStorage.getItem('eael_popular_keyword');\n\n          if (data !== null && data !== void 0 && data.popular_keyword) {\n            popularKeyword = data.popular_keyword;\n            sessionStorage.setItem('eael_popular_keyword', popularKeyword);\n          }\n\n          if (popularKeyword) {\n            keyword.parentElement.style.display = 'flex';\n            keyword.innerHTML = popularKeyword;\n            this.contentNotFound = false;\n          } else {\n            keyword.parentElement.style.display = 'none';\n          }\n        }\n      } else {\n        keyword.parentElement.style.display = 'none';\n      }\n    }\n    /**\n     * renderCategory\n     * @param data\n     * @param selector\n     */\n\n  }, {\n    key: \"renderCategory\",\n    value: function renderCategory(data, selector) {\n      var category = selector.querySelector('.eael-advanced-search-category .eael-popular-category-content');\n\n      if (data !== null && data !== void 0 && data.cate_lists) {\n        this.contentNotFound = false;\n        category.parentElement.style.display = 'block';\n        category.innerHTML = data.cate_lists;\n      } else {\n        category.parentElement.style.display = 'none';\n      }\n    }\n    /**\n     * renderContent\n     * @param data\n     * @param selector\n     * @param $scope\n     */\n\n  }, {\n    key: \"renderContent\",\n    value: function renderContent(data, selector, $scope) {\n      var content = selector.querySelector('.eael-advanced-search-content');\n      $scope[0].querySelector('.eael-advanced-search-load-more-button').style.display = data !== null && data !== void 0 && data.more_data ? 'block' : 'none';\n\n      if (data !== null && data !== void 0 && data.post_lists) {\n        this.contentNotFound = false;\n        content.style.display = 'block';\n        content.innerHTML = data.post_lists;\n      } else {\n        this.contentNotFound = true;\n        content.innerHTML = '';\n        content.style.display = 'none';\n      }\n    }\n    /**\n     * hideContainer\n     */\n\n  }, {\n    key: \"hideContainer\",\n    value: function hideContainer(scope) {\n      var _this3 = this;\n\n      document.addEventListener('click', function (e) {\n        var status = e.target.closest('.eael-advanced-search-widget');\n\n        if (!status) {\n          var searchBox = scope[0].querySelector('.eael-advanced-search-result');\n          searchBox.style.display = 'none';\n\n          _this3.popularkeyWordDispaly(true, scope);\n        }\n      });\n    }\n    /**\n     * clearOldData\n     *\n     * @param searchContainer\n     * @param $scope\n     */\n\n  }, {\n    key: \"clearOldData\",\n    value: function clearOldData(searchContainer, $scope) {\n      searchContainer.querySelector('.eael-popular-keyword-content').innerHTML = '';\n      searchContainer.querySelector('.eael-popular-category-content').innerHTML = '';\n      searchContainer.querySelector('.eael-advanced-search-content').innerHTML = '';\n      $scope[0].querySelector('.eael-adv-search-close').style.display = 'none';\n    }\n  }, {\n    key: \"makeAjaxRequest\",\n    value: function makeAjaxRequest(data, $scope) {\n      this.$.ajax({\n        url: localize.ajaxurl,\n        type: \"post\",\n        data: data,\n        context: this,\n        beforeSend: function beforeSend() {\n          this.loader.style.display = 'block';\n          $scope[0].querySelector('.eael-adv-search-close').style.display = 'none';\n        },\n        success: function success(response) {\n          this.loader.style.display = 'none';\n          this.manageRendering(response.data, this.searchContainer, $scope);\n        },\n        error: function error(response) {\n          this.loader.style.display = 'none';\n        }\n      });\n    }\n  }, {\n    key: \"popularkeyWordDispaly\",\n    value: function popularkeyWordDispaly(status, $scope) {\n      var view = $scope[0].querySelector('.eael-after-adv-search');\n\n      if (view) {\n        view.style.display = status ? 'flex' : 'none';\n      }\n    }\n  }]);\n\n  return AdvancedSearch;\n}();\n\nea.hooks.addAction(\"init\", \"ea\", function () {\n  new AdvancedSearch();\n});\n\n//# sourceURL=webpack:///./src/js/view/advanced-search.js?");

/***/ })

/******/ });