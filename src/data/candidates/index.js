const candidates = [
  {
    title: 'Angular',
    image: 'angular.png',
  },
  {
    title: 'Babel',
    image: 'babel.png',
  },
  {
    title: 'Elm',
    image: 'elm.png',
  },
  {
    title: 'JavaScript',
    image: 'javascript.png',
  },
  {
    title: 'Node',
    image: 'node.png',
  },
  {
    title: 'NPM',
    image: 'npm.png',
  },
  {
    title: 'Polymer',
    image: 'polymer.png',
  },
  {
    title: 'React',
    image: 'react.png',
  },
  {
    title: 'TypeScript',
    image: 'typescript.png',
  },
  {
    title: 'Vue',
    image: 'vue.png',
  },
  {
    title: 'Webpack',
    image: 'webpack.png',
  },
];

const basePath = '/static/images/candidates/';
candidates.forEach((candidate) => {
  // eslint-disable-next-line no-param-reassign
  candidate.path = basePath + candidate.image;
});

export default candidates;
