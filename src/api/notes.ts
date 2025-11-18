import Request from "@/utils/service";

export function getNoteList() {
  return Request<API.list[]>(`/api/notes`, {
    method: "GET",
  });
}

export function getNote(id: number) {
  return Request(`/api/notes/${id}`, {
    method: "GET",
  });
}

export function addNote(data: Pick<API.list, "title" | "content">) {
  return Request<API.list>("/api/notes/new", {
    method: "POST",
    data,
  });
}
