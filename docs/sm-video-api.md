# Soul Machines Video Web Component

## API Documentation

### Attributes & Properties

| Property               | Attribute               | Type                         | Default           | Description                                                                                                                                                                                     |
| ---------------------- | ----------------------- | ---------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <sub>tokenServer</sub> | <sub>token-server</sub> | <sub>string</sub>            |                   | <sub>URL of the token server which serves the JWT token with credentials for your Digital Person</sub>                                                                                          |
| <sub>apiKey</sub>      | <sub>api-key</sub>      | <sub>"true" \| "false"</sub> |                   | <sub>API key of your project containing your Digital Person</sub>                                                                                                                               |
| <sub>autoConnect</sub> | <sub>auto-connect</sub> | <sub>"true" \| "false"</sub> | <sub>"true"</sub> | <sub>when set to: <br> - "true", a session connection will be made when the component is initialized <br>- "false", no session connection will be made when the component is initialized </sub> |
