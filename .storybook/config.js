import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/components/atoms');
  require('../stories/components/layout');
}

configure(loadStories, module);