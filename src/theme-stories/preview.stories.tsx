import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ConversationState } from '../components/ConversationState';
import { Heading } from '../components/Heading';
import { IconButton } from '../components/IconButton/IconButton';
import { ImageCard } from '../components/ImageCard/ImageCard';
import { LinkCard } from '../components/LinkCard/LinkCard';
import { MarkdownCard } from '../components/MarkdownCard/MarkdownCard';
import { Notifications } from '../components/Notifications/Notifications';
import { OptionsCard } from '../components/OptionsCard/OptionsCard';
import { Text } from '../components/Text/Text';
import { Widget } from '../components/Widget';
import paths from '../components/Icon/paths';
import { SMProviderDecorator } from '../../.storybook/decorators/SMProviderDecorator';
import { ConversationStateTypes } from '@soulmachines/smwebsdk/lib-esm/enums/ConversationStateTypes';

export default {
  title: `Theme / Preview`,
  decorators: [SMProviderDecorator],
};

const availableIcons = Object.keys(paths);

const cssVariables: Record<string, string> = {
  '--sm-color-gray-lightest': '#eaeaea',
  '--sm-color-gray-light': '#d3d3d3',

  '--sm-color-primary-lightest': '#e8ebef',
  '--sm-color-primary-light': '#97b7d7',
  '--sm-color-primary-base': '#1e5b98',
  '--sm-color-primary-dark': '#234973',

  ' --sm-color-secondary-base': '#a3bef5',

  '--sm-color-tertiary-base': '#ed5645',
  ' --sm-color-tertiary-dark': '#bd2920',

  '--sm-box-shadow-sm': '0px 2px 20px rgba(0, 0, 0, 0.04), 0px 2px 12px rgba(0, 0, 0, 0.04)',
  '--sm-box-shadow-md': '0px 2px 10px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.1)',
  '--sm-box-shadow-lg': '0px 4px 12px rgba(0, 0, 0, 0.06), 0px 12px 28px rgba(0, 0, 0, 0.12)',
  '--sm-box-shadow-xl':
    '0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.12)',

  '--sm-font-family-primary': "'Rubik', 'Helvetica', 'sans-serif'",
};

const updateColor = (event: Event) => {
  document
    .querySelector<HTMLElement>('sm-widget')
    ?.style?.setProperty(
      (event.target as HTMLInputElement).id,
      (event.target as HTMLInputElement).value,
    );
};

const imageContent = {
  id: 'id',
  type: 'image',
  data: {
    url: 'https://images.unsplash.com/photo-1656426885244-8012b6f6262a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
};
const linkcardContent = {
  id: 'id',
  type: 'externalLink',
  data: {
    url: 'https://www.soulmachines.com',
    title: 'Soul Machines',
    imageUrl: 'https://placekitten.com/300/300',
    description: 'Placeholder',
  },
};

const markdownContent = {
  id: 'id',
  type: 'markdown',
  data: {
    text: `# H1
## H2
### H3
#### H4
##### H5
###### H6

1. Most interesting
   1. Sublist 1
   2. Sublist 2
2. Less interesting
   1. Sublist 1
   2. Sublist 2
3. Least Interesting

**bold**
- item 1
- item 2

[External Link](https://www.google.com)

[Internal Link](http://localhost:3000)

*emphasis*

---
Horizontal Rule

---

### Checkboxes

- [ ] Checkbox 1
- [ ] Checkbox 2

#### Image Example

![Image Alt Text](https://assets.gocomics.com/uploads/collection_images/collection_image_large_1628638_dilbert-inventions-content-admin-2048x1280_201809101600.jpg)

#### Image with Link

[![Image Alt Text](https://assets.gocomics.com/uploads/collection_images/collection_image_large_1628638_dilbert-inventions-content-admin-2048x1280_201809101600.jpg)](https://www.google.com)

### Table

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

### Fenced Code Block

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
`,
  },
};

const optionsCardContent = {
  id: 'id',
  type: 'options',
  data: {
    options: [
      {
        label: 'Auckland',
        value: 'auckland',
      },
      {
        label: 'Sydney',
        value: 'sydney',
      },
      {
        label: 'London',
      },
    ],
  },
};

export const Basic = () => {
  return (
    <>
      <h1>COLOUR SELECTOR</h1>
      <div className="sm-border-2 sm-border-rose-600">
        {Object.keys(cssVariables).map((variable) => {
          return (
            <div key={variable} className="sm-p1">
              <label for={variable} className="sm-pr-1">
                {variable}
              </label>
              <input
                type="color"
                id={variable}
                value={cssVariables[variable]}
                onChange={(e: Event) => updateColor(e)}
              />
            </div>
          );
        })}
      </div>

      <div className="sm-border-2 sm-border-rose-600">
        <h1>BASIC COMPONENT</h1>
        <Button children={'Button'} />
        <Heading type={'h1'}>{'Heading'}</Heading>
        <Text size={'sm'}>{'Text'}</Text>
        <Notifications />

        <h1>ICON BUTTONS</h1>
        {availableIcons.map((path) => {
          return (
            <IconButton
              key={path}
              name={path}
              size={20}
              title={'radio'}
              shadow={true}
              theme={'default'}
            />
          );
        })}

        <h1>CONVERSATION INDICATIONS</h1>
        {Object.values(ConversationStateTypes).map((state) => {
          return <ConversationState key={state} state={state} />;
        })}

        <h1>CONTENT CARDS</h1>
        <Card isDismissible={true} flush={false}>
          <div>
            <p>Any content can be passed here</p>
            <Button>Trigger</Button>
          </div>
        </Card>
        <OptionsCard content={optionsCardContent} />
        <ImageCard content={imageContent} />
        <LinkCard content={linkcardContent} isExternal={true} />
        <MarkdownCard content={markdownContent} />

        {/* <VideoControls /> */}
        <Widget
          greeting={'A custom greeting message'}
          profilePicture={'https://assets.cdn.soulmachines.cloud/AvatarCoverImages/image-sam-l.jpg'}
        />
      </div>
    </>
  );
};
