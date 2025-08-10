import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://kyhxzkvsnkrmglzzmzav.supabase.co'
const supabaseKey = 'sb_publishable_ax-XYWs2CTP-lat7OeKxmA_gA2iStjG'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase