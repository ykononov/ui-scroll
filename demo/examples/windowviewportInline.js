angular.module('application', ['ui.scroll', 'ui.scroll.jqlite']).factory('datasource', [
  '$log', '$timeout', function(console, $timeout) {
    var get;
    get = function(index, count, success) {
      return $timeout(function() {
        var i, item, j, ref, ref1, result;
        result = [];
        for (i = j = ref = index, ref1 = index + count - 1; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
          item = {};
          if (inlineDemo) {
            item.width = inlineDemo.getWidth(i);
            item.height = inlineDemo.getHeight(i);
            item.color = inlineDemo.getColor(i);
          }
          item.content = "item #" + i;
          result.push(item);
        }
        return success(result);
      }, 100);
    };
    return {
      get: get
    };
  }
]);

angular.bootstrap(document, ["application"]);


/*
//# sourceURL=src/windowviewportInline.js
 */

// ---
// generated by coffee-script 1.9.2