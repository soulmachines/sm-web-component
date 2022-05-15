import { define } from 'preactement';
import { SMWidget } from './SMWidget';
import '../../index.css';

define('sm-widget', () => SMWidget, {
  attributes: ['api-key', 'token-server', 'greeting', 'profile-picture'],
});
