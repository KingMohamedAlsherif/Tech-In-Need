import fetch from 'node-fetch';

export async function handler(event) {
  const payload = JSON.parse(event.body);
  const { email, skills } = payload.data;

  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_NAME = 'Submissions';

  const body = {
    records: [
      {
        fields: {
          Email: email,
          Skills: skills,
        },
      },
    ],
  };

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) throw new Error('Failed to save to Airtable');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Submission saved successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}