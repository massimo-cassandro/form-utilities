const config = {
  /*
    Configurazione per `update-version`
    Nessun parametro è obbligatorio
  */
  updateVersion: {
    twigVarsFile     : null,   // default null
    htmlFiles        : null,   // default null
    skipDescrPrompt  : false,  // default false
    patchOnly        : false,  // default false
    defaultDescr     : null    // default null
  },

  /*
    Configurazione per `vscode-css-properties-list`
  */
  // cssPropsList: {

  //   sources: [],
  //   snippet_file           : './test/vscode-css-custom-properties-list/myproject.code-snippets',
  //   result_test_file       : './test/vscode-css-custom-properties-list/css-debug-file.css',
  //   snippet_key            : 'custom props list',
  //   custom_var_prefix      : ['prefix-'],
  //   icon_sources: [],
  //   icon_list_snippet_key  : 'icons list'

  // }
};

export default config;
