import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://spzofgjgxvmnlgjcehvk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwem9mZ2pneHZtbmxnamNlaHZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyMTk1ODIsImV4cCI6MjAxMDc5NTU4Mn0.toYiD0JruHrdAAv6Q7BgBXDE2W68S-abxJ7JPnZVQ4Y";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
