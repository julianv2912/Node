// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nkgougnngibklwowicwy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rZ291Z25uZ2lia2x3b3dpY3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MzkxMTMsImV4cCI6MjA2MzAxNTExM30.AugXHvwGUqy0L3xgld17nkLmTNh3o0IaRwqbeLDfs8o';
export const supabase = createClient(supabaseUrl, supabaseKey);