import Request from "@/utils/service";

// 对话
export function getChat(data: string) {
  return Request("/api/v1/website/index/chat_identification", {
    method: "POST",
    params: {
      content: data,
    },
  });
}
