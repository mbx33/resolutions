//create supabse client

import { createClient } from '@supabase/supabase-js';

console.log(process.env.NEXT_PUBLIC_SUPABASE_KEY, 'key');

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export default supabase;
