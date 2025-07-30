import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="mb-4 text-heading-md md:text-heading-xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mb-4 mt-8 text-heading-sm md:text-heading-lg">
            {children}
          </h2>
        ),
        a: ({ href, children }) => (
          <a className="text-blue-200 hover:underline" href={href}>{children}</a>
        ),
        p: ({ children }) => (
          <p className="mb-6 leading-relaxed text-gray-200">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mb-6 leading-relaxed text-gray-200 list-disc pl-4">{children}</ul>
        ),
        li: ({ children }) => (
          <li className="mb-6 leading-relaxed text-gray-200">{children}</li>
        ),
        strong: ({ children }) => (
          <strong className="font-extrabold leading-relaxed text-gray-100">{children}</strong>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
