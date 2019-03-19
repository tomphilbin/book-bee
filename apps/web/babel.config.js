module.exports = {
  presets: ['next/babel', '@zeit/next-typescript/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
  ],
}
