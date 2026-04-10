CREATE TABLE public.email_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert signups" ON public.email_signups
  FOR INSERT WITH CHECK (true);

CREATE POLICY "No public reads" ON public.email_signups
  FOR SELECT USING (false);