const execa = require('execa');

const NO_ERROR = 'All files using prettier-eslint code style.';
const GENERAL_ERROR = 'Error when running prettier-eslint:';
const STYLE_ERROR = 'Forgot to run prettier-eslint? There are files without correct code style:';
const UNEXPECTED_ERROR = 'Unexpected error:';

module.exports = (args) => {
  args.push('--list-different');

  return execa('prettier-eslint', args)
    .then(() => {
      console.log(NO_ERROR);
      return 0;
    })
    .catch((error) => {
      if (error.stdout) {
        console.log(STYLE_ERROR);
        console.log(error.stdout);
        return 3;
      }
      if (error.stderr) {
        console.error(GENERAL_ERROR);
        console.error(error.stderr);
        return 4;
      }
      console.error(UNEXPECTED_ERROR);
      console.error(error);
      return 1;
    });
};
