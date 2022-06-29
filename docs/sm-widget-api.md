# Soul Machines Widget Web Component

## API Documentation

### Attributes & Properties

| Property                  | Attribute                  | Type                         | Default                                          | Description                                                                                            |
| ------------------------- | -------------------------- | ---------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| <sub>tokenServer</sub>    | <sub>token-server</sub>    | <sub>string</sub>            |                                                  | <sub>URL of the token server which serves the JWT token with credentials for your Digital Person</sub> |
| <sub>apiKey</sub>         | <sub>api-key</sub>         | <sub>"true" \| "false"</sub> |                                                  | <sub>API key of your project containing your Digital Person</sub>                                      |
| <sub>greeting</sub>       | <sub>greeting</sub>        | <sub>string</sub>            | <sub>Got any questions? I'm happy to help.</sub> | <sub>Default greeting you'd like users to see</sub>                                                    |
| <sub>profilePicture</sub> | <sub>profile-picture</sub> | <sub>string</sub>            | <sub>Person icon</sub>                           | <sub>An absolute url of a image you'd like to display in the connect button</sub>                      |

### Methods

#### `sendTextMessage(text: string): void`

send a message in text form

### Slots

#### `connecting-indicator`

Content that will be displayed when the session is being connected. If omitted, the default indicator will be used.
