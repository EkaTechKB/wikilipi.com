// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
(function ($, window, document, undefined) {
  // undefined is used here as the undefined global variable in ECMAScript 3 is
  // mutable (ie. it can be changed by someone else). undefined isn't really being
  // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
  // can no longer be modified.

  // window and document are passed through as local variable rather than global
  // as this (slightly) quickens the resolution process and can be more efficiently
  // minified (especially when both are regularly referenced in your plugin).

  // Create the defaults once
  var pluginName = "jkeyboard",
    defaults = {
      layout: "english",
      input: $("#input"),
    };

  var function_keys = {
    backspace: {
      text: "&nbsp;",
    },
    del: {
      text: "del",
    },
    return: {
      text: "Enter",
    },
    shift: {
      text: "&nbsp;",
    },
    space: {
      text: "&nbsp;",
    },
    numeric_switch: {
      text: "123",
      command: function () {
        this.createKeyboard("numeric");
        this.events();
      },
    },
    layout_switch: {
      text: "&nbsp;",
      command: function () {
        var l = this.toggleLayout();
        this.createKeyboard(l);
        this.events();
      },
    },
    character_switch: {
      text: "ABC",
      command: function () {
        this.createKeyboard(layout);
        this.events();
      },
    },
    symbol_switch: {
      text: "#+=",
      command: function () {
        this.createKeyboard("symbolic");
        this.events();
      },
    },
  };

  var layouts = {
    selectable: ["azeri", "english", "russian"],
    azeri: [
      ["đ", "ā", "@", "å", "Δ", "ŧ", "ö", "ɉ", "λ", "ø", "č", "-", ";"],
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "л", "ф", ":"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ū", "ŋ", "del"],
      [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        "?",
        ",",
        "!",
        "layout_switch",

        "backspace",
      ],
      ["shift", "{", "}", "[", "space", "]", ".", "'", '"', "numeric_switch"],
    ],

    english: [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      ["z", "x", "c", "v", "b", "n", "m", "backspace"],
      ["numeric_switch", "layout_switch", "space", "return"],
    ],

    numeric: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      ["-", "/", ":", ";", "(", ")", "$", "&", "@", '"'],
      ["symbol_switch", ".", ",", "?", "!", "'", "backspace"],
      ["character_switch", "layout_switch", "space", "return"],
    ],
    numbers_only: [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["0", "backspace", "return"],
    ],
    symbolic: [
      ["[", "]", "{", "}", "#", "%", "^", "*", "+", "="],
      ["_", "\\", "|", "~", "<", ">"],
      ["numeric_switch", ".", ",", "?", "!", "'", "backspace"],
      ["character_switch", "layout_switch", "space", "return"],
    ],
  };

  var shift = false,
    capslock = false,
    layout = "english",
    layout_id = 0;
  // The actual plugin constructor
  function Plugin(element, options) {
    this.element = element;
    // jQuery has an extend method which merges the contents of two or
    // more objects, storing the result in the first object. The first object
    // is generally empty as we don't want to alter the default options for
    // future instances of the plugin
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function () {
      layout = this.settings.layout;
      this.createKeyboard(layout);
      this.events();
    },

    createKeyboard: function (layout) {
      shift = false;
      capslock = false;

      var keyboard_container = $("<ul/>").addClass("jkeyboard"),
        me = this;

      layouts[layout].forEach(function (line, index) {
        var line_container = $("<li/>").addClass("jline");
        line_container.append(me.createLine(line));
        keyboard_container.append(line_container);
      });

      $(this.element).html("").append(keyboard_container);
    },

    createLine: function (line) {
      var line_container = $("<ul/>");

      line.forEach(function (key, index) {
        var key_container = $("<li/>").addClass("jkey").data("command", key);

        if (function_keys[key]) {
          key_container.addClass(key).html(function_keys[key].text);
        } else {
          key_container.addClass("letter").html(key);
        }

        line_container.append(key_container);
      });

      return line_container;
    },

    events: function () {
      var letters = $(this.element).find(".letter"),
        shift_key = $(this.element).find(".shift"),
        space_key = $(this.element).find(".space"),
        backspace_key = $(this.element).find(".backspace"),
        del_key = $(this.element).find(".del"),
        return_key = $(this.element).find(".return"),
        me = this,
        fkeys = Object.keys(function_keys)
          .map(function (k) {
            return "." + k;
          })
          .join(",");

      letters.on("click", function () {
        me.type(
          shift || capslock ? $(this).text().toUpperCase() : $(this).text()
        );
      });

      space_key.on("click", function () {
        me.type(" ");
      });

      return_key.on("click", function () {
        me.type("\n");
        me.settings.input.parents("form").submit();
      });

      backspace_key.on("click", function () {
        me.backspace();
      });
      del_key.on("click", function () {
        me.del();
      });
      shift_key
        .on("click", function () {
          if (capslock) {
            me.toggleShiftOff();
            capslock = false;
          } else {
            me.toggleShiftOn();
          }
        })
        .on("dblclick", function () {
          capslock = true;
        });

      $(fkeys).on("click", function () {
        var command = function_keys[$(this).data("command")].command;

        if (!command) return;

        command.call(me);
      });
    },

    type: function (key) {
      var input = this.settings.input,
        val = input.val(),
        input_node = input.get(0),
        start = input_node.selectionStart,
        end = input_node.selectionEnd,
        new_string = "";

      // caretPosition = this.caretPosition(input.get(0));
      // console.log(caretPosition)
      if (start == end && end == val.length) {
        input.val(val + key);
      } else {
        var new_string = this.insertToString(start, end, val, key);
        input.val(new_string);
        start++;
        end = start;
        input_node.setSelectionRange(start, end);
      }

      input.trigger("focus");

      if (shift && !capslock) {
        this.toggleShiftOff();
      }
    },
    backspace: function () {
      var input = this.settings.input,
        val = input.val();

      input.val(val.substr(0, val.length - 1));
    },
    del: function () {
      var input = this.settings.input,
        val = input.val();

      input.val(val.substr(1, val.length));
    },
    toggleShiftOn: function () {
      var letters = $(this.element).find(".letter"),
        shift_key = $(this.element).find(".shift");

      letters.addClass("uppercase");
      shift_key.addClass("active");
      shift = true;
    },

    toggleShiftOff: function () {
      var letters = $(this.element).find(".letter"),
        shift_key = $(this.element).find(".shift");

      letters.removeClass("uppercase");
      shift_key.removeClass("active");
      shift = false;
    },

    toggleLayout: function () {
      layout_id = layout_id || 0;
      var plain_layouts = layouts.selectable;
      layout_id++;

      var current_id = layout_id % plain_layouts.length;
      return plain_layouts[current_id];
    },

    insertToString: function (start, end, string, insert_string) {
      return (
        string.substring(0, start) +
        insert_string +
        string.substring(end, string.length)
      );
    },
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);
