import { createClient } from "@supabase/supabase-js";
export function createAdmin(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL, key=process.env.SUPABASE_SERVICE_ROLE_KEY;if(!url||!key)throw new Error("Supabase service credentials are required.");return createClient(url,key,{auth:{autoRefreshToken:false,persistSession:false}})}
