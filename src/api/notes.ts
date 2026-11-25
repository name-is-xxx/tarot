import Request from "@/utils/service";

export function getNoteList(page?: number, pageSize?: number) {
  return Request<API.article[], { pagination: API.pagination }>(`/api/notes`, {
    method: "GET",
    params: {
      page,
      pageSize,
    },
  });
}

export function getNote(id: string) {
  return Request<API.article>(`/api/notes/${id}`, {
    method: "GET",
  });
}

export function addNote(
  data: Omit<API.article, "id" | "coverPageUrl" | "createdTime" | "lastUpdate">,
) {
  return Request<API.article>("/api/notes/new", {
    method: "POST",
    data,
  });
}

export function delNote(id: string) {
  return Request(`/api/notes/${id}`, {
    method: "DELETE",
  });
}
