//使用正则表达式查询参数
queryString: function (param, isEncode) {
      param = param.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var n = new RegExp("[\\?&]" + param + "=([^&#]*)", 'i'),
        o = n.exec(location.search),
        r = null;
      return null === o ? (n = new RegExp("[\\?&]" + param + "(\\&([^&#]*)|$)", 'i'), n.test(location.search) ? !0 : void 0) : (r = o[1].replace(/\+/g, " "),
        isEncode ? r : decodeURIComponent(r));
    }
