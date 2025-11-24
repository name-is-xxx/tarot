import { Card, Text, Image, Badge, Button } from "@mantine/core";
import { ArrowUpRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const list = [
    {
      id: "1",
      imgUrl:
        "https://ww2.sinaimg.cn/mw690/0079ZOJxgy1ht9jpqq8oaj30j60pgtfm.jpg",
      title:
        "001 001 0010000000000000000001111111111111111111111122222222222222",
      content:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      createTime: "xxxxx",
      tag: [1, 2, 3],
      isDelete: false,
      deleteTime: "",
    },
    {
      id: "2",
      imgUrl:
        "https://ww2.sinaimg.cn/mw690/0079ZOJxgy1ht9jpqq8oaj30j60pgtfm.jpg",
      title: "002",
      createTime: "xxxxx",
      tag: [1, 2, 3],
      isDelete: false,
      deleteTime: "",
      content: "111",
    },
    {
      id: "3",
      imgUrl:
        "https://img2.baidu.com/it/u=1967377437,902855772&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=858",
      title: "003",
      createTime: "xxxxx",
      tag: [1, 2, 3],
      isDelete: false,
      deleteTime: "",
      content: "111",
    },
    {
      id: "4",
      imgUrl:
        "https://ww2.sinaimg.cn/mw690/0079ZOJxgy1ht9jpqq8oaj30j60pgtfm.jpg",
      title: "004",
      createTime: "xxxxx",
      tag: [1, 2, 3],
      isDelete: false,
      deleteTime: "",
      content: "111",
    },
    {
      id: "5",
      imgUrl:
        "https://proxyimg.sucai999.com/preimg/BCB8B2/700/imagestore/194/12e721dbb2b7ab84339e7a78e1962ab.jpg?x-oss-process=image/format,webp",
      title: "005",
      createTime: "xxxxx",
      tag: [1, 2, 3],
      isDelete: false,
      deleteTime: "",
      content: "111",
    },
    {
      id: "6",
      imgUrl:
        "https://img0.baidu.com/it/u=621702811,887566362&fm=253&app=138&f=JPEG?w=500&h=500",
      title: "006",
      createTime: "xxxxx",
      tag: [1, 2, 3],
      isDelete: false,
      deleteTime: "",
      content: "111",
    },
    {
      id: "7",
      imgUrl:
        "https://iknow-pic.cdn.bcebos.com/dbb44aed2e738bd4cf3b04b0b38b87d6277ff91d",
      title: "007",
      createTime: "xxxxx",
      tag: [1, 2, 3],
      isDelete: false,
      deleteTime: "",
      content: "111",
    },
    {
      id: "8",
      imgUrl:
        "https://img0.baidu.com/it/u=621702811,887566362&fm=253&app=138&f=JPEG?w=500&h=500ps://ww2.sinaimg.cn/mw690/0079ZOJxgy1ht9jpqq8oaj30j60pgtfm.jpg",
      title: "008",
      createTime: "xxxxx",
      tag: [1, 2, 3],
      isDelete: false,
      deleteTime: "",
      content: "111",
    },
  ];
  return (
    <>
      <Text
        ta="center"
        fw={600}
        className="w-full border-y-2 text-7xl md:text-8xl lg:text-9xl mb-5 xs:mb-8"
      >
        THE BLOG
      </Text>

      <Button onClick={() => navigate("/add")} className="mb-5 xs:mb-8">
        add blog
      </Button>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mdOnly:gap-x-4 mdOnly:gap-y-6">
        {list.map((item) => (
          <>
            <Card padding={0} className="gap-6">
              <Card.Section className="h-60">
                <Image
                  src={item.imgUrl}
                  alt="cover image"
                  className="h-full object-cover"
                />
              </Card.Section>
              <div className="space-y-3 flex-1">
                <Text
                  size="lg"
                  className="font-bold text-[var(--mantine-color-grape-7)]"
                >
                  {item.createTime}
                </Text>
                <div className="flex justify-between">
                  <span className="text-xl font-bold truncate text-balance flex-1">
                    {item.title}
                  </span>
                  <ArrowUpRight size={20} weight="bold" />
                </div>
                <Text size="lg" className="text-[var(--mantine-color-dimmed)]">
                  {item.content}
                </Text>
              </div>
              <div className="flex gap-2 items-center">
                <Badge color="blue">Badge</Badge>
                <Badge color="blue">Badge</Badge>
                <Badge color="blue">Badge</Badge>
              </div>
            </Card>
          </>
        ))}
      </div>
    </>
  );
};
export default Blog;
