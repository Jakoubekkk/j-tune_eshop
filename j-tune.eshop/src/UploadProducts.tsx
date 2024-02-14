import { createClient } from "@supabase/supabase-js";
import Products from "./Products";

export const supabase = createClient("https://wemfvovctkoappoaqcby.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlbWZ2b3ZjdGtvYXBwb2FxY2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3NTY2OTEsImV4cCI6MTk5MTMzMjY5MX0.PuqJ4YkR8lEYn41dyp83Hac0LqwQZ1Kmb-vGxAexPDs");

export async function uploadFiles(
id: number, 
description: string,
img_url: any,
price: number
): Promise<void> {
  const {data, error} = await supabase.storage
  .from('products')
  .upload(description, img_url);

if (data) {
   const imgPath = supabase
   .storage
   .from('products')
   .getPublicUrl(data.path);

   const { error } = await supabase
    .from("id")
    .insert({ id, img_url: imgPath.data.publicUrl });

    if (error) {
        console.log("Table insert fail.");
    } else {
        console.log("success!");
    }
    
} else {
    console.log("Image upload fail.", error);
}
}
