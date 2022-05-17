import { define } from 'preactement';
import { SMVideo } from './SMVideo';
import './sm-video.css';

define('sm-video', () => SMVideo, {
  attributes: ['api-key', 'token-server', 'auto-connect'],
});
