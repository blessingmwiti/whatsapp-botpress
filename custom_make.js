let success = false;

const userData = {};

try {
    const response = await axios.post('', userData);
    success = true;
    console.log('Data successfully sent to make.com:', response.data);
} catch (error) {
    console.error('Error sending data to make.com:', error);
}