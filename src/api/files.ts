import Request from "@/utils/service";

export function uploadImage(files: File) {
  const formData = new FormData();
  formData.append("image", files);

  return Request<API.file>(`/api/files/img`, {
    method: "POST",
    data: formData,
  });
}

export function removeImage(id: string) {
  return Request<API.file>(`/api/files/delete/img`, {
    method: "POST",
    params: { id },
  });
}
