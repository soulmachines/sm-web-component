# Soul Machines Video Web Component

## API Documentation

### Attributes & Properties

| Property                     | Attribute                     | Type                           | Default              | Mandatory      | Description                                                                                                                                                                                                                                                                                    |
| ---------------------------- | ----------------------------- | ------------------------------ | -------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <sub>tokenServer</sub>       | <sub>token-server</sub>       | <sub>string</sub>              |                      | <sub>Yes</sub> | <sub>URL of the token server which serves the JWT token with credentials for your Digital Person</sub>                                                                                                                                                                                         |
| <sub>autoConnect</sub>       | <sub>auto-connect</sub>       | <sub>"true" \| "false"</sub>   | <sub>"true"</sub>    | <sub>No</sub>  | <sub>when set to: <br> - "true", a session connection will be made when the component is initialized <br>- "false", no session connection will be made when the component is initialized <br><br>Subsequent connection/disconnection can be made via the `connect`/`disconnect` methods.</sub> |
| <sub>microphoneEnabled</sub> | <sub>microphone-enabled</sub> | <sub>"true" \| "false"</sub>   | <sub>"true"</sub>    | <sub>No</sub>  | <sub>when set to:<br>- "true", the microphone will be enabled<br>- "false", the microphone will be disabled</sub>                                                                                                                                                                              |
| <sub>theme</sub>             | <sub>theme</sub>              | <sub>"default" \| "none"</sub> | <sub>"default"</sub> | <sub>No</sub>  | <sub>when set to:<br>- "default", component will be displayed as a floating circle in the bottom right of the page<br>- "none", component will de displayed as a 300 x 150px box with minimal styling</sub> </sub>                                                                             |
| <sub>debug</sub>             | <sub>debug</sub>              | <sub>"true" \| "false"</sub>   | <sub>"true"</sub>    | <sub>No</sub>  | <sub>when set to:<br>- "true", debug messages will be output to the console<br>- "false", no debug messages will be logged</sub> </sub>                                                                                                                                                        |

### Methods

> Where functions return a `Promise`, the promise will resolve when the operation is complete

#### `connect(): void`

connect to a new session

#### `disconnect(): void`

disconnect from the session

#### `sendTextMessage(text: string): Promise<any>`

send a message in text form

#### `setMicrophoneEnabled(enabled: boolean): Promise<any>`

enable or disable microphone input

#### `stopSpeaking(): Promise<any>`

stop the Digital Person speaking

#### `getPersona() : Persona`

get the Persona object from the WebSDK for access to advanced commands

#### `getScene() : Scene`

get the Scene object from the WebSDK for access to advanced commands

### Events

> Events emit a `CustomEvent<T>` object where `event.detail` is the payload having type `T` (if any)

#### `connected: CustomEvent`

Fired when a successful connection is made

#### `disconnected: CustomEvent`

Fired when the session is disconnected

#### `userSpoke: CustomEvent<string>`

Fired when the user speaks with payload of the spoken text

#### `dpSpoke: CustomEvent<string>`

Fired when the Digital Person speaks with payload of the spoken text

#### `speechMarker: CustomEvent<{ name, arguments }>`

Fired when a speech marker is encountered in the Digital Person's speech, with payload of the marker's name and arguments

### Slots

#### `connecting-indicator`

Content that will be displayed when the session is being connected. If omitted, the default indicator will be used.
