module.exports = {
  presets: [
    ['env', { modules: false }],
    'stage-2',
    ['@babel/preset-react'],
    ['@babel/preset-flow'],
  ],

  // fullcalendar attempts to import its own CSS files, but next.js does not allow this.
  // throw away these statements before they arrive at next.js,
  // but you'll need to import them manually in pages/_app.jsx.
  // will also work for any other 3rd-party packages that attempt to do this.
  overrides: [
    {
      include: ['./node_modules'],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
         ["env", { "modules": false ,"targets":{"node":"current"}}],
         "stage-3"
        ],
      plugins: [
        'transform-runtime',
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-proposal-class-properties',
        [
          'babel-plugin-transform-require-ignore',
          {
            extensions: ['.css'],
          },
        ],
      ],
      comments: false,
      env: {
        test: {
          presets: ['env', 'stage-2'],
          plugins: ['istanbul'],
        },
      },
    },
  ],
};
