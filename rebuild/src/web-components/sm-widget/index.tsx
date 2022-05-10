import { define } from 'preactement';
import { SMWidget } from './SMWidget';

define('sm-widget', () => SMWidget, {
  attributes: ['api-key', 'token-server', 'greeting', 'profile-picture'],
});
