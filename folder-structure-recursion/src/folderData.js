export const explorer = {
  name: "root",
  children: [
    {
      name: "package.json"
    },
    {
      name: "src",
      children: [
        {
          name: "App.js"
        },
        {
          name: "components",
          children: [
            {
              name: "common",
              children: [
                {
                  name: "Button.js"
                },
                {
                  name: "Text.js"
                }
              ]
            },
            {
              name: "views",
              children: [
                {
                  name: "Login",
                  children: [
                    {
                      name: "style.js"
                    },
                    {
                      name: "Login.js"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
