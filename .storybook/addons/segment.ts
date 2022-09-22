import { STORY_CHANGED } from '@storybook/core-events';
import { AnalyticsBrowser } from '@segment/analytics-next';

const analytics = AnalyticsBrowser.load({
  writeKey: process.env.STORYBOOK_SEGMENT_API_KEY as string,
});

const sendAnalyticEvent = (api) => {
  const { path } = api.getUrlState();

  analytics.page({
    path: path,
  });
};

const segment = (api) => {
  // Initial page load event
  sendAnalyticEvent(api);

  // Send when story changes
  api.on(STORY_CHANGED, () => {
    sendAnalyticEvent(api);
  });
};

export default segment;
