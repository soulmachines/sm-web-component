import { define } from 'preactement';
import { SMWidget } from '../components/SMWidget';

define('sm-widget', () => SMWidget, {
  attributes: ['api-key', 'token-server', 'greeting', 'profile-picture'],
});
