import { useState } from "react";
//createClient සහ toast මේ page එකට දැන් ඕන වෙන්නේ නැහැ (uploadMedia එක ඇතුලේ තියෙන නිසා),
//හැබැයි මෙතන toast පාවිච්චි කරන නිසා toast එක විතරක් තියාගමු.
import toast from "react-hot-toast";
import uploadMedia from "../lib/uploadMedia";

export default function TestPage() {
  const [file, setFile] = useState(null);

  // වඩාත් පැහැදිලි async/await ක්‍රමය විතරක් තියාගත්තා
  async function handleUpload() {
    try {
      const url = await uploadMedia(file);

      if (url) {
        console.log("Uploaded File URL:", url);
        // මෙතනින් එහාට මේ URL එක Database එකට දාන්න හෝ වෙන වැඩකට ගන්න පුළුවන්.
      }
    } catch (err) {
      console.error(err); // මෙතන error එක err ලෙස නිවැරදි කලා
      toast.error("Upload failed");
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 p-10">
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <button
        onClick={handleUpload} // අලුත් function එකට link කලා
        className="bg-green-600 text-white p-2 rounded-lg"
      >
        Submit
      </button>
    </div>
  );
}

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtwb2lhdXduYXp2d2tlcndvYWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNTg0NzEsImV4cCI6MjA5NzczNDQ3MX0.ghAS8KRZvI0avX3Z0LSxR-mxu2JEo5wc8DNOOttCXvE
//https://kpoiauwnazvwkerwoagu.supabase.co

// export default function TestPage(){
//     return(
//         <div className="w-full h-full ">
//             <div className="w-[280px] h-[280px] m-4 bg-yellow-300 pt-[10px] pl-[10px] pr-[10px]">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo fuga eaque, facilis, laboriosam non cum maxime assumenda officiis quam officia optio labore corrupti et quasi odit placeat consectetur omnis. Adipisci iusto odit, similique, neque facilis necessitatibus amet laborum officiis exercitationem laboriosam harum.
//             </div>
//             <div className="w-[280px] h-[280px] mb-[30px] bg-yellow-300 pt-[10px] pl-[10px] pr-[10px]">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo fuga eaque, facilis, laboriosam non cum maxime assumenda officiis quam officia optio labore corrupti et quasi odit placeat consectetur omnis. Adipisci iusto odit, similique, neque facilis necessitatibus amet laborum officiis exercitationem laboriosam harum.
//             </div>
//             <div className="w-[280px] h-[280px] bg-yellow-300 pt-[10px] pl-[10px] pr-[10px]">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo fuga eaque, facilis, laboriosam non cum maxime assumenda officiis quam officia optio labore corrupti et quasi odit placeat consectetur omnis. Adipisci iusto odit, similique, neque facilis necessitatibus amet laborum officiis exercitationem laboriosam harum.
//             </div>
//             <div className="w-[280px] h-[280px] bg-yellow-300 pt-[10px] pl-[10px] pr-[10px]">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo fuga eaque, facilis, laboriosam non cum maxime assumenda officiis quam officia optio labore corrupti et quasi odit placeat consectetur omnis. Adipisci iusto odit, similique, neque facilis necessitatibus amet laborum officiis exercitationem laboriosam harum.
//             </div>
//             <div className="w-[280px] h-[280px] bg-yellow-300 pt-[10px] pl-[10px] pr-[10px]">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo fuga eaque, facilis, laboriosam non cum maxime assumenda officiis quam officia optio labore corrupti et quasi odit placeat consectetur omnis. Adipisci iusto odit, similique, neque facilis necessitatibus amet laborum officiis exercitationem laboriosam harum.
//             </div>
//         </div>
//     )
// }

// Alignemts and positioning in css
// export default function TestPage(){
//     return(
//         <div className="w-full h-full">
//             <div className="flex flex-col relative w-[600px] h-[600px] justify-center items-center gap-0 bg-yellow-300">

//                 <div className="w-[100px] h-[100px] bg-red-600">
//                 </div>
//                 <div className="fixed right-7 bottom-7 w-[100px] h-[100px] bg-green-600">
//                 </div>
//                 <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-blue-600">
//                 </div>
//                 <div className="w-[100px] h-[100px] bg-white">
//                 </div>
//                 <div className="w-[100px] h-[100px] bg-black">
//                 </div>

//             </div>
//         </div>
//     )
// }
