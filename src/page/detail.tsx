import { getNote } from "@/api/notes";
import dateTrans from "@/utils/dataTrans";
import { ArrowClockwise, ArrowLeft } from "phosphor-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type LoadState = "loading" | "loaded" | "not-found" | "error";

const PageFrame = ({ children }: { children: ReactNode }) => (
  <main>{children}</main>
);

const BackToBlog = () => (
  <Link to="/blog" className="flex items-center gap-2 text-sm">
    <ArrowLeft size={20} aria-hidden="true" />
    <span>Back to blog</span>
  </Link>
);

const Detail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<API.article | null>(null);
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isCurrentRequest = true;

    if (!id) {
      setArticle(null);
      setLoadState("not-found");
      return () => {
        isCurrentRequest = false;
      };
    }

    setArticle(null);
    setLoadState("loading");

    const loadArticle = async () => {
      try {
        const response = await getNote(id);
        if (!isCurrentRequest) return;

        if (response.status === 404 || !response.data) {
          setLoadState("not-found");
          return;
        }

        if (response.status !== 200) {
          setLoadState("error");
          return;
        }

        setArticle(response.data);
        setLoadState("loaded");
      } catch (error) {
        if (!isCurrentRequest) return;

        const status =
          error && typeof error === "object"
            ? (error as { response?: { status?: number } }).response?.status
            : undefined;
        setLoadState(status === 404 ? "not-found" : "error");
      }
    };

    loadArticle();

    return () => {
      isCurrentRequest = false;
    };
  }, [id, retryCount]);

  if (loadState === "loading") {
    return (
      <PageFrame>
        <BackToBlog />
        <section
          aria-label="Loading article"
          aria-busy="true"
          className="mt-8 max-w-4xl"
        >
          <div className="motion-safe:animate-pulse">
            <div className="mb-6 h-4 w-36 rounded bg-[var(--mantine-color-default-border)]" />
            <div className="mb-4 h-12 max-w-2xl rounded bg-[var(--mantine-color-default-border)]" />
            <div className="h-4 w-72 max-w-full rounded bg-[var(--mantine-color-default-border)]" />
            <div className="mt-12 space-y-4">
              <div className="h-4 w-full rounded bg-[var(--mantine-color-default-border)]" />
              <div className="h-4 w-full rounded bg-[var(--mantine-color-default-border)]" />
              <div className="h-4 w-4/5 rounded bg-[var(--mantine-color-default-border)]" />
            </div>
          </div>
        </section>
      </PageFrame>
    );
  }

  if (loadState === "not-found") {
    return (
      <PageFrame>
        <BackToBlog />
        <section className="mt-12 max-w-prose" aria-live="polite">
          <h1 className="text-3xl font-semibold text-[var(--mantine-color-text)]">
            Article not found
          </h1>
          <p className="mt-4 text-base text-[var(--mantine-color-dimmed)]">
            This article may have been removed or the link may be incorrect.
          </p>
        </section>
      </PageFrame>
    );
  }

  if (loadState === "error" || !article) {
    return (
      <PageFrame>
        <BackToBlog />
        <section className="mt-12 max-w-prose" aria-live="polite">
          <h1 className="text-3xl font-semibold text-[var(--mantine-color-text)]">
            Article could not be loaded
          </h1>
          <p className="mt-4 text-base text-[var(--mantine-color-dimmed)]">
            Check your connection and try again.
          </p>
          <button
            type="button"
            onClick={() => setRetryCount((count) => count + 1)}
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-[var(--mantine-color-text)] px-4 text-sm font-bold text-[var(--mantine-color-body)] transition-colors duration-300 hover:bg-[var(--mantine-color-dark-7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mantine-color-grape-7)]"
          >
            <ArrowClockwise size={18} aria-hidden="true" />
            <span>Try again</span>
          </button>
        </section>
      </PageFrame>
    );
  }

  return (
    <main className="py-5 space-y-10">
      <header className="space-y-3">
        <BackToBlog />
        <h1 className="text-balance break-words text-4xl font-semibold leading-tight text-[var(--mantine-color-text)] sm:text-5xl">
          {article.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[var(--mantine-color-gray-6)]">
          <span className="space-x-1">
            <span>By</span>
            <span className="font-bold text-[var(--mantine-color-text)]">
              {article.author}
            </span>
          </span>
          <span aria-hidden="true">|</span>
          <span className="space-x-1">
            <span>创建于</span>
            <time dateTime={dateTrans(article.createdTime)}>
              {dateTrans(article.createdTime)}
            </time>
          </span>
          <span aria-hidden="true">|</span>
          <span className="space-x-1">
            <span>更新于</span>
            <time dateTime={dateTrans(article.lastUpdate)}>
              {dateTrans(article.lastUpdate)}
            </time>
          </span>
          {article.category?.length ? (
            <>
              <span aria-hidden="true">|</span>
              <span className="space-x-1">
                <span>分类</span>
                <p className="mb-4 text-sm font-medium text-[var(--mantine-color-grape-6)]">
                  {article.category.join(", ")}
                </p>
              </span>
            </>
          ) : null}
        </div>
      </header>

      <article className="space-y-6 break-words text-pretty text-lg">
        {article.content.split(/\r?\n\s*\r?\n/).map((paragraph, index) => (
          <p key={index} className="whitespace-pre-line">
            {paragraph}
          </p>
        ))}
      </article>

      {article.tags?.length ? (
        <footer className="mt-12 flex max-w-prose flex-wrap items-center gap-x-3 gap-y-2 border-t border-[var(--mantine-color-default-border)] pt-6 text-sm">
          <span className="font-medium text-[var(--mantine-color-dimmed)]">
            Tags
          </span>
          {article.tags.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="text-[var(--mantine-color-grape-6)]"
            >
              {tag}
            </span>
          ))}
        </footer>
      ) : null}
    </main>
  );
};

export default Detail;
