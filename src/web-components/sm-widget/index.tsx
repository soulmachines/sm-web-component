import { define } from 'preactement';
import { SMWidget } from './SMWidget';
import './sm-widget.css';

define('sm-widget', () => SMWidget, {
  attributes: [
    'api-key',
    'token-server',
    'greeting',
    'profile-picture',
    'position',
    'layout',
    'enable-camera',
    'enable-microphone',
    'auto-connect',
    'duration',
    'delay',
  ],
});
