import { getNoteList } from "@/api/notes";
import dateTrans from "@/utils/dataTrans";
import { getApiErrorMessage } from "@/utils/service";
import { Badge, Card, Image, Pagination, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ArrowUpRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PAGE_SIZE = 10;

const Blog = () => {
  const navigate = useNavigate();
  const [list, setList] = useState<API.article[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleDetail = (id: string) => {
    navigate(`/${id}`);
  };

  const loadPage = async (nextPage: number) => {
    setIsLoading(true);
    try {
      const res = await getNoteList(nextPage, PAGE_SIZE);
      setList(res.data);
      setPage(res.pagination.page);
      setTotalPages(res.pagination.totalPage);
    } catch (error) {
      notifications.show({
        color: "red",
        title: "列表加载失败",
        message: getApiErrorMessage(error, "文章列表加载失败，请稍后重试"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadPage(page);
  }, []);
  return (
    <div className="overflow-hidden">
      <Text
        ta="center"
        fw={800}
        className="w-full border-y-2 text-7xl md:text-8xl lg:text-9xl mb-5 xs:mb-8"
      >
        THE BLOG
      </Text>

      <div className="flex flex-col gap-8">
        <Text ta="left" fw={600}>
          New Post
        </Text>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mdOnly:gap-x-4 mdOnly:gap-y-6">
          {list.map((item) => (
            <Card
              key={item.id}
              padding={0}
              className="gap-6"
              onClick={() => handleDetail(item.id)}
            >
              <Card.Section className="h-60 overflow-hidden">
                <Image
                  src={item.coverPageUrl}
                  alt="cover image"
                  className="h-full origin-center object-cover transition-transform duration-300 hover:scale-110"
                />
              </Card.Section>
              <div className="space-y-3 flex-1 cursor-default">
                <Text size="sm" className="font-bold text-purple-700">
                  {dateTrans(item.lastUpdate)}
                </Text>
                <div className="flex justify-between items-end">
                  <span className="text-xl font-bold truncate text-balance flex-1">
                    {item.title}
                  </span>
                  <ArrowUpRight size={20} weight="bold" />
                </div>
                <div className="line-clamp-2 text-slate-400">
                  {item.content}
                </div>
              </div>
              {item.tags && (
                <div className="flex gap-2 items-center">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} color="blue">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        <Pagination
          value={page}
          total={totalPages}
          onChange={(nextPage) => void loadPage(nextPage)}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};
export default Blog;
