import { ContentCard } from '@soulmachines/smwebsdk';
import { Card } from '../Card';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Heading, HeadingProps } from '../Heading';
import { Text, TextProps } from '../Text';

export type MarkdownCardProps = {
  content: ContentCard;
  //  Styles are passed through from react spring
  style?: Record<string, 'string | CSSProperties | undefined'>;
};

export type LiProps = {
  children: string;
  ordered?: boolean;
  index?: number;
  checked?: boolean | null;
  className?: string | null;
};

export type AProps = {
  href: string;
  children: string;
  title: string;
  target?: string;
};

export type OlProps = {
  children: string;
  className: string | null;
};

export type MarkdownData = {
  text: string;
};

export type CodeProps = {
  children: string;
  inline?: boolean;
  className?: string;
};
export type GenericProps = {
  node: object;
};

export function MarkdownCard({ content, style }: MarkdownCardProps) {
  const data = content.data as unknown as MarkdownData;
  if (!data.text) {
    return null;
  }
  const markdown = data.text;

  return (
    <Card style={style}>
      <div
        data-sm-content={content.id}
        className="sm-sans sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-max-h-contentCard sm-overflow-y-auto sm-text-neutral-700 sm-font-normal sm-font-primary"
      >
        {/*
        Fixes a typescript issue "JSX element type 'ReactMarkdown' does not have any construct or call signatures".
        @ts-ignore */}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ type = 'h1', children, size = '2xl' }: HeadingProps) => (
              <Heading type={type} children={children} size={size} />
            ),
            h2: ({ type = 'h2', children, size = '2xl' }: HeadingProps) => (
              <Heading type={type} children={children} size={size} />
            ),
            h3: ({ type = 'h3', children, size = 'lg' }: HeadingProps) => (
              <Heading type={type} children={children} size={size} />
            ),
            h4: ({ type = 'h4', children, size = 'lg' }: HeadingProps) => (
              <Heading type={type} children={children} size={size} />
            ),
            h5: ({ type = 'h5', children, size = 'md' }: HeadingProps) => (
              <Heading type={type} children={children} size={size} />
            ),
            h6: ({ type = 'h6', children, size = 'md' }: HeadingProps) => (
              <Heading type={type} children={children} size={size} />
            ),
            li: ({ children }: LiProps) => {
              return <li>{children}</li>;
            },
            ol: ({ children }: OlProps) => {
              return <ol className="sm-ml-4 sm-list-decimal">{children}</ol>;
            },
            ul: ({ children, className }: OlProps) => {
              if (className === 'task-list-item') {
                return <ul className="sm-ml-4 sm-list-none">{children}</ul>;
              }
              return <ul className="sm-ml-4 sm-list-disc">{children}</ul>;
            },
            a: ({ href, children, title, target }: AProps) => {
              let isExternal = false;
              if (!target) {
                const currentDomain = window.location.hostname;
                const destinationDomain = new URL(href).hostname;
                if (!(currentDomain === destinationDomain)) {
                  isExternal = true;
                }
              }
              const conditionalAttributes: Record<string, string> = {};

              if (isExternal) {
                conditionalAttributes['target'] = '_blank';
                conditionalAttributes['rel'] = 'noopener noreferrer';
              }

              // Handle possible vulnerability when opening new window
              const newWnd = window.open();
              if (newWnd) newWnd.opener = null;

              return (
                <a
                  className="sm-text-blue-400 active:sm-text-red-500 hover:sm-underline focus:underline visited:sm-text-pink-500"
                  href={href}
                  title={title}
                  {...conditionalAttributes}
                >
                  {children}
                </a>
              );
            },
            p: ({ children }: TextProps) => {
              return <Text children={children} size="md" />;
            },
            hr: () => <hr className="sm-w-11/12 sm-bg-gray-400" />,
            table: ({ node, ...props }: GenericProps) => {
              return (
                <table
                  className="sm-table-auto md:sm-table-fixed sm-w-full sm-border-spacing-0"
                  {...props}
                />
              );
            },
            tr: ({ ...props }: GenericProps) => {
              return <tr className="even:sm-bg-gray-200" {...props} />;
            },
            thead: ({ ...props }: GenericProps) => {
              return <thead className="sm-bg-blue-300 sm-text-left" {...props} />;
            },
            pre: ({ ...props }) => <pre className="sm-bg-gray-300 sm-rounded-sm" {...props} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </Card>
  );
}
