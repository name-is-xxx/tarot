import { removeImage, uploadImage } from "@/api/files";
import { addNote } from "@/api/notes";
import { getApiErrorMessage } from "@/utils/service";
import {
  Button,
  Group,
  Image,
  Input,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { notifications } from "@mantine/notifications";
import { Image as ImageIcon, UploadSimple, X } from "phosphor-react";
import { FormEvent, useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState<API.file>();
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDrop = async (files: File[]) => {
    setIsUploading(true);
    try {
      const res = await uploadImage(files[0]);
      if (res.status === 200) {
        setImg(res.data);
        notifications.show({
          color: "green",
          message: "图片上传成功",
        });
      }
    } catch (error) {
      notifications.show({
        color: "red",
        title: "图片上传失败",
        message: getApiErrorMessage(error, "图片上传失败，请稍后重试"),
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      notifications.show({
        color: "red",
        title: "无法提交",
        message: "请正确填写标题和正文",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await addNote({
        title: title.trim(),
        content: content.trim(),
        author: "Administrator",
        coverPageID: img?.id ?? null,
      });
      if (res.status === 200) {
        notifications.show({
          color: "green",
          title: "新增成功",
          message: "文章已成功发布",
        });
        setTitle("");
        setContent("");
        setImg(undefined);
      }
    } catch (error) {
      notifications.show({
        color: "red",
        title: "新增失败",
        message: getApiErrorMessage(error, "文章新增失败，请稍后重试"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveImg = async () => {
    setIsUploading(true);
    try {
      const res = await removeImage(img.id);
      if (res.status === 200) {
        setImg(undefined);
        notifications.show({
          color: "gree",
          message: "图片删除成功",
        });
      }
    } catch (error) {
      console.log(error);
      notifications.show({
        color: "red",
        title: "删除失败",
        message: getApiErrorMessage(error, "图片删除失败，请稍后重试"),
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <Input.Wrapper label="封面" className="flex flex-col h-60">
        {img ? (
          <div className="flex-1 overflow-hidden flex items-end gap-4">
            <Image
              radius="md"
              src={img.downloadUrl}
              className="h-full w-fit object-contain"
            />
            <Button onClick={() => handleRemoveImg()}>清除</Button>
          </div>
        ) : (
          <Dropzone
            onDrop={handleDrop}
            onReject={() =>
              notifications.show({
                color: "red",
                title: "图片不符合要求",
                message: "请选择一张不超过 10MB 的图片",
              })
            }
            maxSize={10 * 1024 ** 2}
            accept={["image/*"]}
            multiple={false}
            maxFiles={1}
            loading={isUploading}
            classNames={{
              root: "flex-1",
              inner: "h-full",
            }}
          >
            <div className="h-full flex items-center justify-center pointer-events-none">
              <Dropzone.Accept>
                <UploadSimple size={52} color="var(--mantine-color-blue-6)" />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <X size={52} color="var(--mantine-color-red-6)" />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <ImageIcon size={52} color="var(--mantine-color-dimmed)" />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  拖拽或点击上传图片
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  文件大小不可超过 10MB
                </Text>
              </div>
            </div>
          </Dropzone>
        )}
      </Input.Wrapper>
      <TextInput
        required
        label="标题"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
      />
      <Textarea
        autosize
        required
        label="内容"
        name="content"
        minRows={5}
        value={content}
        onChange={(event) => setContent(event.currentTarget.value)}
      />
      <Button type="submit" loading={isSubmitting} disabled={isUploading}>
        保存
      </Button>
    </form>
  );
};

export default AddBlog;
