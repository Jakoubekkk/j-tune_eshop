import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPA_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

function uploadProduct () {

}

export default uploadProduct;