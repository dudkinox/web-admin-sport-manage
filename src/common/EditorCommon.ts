export default function initEditor(id?: string) {
    ($(id ?? "#summerNote") as any).summernote();
}

export function destroyEditor(id?: string) {
    ($(id ?? "#summerNote") as any).summernote().destroy();
}