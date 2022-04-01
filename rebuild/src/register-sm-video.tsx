import { define } from 'preactement';
import { Video } from './components/Video';

define('sm-video', () => Video, {
  attributes: ['src'],
});
