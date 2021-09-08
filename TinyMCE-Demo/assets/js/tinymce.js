(function () {
  tinyMCE.PluginManager.add("tmcd_plugin", function (editor, url) {
    // shortcode button
    editor.addButton("tmcd_button_one", {
      text: "B1",
      icon: "sharpen", // icon from tiny icons
      // Image:url+"/../images/small-size.png", // in order to show image icon
      onclick: function () {
        editor.insertContent("[gmap]content[/gmap]");
      },
    });
    // text button
    editor.addButton("tmcd_button_two", {
      text: "button",
      onclick: function () {
        editor.insertContent("second button");
      },
    });

    // select list box
    editor.addButton("tmcd_listbox_one", {
      text: "Select Book name",
      type: "listbox",
      values: [
        { text: "Apple", value: " You have selected <b>Apple</b>" },
        { text: "Orange", value: " You have selected <em>Orange</em>" },
        { text: "Banana", value: " You have selected <u>Banana</u>" },
      ],
      onselect: function () {
        editor.insertContent(this.value());
      },
    });

    // menu dropdown / multiple shortcode item / multiple button
    editor.addButton("tmcd_menu_one", {
      text: "Choose",
      type: "menubutton",
      menu: [
        {
          text: "Option A",
          onclick: function () {
            console.log("Option A");
          },
        },

        {
          text: "Option B",
          menu: [
            {
              // can use multiple option
              text: "Opt 1",
              onclick: function () {
                console.log("You'v selected the first item of Option B");
              },
            },
            {
              text: "Opt 2",
              onclick: function () {
                console.log("You'v selected the second item of Option B");
              },
            },
            {
              text: "Opt 3",
              onclick: function () {
                console.log("You'v selected the third item of Option B");
              },
            },
          ],
        },
        {
          text: "Option B",
          menu: [
            {
              text: "English",
              onclick: function () {
                console.log("You have selected English Book");
              },
            },
            {
              text: "English",
              onclick: function () {
                console.log("You have selected English Book");
              },
            },
            {
              text: "English",
              onclick: function () {
                console.log("You have selected English Book");
              },
            },
          ],
        },
      ],
    });

    // Form
    editor.addButton("tmcd_form_one", {
      text: "Form",
      onclick: function () {
        editor.windowManager.open({
          title: "User Input form",
          body: [
            {
              type: "textbox",
              name: "userinput1",
              label: "Text",
              value: "hello", // default value
            },
            {
              type: "colorpicker",
              name: "userinput2",
              label: "#222",
              value: " Hello world! ", // default value
            },
            {
              type: "listbox",
              name: "userinput2",
              label: "#222",
              values: [
                { text: "English Book", value: " You have selected <b>English Book</b>" },
                { text: "History Book", value: " You have selected <b>History Book</b>" },
                { text: "Science Fiction", value: " You have selected <b>Science Book</b>" },
              ],
            },
          ],
          onsubmit: function (e) {
            // console.log(e.data.userinput1);
            // console.log(e.data.userinput2);
            editor.insertContent(
              " Text : " + e.data.userinput1 + " Color : " + e.data.userinput2 
            );
          },
        });
      },
    });
  });
})();
