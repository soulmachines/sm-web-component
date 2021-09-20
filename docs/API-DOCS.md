# Soul Machines Video Web Component

## API Documentation

### Properties

> Properties follow web component convention where when used as attributes, they are lower case hyphenated ie: `microphoneEnabled` => `microphone-enabled`

#### `tokenserver: string`

URL of the token server which serves the JWT token with credentials for your Digital Person

#### `autoconnect: string = "true" | "false"`

when set to:

- true, a session connection will be made when the component is initialized
- false, no session connection will be made when the component is initialized

> Subsequent connection/disconnection can be made via the `connect`/`disconnect` methods.

#### `microphoneEnabled: string = "true" | "false"`

when set to:

- true, the microphone will be enabled
- false, the microphone will be disabled

#### `debug: string = "true" | "false"`

when set to:

- true, debug messages will be output to the console
- false, no debug messages will be logged

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
