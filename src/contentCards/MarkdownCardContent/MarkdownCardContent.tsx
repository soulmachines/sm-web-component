import { ContentCard as SMContentCard } from '@soulmachines/smwebsdk';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Heading, HeadingProps } from '../../components/Heading';
import { Text, TextProps } from '../../components/Text';

export type MarkdownCardContentProps = {
  content: SMContentCard;
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

export function MarkdownCardContent({ content }: MarkdownCardContentProps) {
  const data = content.data as unknown as MarkdownData;
  if (!data.text) {
    return null;
  }
  const markdown = data.text;

  return (
    <>
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
            return <ol className="sm-list-decimal sm-pl-5 sm-mt-0 sm-mb-0">{children}</ol>;
          },
          ul: ({ children, className }: OlProps) => {
            if (className === 'contains-task-list') {
              return <ul className="sm-list-none sm-pl-0 sm-mt-0 sm-mb-0">{children}</ul>;
            }
            return <ul className="sm-list-disc sm-pl-5 sm-mt-0 sm-mb-0">{children}</ul>;
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

            return (
              <a
                className="sm-text-primary-base active:sm-text-primary-dark hover:sm-underline focus:underline visited:sm-text-primary-dark"
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
          hr: () => <hr className="sm-w-11/12 sm-bg-gray-lightest" />,
          table: ({ ...props }: GenericProps) => {
            return (
              <table
                className="sm-table-auto md:sm-table-fixed sm-w-full sm-border-spacing-0"
                {...props}
              />
            );
          },
          tr: ({ ...props }: GenericProps) => {
            return <tr className="even:sm-bg-gray-lightest" {...props} />;
          },
          thead: ({ ...props }: GenericProps) => {
            return <thead className="sm-bg-gray-light sm-text-left" {...props} />;
          },
          pre: ({ ...props }) => <pre className="sm-bg-gray-light sm-rounded-sm" {...props} />,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </>
  );
}
