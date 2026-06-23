import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast"; // toast එක import කලා

// Vite වලදී env variables කියවන්නේ import.meta.env එකෙන්
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(url, key);

// const url = "https://kpoiauwnazvwkerwoagu.supabase.co";
// const key =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwb2lhdXduYXp2d2tlcndvYWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNTg0NzEsImV4cCI6MjA5NzczNDQ3MX0.ghAS8KRZvI0avX3Z0LSxR-mxu2JEo5wc8DNOOttCXvE";

// const supabase = createClient(url, key);

export default async function uploadMedia(file) {
  if (!file) {
    toast.error("No file selected");
    return null;
  }
  const timestamp = new Date().getTime();
  const fileName = timestamp + "_" + file.name;

  try {
    // 2. Storage එකට upload කිරීම
    const { error } = await supabase.storage
      .from("images")
      .upload(fileName, file, { upsert: true });

    if (error) throw error; // error එකක් ආවොත් කෙලින්ම catch එකට යවනවා

    // 3. Public URL එක ලබා ගැනීම
    const { data } = supabase.storage.from("images").getPublicUrl(fileName);

    toast.success("File uploaded successfully!");
    return data.publicUrl; // කෙලින්ම URL එක return කරනවා
  } catch (err) {
    console.error("Upload error:", err);
    toast.error("File upload failed!");
    return null;
  }
}
