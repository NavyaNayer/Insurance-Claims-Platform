import type { Load } from '@sveltejs/kit';

interface Policy {
  id: number;
  policy_number: string;
  provider: string;
  coverage_details: string;
}

export const load: Load = async ({ fetch, url }) => {
  const baseUrl = url.origin; // Gets the base URL for your API
  try {
    console.log('Fetching data from:', `${baseUrl}/api/policies`);
    const response = await fetch(`${baseUrl}/api/policies`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const policies = await response.json();
    
    console.log('Data fetched:', policies.policies);

    return {
        
          policies: policies.policies || [] // Return an empty array if there's an error
        
      };
      
    }
  catch (error) {
    console.error('Error fetching policies:', error);
    return {
      props: {
        policies: [] // Return an empty array if there's an error
      }
    };
  }
};
