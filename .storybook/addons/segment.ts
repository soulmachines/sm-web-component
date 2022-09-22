import { STORY_CHANGED } from '@storybook/core-events';
import { AnalyticsBrowser } from '@segment/analytics-next';

//  TODO: use env
const analytics = AnalyticsBrowser.load({ writeKey: 'APQiesX48IdLcoLjI2B2roKgH8MwGI9c' });

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
