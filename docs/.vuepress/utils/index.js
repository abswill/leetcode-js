const utils = {
  genSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 1) {
    var arr = new Array();
    arr.push({
      title,
      children,
      collapsable,
      sidebarDepth
    })
    return arr;
  }
};

module.exports = utils;