CREATE TABLE applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  opening_slug text NOT NULL,
  locale text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  link text,
  motivation text,
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  cv_original_filename text NOT NULL,
  cv_stored_filename text NOT NULL,
  cv_size_bytes integer NOT NULL,
  status text NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'in_review', 'interview', 'hired', 'rejected')),
  notes text NOT NULL DEFAULT '',
  consented_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX applications_opening_slug_idx ON applications (opening_slug);
CREATE INDEX applications_status_idx ON applications (status);
CREATE INDEX applications_created_at_idx ON applications (created_at DESC);
