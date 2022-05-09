import { define } from 'preactement';
import { SMVideo } from './SMVideo';

define('sm-video', () => SMVideo, {
  attributes: ['api-key', 'token-server', 'auto-connect'],
});
