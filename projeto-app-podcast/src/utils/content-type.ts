export enum ContentType {
    JSON = "application/json",                  // Para enviar e receber JSON (o mais comum)
    FORM_URLENCODED = "application/x-www-form-urlencoded", // Para envio de formulários simples
    FORM_DATA = "multipart/form-data",           // Para envio de arquivos (upload)
    XML = "application/xml",                     // Para APIs legadas que usam XML
    TEXT = "text/plain",                          // Para respostas ou requisições de texto simples
    OCTET_STREAM = "application/octet-stream"    // Para dados binários (downloads, uploads)
}
