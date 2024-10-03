const path = require('path');

module.exports = {
  packageName: 'n8n-nodes-<name>',
  credentials: {
    browserlessApi: {
      displayName: 'Your Credentials',
      name: 'yourCredentials',
      className: 'YourCredentials',
    },
  },
  nodes: {
    browserless: {
      // Preset selection, simple | versioned
      preset: 'simple',

      displayName: 'Your Node',
      name: 'yourNode',
      description: 'Your Node Description',

      // Openapi file path
      api: path.resolve(__dirname, 'openapi.yml'),

      // Icon could be a URL or a path fa:iconName or file:iconName
      icon: 'fa:code',

      // By default the version is 1
      version: 1,

      // Tags selection, enable if needed to filter tags
      // tags: [],


      // Operation selection, enable if needed to filter operations
      // operations: [],

      // Nodes credentials
      // credentials: [{
      //   displayName: 'Your Credentials',
      //   name: 'yourCredentials',
      //   required: true,
      // }],

      // Nodes base URL
      baseUrl: '=\{\{$credentials.url\}\}',

      // Nodes default options
      // requestDefaults: {
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   baseURL: '=\{\{$credentials.url\}\}',
      // },

      // Nodes options order, enable if needed to set options order
      // propertiesOrder: [],
    },
  },
  // Nodes overwrite options
  overwrites: {
    // overwrite operation options
    operations: [
      // {
      //   match: {
      //     name: 'randomOperation',
      //     set: {
      //       type: "string",
      //     }
      //   }
      // }
    ],
  },

  // Folders to delete when generating the nodes 
  deleteFolders: ['']
};

