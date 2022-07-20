import { ContentCard } from '@soulmachines/smwebsdk';
import { Card } from '../Card';
import ReactMarkdown from 'react-markdown';
import { Heading, HeadingProps } from '../Heading';

export type MarkdownCardProps = {
  content: ContentCard;
  //  Styles are passed through from react spring
  style?: Record<string, 'string | CSSProperties | undefined'>;
};

export type LiProps = {
  children: string;
  ordered: boolean;
  index: number;
  checked: boolean | null;
  className: string | null;
};

export type AProps = {
  href: string;
  children: string;
  title: string;
  target?: string;
};

export type OlProps = {
  children: string;
};

export type MarkdownData = {
  text: string;
};

export function MarkdownCard({ content, style }: MarkdownCardProps) {
  const data = content.data as unknown as MarkdownData;
  console.log(data.text);
  if (!data.text) {
    return null;
  }
  const markdown = data.text;

  return (
    <Card style={style}>
      <div
        data-sm-content={content.id}
        className="sm-sans sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-max-h-contentCard sm-overflow-y-auto"
      >
        {/*
        Fixes a typescript issue "JSX element type 'ReactMarkdown' does not have any construct or call signatures".
        @ts-ignore */}
        <ReactMarkdown
          remarkPlugins={[]}
          components={{
            h1: ({
              type = 'h1',
              children,
              size = 'sm-text-2xl',
              text_class = 'sm-text-blue-800',
            }: HeadingProps) => (
              <Heading type={type} children={children} size={size} text_class={text_class} />
            ),
            h2: ({
              type = 'h2',
              children,
              size = 'sm-text-2xl',
              text_class = 'sm-text-blue-700',
            }: HeadingProps) => (
              <Heading type={type} children={children} size={size} text_class={text_class} />
            ),
            h3: ({
              type = 'h3',
              children,
              size = 'sm-text-xl',
              text_class = 'sm-text-blue-600',
            }: HeadingProps) => (
              <Heading type={type} children={children} size={size} text_class={text_class} />
            ),
            h4: ({
              type = 'h4',
              children,
              size = 'sm-text-xl',
              text_class = 'sm-text-blue-500',
            }: HeadingProps) => (
              <Heading type={type} children={children} size={size} text_class={text_class} />
            ),
            h5: ({
              type = 'h5',
              children,
              size = 'sm-text-lg',
              text_class = 'sm-text-blue-400',
            }: HeadingProps) => (
              <Heading type={type} children={children} size={size} text_class={text_class} />
            ),
            h6: ({
              type = 'h6',
              children,
              size = 'sm-text-lg',
              text_class = 'sm-text-blue-300',
            }: HeadingProps) => (
              <Heading type={type} children={children} size={size} text_class={text_class} />
            ),
            li: ({ children, ordered, index, checked, className }: LiProps) => {
              console.log(checked);
              if (ordered) {
                return (
                  <li>
                    {index + 1}. {children}
                  </li>
                );
              } else if (className === 'task-list-item') {
                return <li>{children}</li>;
              }
              return <li>- {children}</li>;
            },
            ol: ({ children }: OlProps) => {
              return <ol className="sm-ml-4">{children}</ol>;
            },
            ul: ({ children }: OlProps) => {
              return <ul className="sm-ml-4">{children}</ul>;
            },
            a: ({ href, children, title, target }: AProps) => {
              if (!target) {
                const currentDomain = window.location.hostname;
                const destinationDomain = new URL(href).hostname;
                if (!(currentDomain === destinationDomain)) target = '_blank';
              }

              return (
                <a
                  className="sm-text-blue-400 active:sm-text-red-500 visited:sm-text-pink-500 sm-underline"
                  href={href}
                  title={title}
                  target={target}
                >
                  {children}
                </a>
              );
            },
            hr: () => <hr className="sm-w-11/12 sm-bg-gray-400" />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </Card>
  );
}
