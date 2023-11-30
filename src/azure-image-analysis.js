
async function analyzeImage(imageUrl) {
  const subscriptionKey = 'YOUR_SUBSCRIPTION_KEY';
  const endpoint = 'YOUR_ENDPOINT';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subscriptionKey
    },
    body: JSON.stringify({
      url: imageUrl
    })
  };

  try {
    const response = await fetch(`${endpoint}/vision/v4.0/analyze`, requestOptions);
    const data = await response.json();
    console.log(data);
    // Process the analysis results here
  } catch (error) {
    console.error('Error analyzing image:', error);
  }
}
