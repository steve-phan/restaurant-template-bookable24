import { Actions } from 'gatsby';
import path from 'path';

exports.onCreateWebpackConfig = ({ actions }: { actions: Actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@bookable24': path.resolve(__dirname, 'src'),
      },
    },
  });
};
