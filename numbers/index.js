const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`App running port ${PORT}`);
});

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

app.get('/numbers', async (req, res) => {
    const urls = req.query.url;
    
    if (!urls || !Array.isArray(urls)) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const validUrls = urls.filter(url => isValidUrl(url));

    const responsePromises = validUrls.map(async url => {
        try {
            const response = await axios.get(url, { timeout: 500 });
            return response.data.numbers;
        } catch (error) {
            console.error(`Error fetching data from ${url}: ${error.message}`);
            return [];
        }
    });

    try {
        const results = await Promise.all(responsePromises);
        const allNumbers = results.reduce((acc, numbers) => acc.concat(numbers), []);
        const uniqueSortedNumbers = Array.from(new Set(allNumbers)).sort((a, b) => a - b);
        
        return res.json({ numbers: uniqueSortedNumbers });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});
