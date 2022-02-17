module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
  },
  projects: [
    {
      package: './package.json',    
    tsconfig: './tsconfig.json',
    }
  ]
}
