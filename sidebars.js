// F:\ZenDocs\gh-docs\sidebars.js
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Developer Guide',
      items: ['intro', 'main/how-to-get-started', 'main/pci-dss']
    },
    {
      type: 'category',
      label: 'APIs',
      items: ['apis/introduction', 'apis/swagger-ui']
    },
    {
      type: 'category',
      label: 'jQuery Plugin',
      items: [
        'jquery-plugin/introduction',
        'jquery-plugin/input-parameters',
        'jquery-plugin/output-parameters',
        'jquery-plugin/return-parameters',
        'jquery-plugin/error-codes',
        'jquery-plugin/sample-code',
        'jquery-plugin/test-key',
      ]
    }
  ]
};

module.exports = sidebars;
