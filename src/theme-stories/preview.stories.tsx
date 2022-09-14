import { ConversationStateTypes } from '@soulmachines/smwebsdk/lib-esm/enums/ConversationStateTypes';
import { SMProviderDecorator } from '../../.storybook/decorators/SMProviderDecorator';
import paths from '../components/Icon/paths';
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
import { markdownContent } from '../components/MarkdownCard/MarkdownCard.stories';
import { imageCardContent } from '../components/ImageCard/ImageCard.stories';
import { optionsCardContent } from '../components/OptionsCard/OptionsCard.stories';
import { linkcardContent } from '../components/LinkCard/LinkCard.stories';
import { headingOptions } from '../components/Heading/Heading.stories';
import { textOptions } from '../components/Text/Text.stories';

export default {
  title: `Theme / Preview`,
  decorators: [SMProviderDecorator],
};

const availableIcons = Object.keys(paths);

const colorVariables: Record<string, string> = {
  '--sm-color-gray-lightest': '#eaeaea',
  '--sm-color-gray-light': '#d3d3d3',

  '--sm-color-primary-lightest': '#e8ebef',
  '--sm-color-primary-light': '#97b7d7',
  '--sm-color-primary-base': '#1e5b98',
  '--sm-color-primary-dark': '#234973',

  '--sm-color-secondary-base': '#a3bef5',

  '--sm-color-tertiary-base': '#ed5645',
  '--sm-color-tertiary-dark': '#bd2920',
};

const fontVariables: Record<string, string> = {
  '--sm-font-family-primary': 'Rubik',
};

const updateCssVariables = (event: Event) => {
  document
    .querySelector<HTMLElement>('sm-widget')
    ?.style?.setProperty(
      (event.target as HTMLInputElement).id,
      (event.target as HTMLInputElement).value,
    );
};

const CssSelectorContainer = () => {
  return (
    <div className="border-2 sm-bg-gray-lightest sm-max-w-xl">
      <Heading type="h1">Css Selector</Heading>
      {Object.keys(colorVariables).map((variable) => {
        return (
          <div key={variable} className="sm-p1">
            <label for={variable} className="sm-pr-1">
              {variable}
            </label>
            <input
              type="color"
              id={variable}
              value={colorVariables[variable]}
              onChange={(e: Event) => updateCssVariables(e)}
            />
          </div>
        );
      })}

      {Object.keys(fontVariables).map((variable) => {
        return (
          <div key={variable} className="sm-p1">
            <label for={variable} className="sm-pr-1">
              {variable}
            </label>
            <input
              type="text"
              id={variable}
              value={fontVariables[variable]}
              onChange={(e: Event) => updateCssVariables(e)}
            />
          </div>
        );
      })}
    </div>
  );
};

const ElementContainer = () => {
  return (
    <div className="sm-max-w-xl">
      <Heading type="h1">Elements</Heading>

      <Button theme="outline" children="outline button" />
      <Button theme="default" children="default button" />
      {headingOptions.map((heading) => {
        return <Heading key={heading} type={heading}>{`${heading} Heading`}</Heading>;
      })}

      {textOptions.map((size) => {
        return (
          <Text size={size} key={size}>
            This is text element: size {size}
          </Text>
        );
      })}
      <Notifications />
    </div>
  );
};

const IconContainer = () => {
  return (
    <div className="sm-max-w-xl">
      <Heading type="h1">Icon Buttons</Heading>
      {availableIcons.map((path) => {
        return (
          <IconButton
            key={path}
            name={path}
            size={20}
            title={path}
            shadow={true}
            theme={'default'}
          />
        );
      })}

      {availableIcons.map((path) => {
        return (
          <IconButton
            key={path}
            name={path}
            size={20}
            title={path}
            shadow={true}
            theme={'danger'}
          />
        );
      })}
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="sm-max-w-xl">
      <Heading type="h1">Content Cards</Heading>
      <Card isDismissible={true} flush={false}>
        <div>
          <p>This is a dismissible content card.</p>
          <Button>Button</Button>
        </div>
      </Card>
      <OptionsCard content={optionsCardContent} />
      <ImageCard content={imageCardContent} />
      <LinkCard content={linkcardContent} isExternal={true} />
      <MarkdownCard content={markdownContent} />
    </div>
  );
};

const StatesContainer = () => {
  return (
    <div>
      <Heading type="h1">Conversation States</Heading>
      {Object.values(ConversationStateTypes).map((state) => {
        return <ConversationState key={state} state={state} />;
      })}
    </div>
  );
};

export const Basic = () => {
  return (
    <>
      <CssSelectorContainer />
      <ElementContainer />
      <IconContainer />
      <StatesContainer />
      <CardContainer />
      <Widget
        greeting={'A custom greeting message'}
        profilePicture={'https://assets.cdn.soulmachines.cloud/AvatarCoverImages/image-sam-l.jpg'}
      />
    </>
  );
};
