// pages/[slug].js

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ImagePage = ({ postData }) => {
  const router = useRouter();
  const { slug } = router.query;

  // State to store the base64
  const [base64, setBase64] = useState();

  useEffect(() => {
    // Assuming postData is the data from the server
    if (postData) {
      setBase64(postData.imageBase64);
    }
  }, [postData]);

  // Your other code...

  return (
    <main>
      {/* Your page content */}
    </main>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;

  // Make a server-side POST request using slug as a variable
  const url = 'https://bi5onbo6tl.execute-api.us-west-2.amazonaws.com/prod/rekognition';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add other headers if needed
    },
    body: JSON.stringify({
      imageBase64: slug.substring(23), // Assuming slug is the base64 string
      // Add other parameters as needed
    }),
  });

  const postData = await response.json();

  // Pass postData to the page component as a prop
  return {
    props: {
      postData,
    },
  };
}

export default sendurlPage;
