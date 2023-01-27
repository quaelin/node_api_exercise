INSERT INTO petitions (starter_urn, title, body, created_at) VALUES ('urn:changeorg:starter:6757e68c-8ac4-11eb-8dcd-0242ac130003', 'Save our oceans', 'Lorem ipsum...', '2020-12-24 00:00:00');
INSERT INTO petitions (starter_urn, title, body, created_at) VALUES ('urn:changeorg:starter:c6e83ee8-151b-4ac0-8e4a-b0dcc11a7f0d', 'Fight for justice', 'Lorem ipsum...', DATE('now', '-1 day'));
INSERT INTO petitions (starter_urn, title, body, created_at) VALUES ('urn:changeorg:starter:f5ae944c-8cd8-11eb-8dcd-0242ac130003', 'Sign for climate change', 'Lorem ipsum...', DATE('now', '-2 days'));
INSERT INTO petitions (starter_urn, title, body, created_at) VALUES ('urn:changeorg:starter:6757e68c-8ac4-11eb-8dcd-0242ac130003', 'Ban the Cruel Sale & Trade of Shark Fins', 'Lorem ipsum...', '2020-06-01 00:00:00');
INSERT INTO petitions (starter_urn, title, body, created_at) VALUES ('urn:changeorg:starter:ad922736-8cd9-11eb-8dcd-0242ac130003', 'Seatbelts for Canadian School Buses, Now!', 'Lorem ipsum...', DATE('now', '-3 days'));
INSERT INTO petitions (starter_urn, title, body, created_at) VALUES ('urn:changeorg:starter:c6e83ee8-151b-4ac0-8e4a-b0dcc11a7f0d', 'COVID-19 funding for Indigenous communities', 'Lorem ipsum...', DATE('now', '-4 days'));
INSERT INTO petitions (starter_urn, title, body, created_at) VALUES ('urn:changeorg:starter:b1da6920-8cd9-11eb-8dcd-0242ac130003', 'Safer Personal Protective Equipment (PPE) for NHS workers', 'Lorem ipsum...', DATE('now', '-5 days'));
INSERT INTO petitions (starter_urn, title, body, created_at) VALUES ('urn:changeorg:starter:b5f3eebe-8cd9-11eb-8dcd-0242ac130003', 'Cancer patients exempted from travel restrictions', 'Lorem ipsum...', DATE('now', '-6 days'));

INSERT INTO follows (user_id, starter_urn) VALUES (12, 'urn:changeorg:starter:6757e68c-8ac4-11eb-8dcd-0242ac130003');
INSERT INTO follows (user_id, starter_urn) VALUES (23, 'urn:changeorg:starter:6757e68c-8ac4-11eb-8dcd-0242ac130003');
INSERT INTO follows (user_id, starter_urn) VALUES (23, 'urn:changeorg:starter:f5ae944c-8cd8-11eb-8dcd-0242ac130003');
