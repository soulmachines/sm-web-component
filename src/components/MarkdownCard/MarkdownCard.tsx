import { ContentCard } from '@soulmachines/smwebsdk';
import { Card } from '../Card';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
};

export type AProps = {
  href: string;
  children: string;
  title: string;
  target?: string;
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
        className="sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-max-h-contentCard sm-overflow-y-auto"
      >
        {/*
        Fixes a typescript issue "JSX element type 'ReactMarkdown' does not have any construct or call signatures".
        @ts-ignore */}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ type = 'h1', children }: HeadingProps) => (
              <Heading type={type} children={children} />
            ),
            h2: ({ type = 'h2', children }: HeadingProps) => (
              <Heading type={type} children={children} />
            ),
            h3: ({ type = 'h3', children }: HeadingProps) => (
              <Heading type={type} children={children} />
            ),
            h4: ({ type = 'h4', children }: HeadingProps) => (
              <Heading type={type} children={children} />
            ),
            h5: ({ type = 'h5', children }: HeadingProps) => (
              <Heading type={type} children={children} />
            ),
            h6: ({ type = 'h6', children }: HeadingProps) => (
              <Heading type={type} children={children} />
            ),
            li: ({ children, ordered, index }: LiProps) => {
              if (ordered) {
                return (
                  <li>
                    {index + 1}. {children}
                  </li>
                );
              }
              return <li>- {children}</li>;
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
