import { ConversationStateTypes } from '@soulmachines/smwebsdk/lib-esm/enums/ConversationStateTypes';
import { SMProviderDecorator } from '../../.storybook/decorators/SMProviderDecorator';
import paths from '../components/Icon/paths';
import { Button } from '../components/Button';
import { ConversationState } from '../appComponents/ConversationState';
import { Heading, headingSizes } from '../components/Heading';
import { IconButton, Theme } from '../components/IconButton/IconButton';
import { ImageCard } from '../contentCards/ImageCard/ImageCard';
import { LinkCard } from '../contentCards/LinkCard/LinkCard';
import { MarkdownCard } from '../contentCards/MarkdownCard/MarkdownCard';
import { Notifications } from '../components/Notifications/Notifications';
import { OptionsCard } from '../contentCards/OptionsCard/OptionsCard';
import { Text, textSizes } from '../components/Text/Text';
import { Widget } from '../appComponents/Widget';
import {
  imageCardContent,
  linkCardContent,
  markdownCardContent,
  optionsCardContent,
} from '../storybook-content';

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

const PreviewSection = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="sm-max-w-xl sm-my-10 ">
      <div className="sm-mb-4">
        <Heading type="h2">{title}</Heading>
      </div>
      <div className="sm-flex sm-flex-col sm-gap-y-2">{children}</div>
    </div>
  );
};

const Divider = () => <hr className="sm-border-gray-lightest" />;

const CssSelectorContainer = () => {
  const copyCssVariables = () => {
    const variableInputs = Array.from(document.querySelectorAll<HTMLInputElement>('[id^="--sm-"'));
    const cssVariables = variableInputs.map((input) => {
      // Variables in this list will be wrapped in quotes
      // font-family can work without quotes if its a single word, otherwise it needs quotes eg: 'Courier New', 'Brush Script MT'
      const addQuotesToValues = ['--sm-font-family-primary'];
      const value = addQuotesToValues.includes(input.id) ? `"${input.value}"` : input.value;
      return `${input.id}: ${value};`;
    });
    navigator.clipboard.writeText(cssVariables.join('\r\n'));
  };

  return (
    <>
      {Object.keys(colorVariables).map((variable) => {
        return (
          <div key={variable} className="sm-p1 sm-font-primary sm-text-sm sm-flex sm-items-center">
            <label for={variable} className="sm-pr-1">
              {variable}
            </label>
            <input
              type="color"
              className="sm-border-none"
              id={variable}
              value={colorVariables[variable]}
              onChange={(e: Event) => updateCssVariables(e)}
            />
          </div>
        );
      })}

      {Object.keys(fontVariables).map((variable) => {
        return (
          <div key={variable} className="sm-p1 sm-font-primary sm-text-sm">
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

      <div>
        <IconButton name="copy" title="Copy CSS" onClick={copyCssVariables} />
      </div>
    </>
  );
};

const ElementContainer = () => {
  return (
    <>
      <div className="sm-flex sm-gap-x-2">
        <Button theme="outline" children="outline button" />
        <Button theme="default" children="default button" />
      </div>
      {headingSizes.map((headingSize) => {
        return (
          <Heading
            key={headingSize}
            type="h1"
            size={headingSize}
          >{`Heading size: ${headingSize}`}</Heading>
        );
      })}

      {textSizes.map((textSize) => {
        return (
          <Text size={textSize} key={textSize}>
            This is text element: size {textSize}
          </Text>
        );
      })}
      <Notifications />
    </>
  );
};

const IconContainer = () => {
  return (
    <>
      <div className="sm-flex sm-gap-x-2">
        {availableIcons.map((path) => {
          return (
            <IconButton
              key={path}
              name={path}
              size={20}
              title={path}
              shadow={true}
              theme={Theme.default}
            />
          );
        })}
      </div>
      <div className="sm-flex sm-gap-x-2">
        {availableIcons.map((path) => {
          return (
            <IconButton
              key={path}
              name={path}
              size={20}
              title={path}
              shadow={true}
              theme={Theme.danger}
            />
          );
        })}
      </div>
    </>
  );
};

const CardContainer = () => {
  return (
    <div className="sm-flex sm-flex-wrap sm-gap-10">
      <OptionsCard content={optionsCardContent} />
      <ImageCard content={imageCardContent} />
      <LinkCard content={linkCardContent} isExternal={true} />
      <MarkdownCard content={markdownCardContent} />
    </div>
  );
};

const StatesContainer = () => {
  return (
    <>
      <div className="sm-flex sm-gap-x-2">
        {Object.values(ConversationStateTypes).map((state) => {
          return <ConversationState key={state} state={state} />;
        })}
      </div>
    </>
  );
};

export const Basic = () => {
  return (
    <>
      <Heading type="h1" size="2xl">
        Theme Preview
      </Heading>
      <PreviewSection title="Variables">
        <CssSelectorContainer />
      </PreviewSection>
      <Divider />
      <PreviewSection title="Elements">
        <ElementContainer />
      </PreviewSection>
      <Divider />
      <PreviewSection title="Icon Buttons">
        <IconContainer />
      </PreviewSection>
      <Divider />
      <PreviewSection title="Conversation States">
        <StatesContainer />
      </PreviewSection>
      <Divider />
      <PreviewSection title="Content Cards">
        <CardContainer />
      </PreviewSection>
      <Widget
        greeting={'A custom greeting message'}
        profilePicture={'https://assets.cdn.soulmachines.cloud/AvatarCoverImages/image-sam-l.jpg'}
      />
    </>
  );
};
