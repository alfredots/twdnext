import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://wxyiywagzwmrhyugmaqp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4eWl5d2Fnendtcmh5dWdtYXFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzA1MDkzOCwiZXhwIjoyMDAyNjI2OTM4fQ.SwWwhtDZFyVYQ_YsnYF77j2yGsEEWibLVryDIkxdrmQ'
)
