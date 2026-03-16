insert into public.schools (name, location, country, fleet_size, estimated_cost_inr, duration_months, hidden_fees, contact, email, website, rating, reviews_count, multi_engine_available, is_featured, last_verified_at)
values
  ('Government Flying Training School', 'Gondia, Maharashtra', 'India', 15, 2500000, 22, 'Exam retake fee and hostel deposits are extra.', '+91-7182-255500', 'info@gfts.gov.in', 'https://gfts.gov.in', 4.5, 126, false, true, now()),
  ('National Flying Training Institute', 'Gondia, Maharashtra', 'India', 20, 3000000, 20, 'Uniform, headset and simulator hours billed separately.', '+91-7182-255600', 'admissions@nfti.co.in', 'https://nfti.co.in', 4.7, 184, true, true, now()),
  ('CAE Oxford Aviation Academy', 'Gondia, Maharashtra', 'India', 25, 3800000, 19, 'Type-rating prep and accommodation charged separately.', '+91-7182-255700', 'india@cae.com', 'https://cae.com', 4.8, 215, true, true, now());

insert into public.study_material (subject, title, category, description, file_url, premium)
values
  ('Air Navigation', 'Navigation Formula Quick Sheet', 'cheat_sheet', 'Essential formulas for DGCA navigation prep.', null, false),
  ('Meteorology', 'Cloud Types & Visibility Guide', 'book', 'Visual classification and weather interpretation for pilots.', null, false),
  ('Air Regulation', 'DGCA CAR Deep Dive Question Bank', 'question_bank', '500 high-yield scenario questions with explanations.', null, true),
  ('Technical General', 'Aircraft Systems Complete Notes', 'book', 'Structured systems notes and oral prep topics.', null, true);

insert into public.medical_centers (name, location, center_type, address, contact, email, website, appointment_link, is_premium, last_verified_at)
values
  ('Institute of Aerospace Medicine', 'Bangalore', 'Class 1', 'Vimanapura Post, Bangalore - 560017', '+91-80-2252-2101', 'iam@indianairforce.nic.in', 'https://indianairforce.nic.in', null, false, now()),
  ('Air Force Central Medical Establishment', 'Delhi', 'Class 1', 'Subroto Park, New Delhi - 110010', '+91-11-2569-9200', 'afcme@indianairforce.nic.in', 'https://indianairforce.nic.in', null, false, now()),
  ('Dr. Rajesh Kumar', 'Delhi', 'Class 2', 'Safdarjung Enclave, New Delhi', '+91-9876543210', 'dr.rajesh@aviationmed.com', null, null, true, now());
