import FileUploader from "../components/file-uploader"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl mb-6 font-bold">Blueprint to OBJ Converter</h1>
      <FileUploader />
    </main>
  )
}
