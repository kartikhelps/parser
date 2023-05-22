const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api', async (req, res) => {
    const apiConfig = req.body.apiConfig;
    const userParams = req.body.userParams;
    try {
      const response = await callApi(apiConfig, userParams);
      console.log(response)
      res.json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error calling the API', error: error.message });
    }
});

const callApi = async (apiConfig, userParams) => {

    const { apiName, type, baseURL, params, query, post, varToReqFieldMap, resToVarMap, reqHeaders, resHeaders } = apiConfig;

    const url = new URL(baseURL);
    Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    const axiosConfig = {
        method: type.toLowerCase(),
        url: url.toString(),
        headers: reqHeaders,
    };

    if (type === 'POST' || type === 'PUT') {
        axiosConfig.data = post === 'json' ? userParams : new URLSearchParams(userParams).toString();
        if (post === 'form') {
            axiosConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
    }


  const response = await axios(axiosConfig);
    return response.data;
};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


