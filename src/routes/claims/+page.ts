import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, url }) => {
  console.log('in load of claims');
    const baseUrl = url.origin; // Gets the base URL for your API
    try {
      console.log('Fetching data from:', `${baseUrl}/api/claims`);
      const response = await fetch(`${baseUrl}/api/claims`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('response=',response);
      const claims = await response.json();
      console.log('claims=',claims);
      
      console.log('Data fetched:', claims);
  
      return {
          
        claims: claims || [] // Return an empty array if there's an error
          
        };
        
      }
    catch (error) {
      console.error('Error fetching claims:', error);
      return {
        props: {
          claims: [] // Return an empty array if there's an error
        }
      };
    }
  };
  
