import type { Preview } from "@storybook/vue3";
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, //目次表示
    },
  },
  loaders: [mswLoader],
};

export default preview;
