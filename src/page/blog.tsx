import { Card, Text, Image } from "@mantine/core";
// 32 48
const Blog = () => {
  const tags = [
    {
      id: "1",
      name: "001",
      createTime: "xxxxx",
      isDelete: false,
      deleteTime: "",
      describe: "this is the one",
    },
    {
      id: "2",
      name: "002",
      createTime: "xxxxx",
      isDelete: false,
      deleteTime: "",
      describe: "this is the 2",
    },
    {
      id: "3",
      name: "003",
      createTime: "xxxxx",
      isDelete: false,
      deleteTime: "",
      describe: "this is the 3",
    },
    {
      id: "4",
      name: "004",
      createTime: "xxxxx",
      isDelete: false,
      deleteTime: "",
      describe: "this is the 3+1",
    },
    {
      id: "5",
      name: "005",
      createTime: "xxxxx",
      isDelete: false,
      deleteTime: "",
      describe: "this is the 3+2",
    },
  ];
  const list = [
    {
      id: "1",
      imgUrl:
        "https://ww2.sinaimg.cn/mw690/0079ZOJxgy1ht9jpqq8oaj30j60pgtfm.jpg",
      title: "001",
      content: "111",
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
        className="w-full border-y-2 text-7xl md:text-8xl lg:text-9xl"
      >
        THE BLOG
      </Text>
      <div className="bg-red-500 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mdOnly:gap-x-4 mdOnly:gap-y-6">
        {list.map((item) => (
          <>
            <Card className="w-60">
              <Card.Section>
                <Image src={item.imgUrl} alt="Norway" />
              </Card.Section>
              <div>
                <Text fw={500}>{item.title}</Text>
              </div>
              <Text size="sm" c="dimmed">
                {item.content}
              </Text>
            </Card>
          </>
        ))}
      </div>
    </>
  );
};
export default Blog;
