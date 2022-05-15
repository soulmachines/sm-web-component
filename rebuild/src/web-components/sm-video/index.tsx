import { define } from 'preactement';
import { SMVideo } from './SMVideo';
import '../../index.css';

define('sm-video', () => SMVideo, {
  attributes: ['api-key', 'token-server', 'auto-connect'],
});
