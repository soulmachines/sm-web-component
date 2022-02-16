# Options

Displays a list of options.

```
{
  "type": "options",
  "data": {
    "options": [
      {
        "label": "Alice",
        "value": "I am Alice"   // Optional
      },
      {
        "label": "Bob"
      },
      {
        "label": "Catherine"
      }
    ]
  }
}
```

- The `label` parameter is what is displayed for an option in the list.
- Clicking on one of the options will disable any further click events on the options block.
- Optional `value` parameter - the action will be emitted with this value, if this is blank, the action will be emitted with the label value instead.

## Watson Usage

Set Context in Watson Form view:

```
$public-options {"data":{"options":[{"label":"Alice","value":"I am Alice"},{"label":"Bob"},{"label":"Catherine"}]},"type":"options"}
```

Or Set Context in Watson JSON view:

```
{
  "context": {
    "public-options": {
      "data": {
       "options": [
          {
            "label": "Alice",
            "value": "I am Alice"
          },
          {
            "label": "Bob"
          },
          {
            "label": "Catherine"
          }
        ]
      },
      "type": "options"
    }
  },

```

## Dialogflow Usage

Set custom payload in Dialogflow view:

```
myOptionsCard   {"data":{"options": [{"label": "Alice","value": "I am Alice"},{"label": "Bob"},{"label": "Catherine"}]},"type":"options"}
```

Or set custom payload in Dialogflow response view:

```
{
  "soulmachines": {
    "myOptionsCard": {
      "type": "options",
      "data": {
        "options": [
          {
            "label": "Alice",
            "value": "My name is Alice"
          },
          {
            "label": "Bob"
          },
          {
            "label": "Catherine"
          }
        ]
      }
    }
}

```
