import axios from 'axios';

// Define your API base URL
const BASE_URL = 'https://backend.overseas.ai/api/';
// const BASE_URL = "https://test.overseas.ai/api/"; // test api
// Function to get hra list
export const getHraList = async access_token => {
  try {
    const response = await axios.get(BASE_URL + 'get-all-companies');
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export const createJobByHr = async (access_token, formData) => {
  try {
    const response = await axios.post(BASE_URL + 'create-job', formData, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
// Function to get job by hra
export const getJobByHra = async params => {
  try {
    const response = await axios.get(
      BASE_URL + 'jobs-posted-by-hra/' + params.cmpID,
      {
        headers: {
          Authorization: `Bearer ${params.access_token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const getHraDetails = async id => {
  try {
    const response = await axios.get(
      BASE_URL + 'company/' + id,
      {
        headers: {
          // Authorization: `Bearer ${params.access_token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const getFollowerCount = async params => {
  try {
    const response = await axios.get(
      BASE_URL + 'follower-count/' + params.cmpId,
      {
        headers: {
          Authorization: `Bearer ${params.access_token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const handleFollow = async params => {
  try {
    const response = await axios.post(
      BASE_URL + 'follow-unfollow-hra/' + params.cmpId,
      {},
      {
        headers: {
          Authorization: `Bearer ${params.access_token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const getReviewOfHra = async (cmpId, access_token) => {
  try {
    const response = await axios.post(
      BASE_URL + 'get-rate-review-hra',
      {cmpId},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
export const addReviewForHra = async (formData, access_token) => {
  try {
    const response = await axios.post(BASE_URL + 'rate-review-hra', formData, {
      headers: {
        'Content-Type': `multipart/form-data`,
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error.response.data.msg);
    throw error;
  }
};

export const editReviewForHra = async (formData, access_token) => {
  try {
    const response = await axios.post(BASE_URL + 'edit-rate-review-hra', formData, {
      headers: {
        'Content-Type': `multipart/form-data`,
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error.response?.data);
    throw error;
  }
};
export const getCompanyHrList = async access_token => {
  try {
    const response = await axios.get(BASE_URL + 'get-hr-details', {
      headers: {
        'Content-Type': `multipart/form-data`,
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const hraPostedJobs = async (access_token, formData) => {
  try {
    const response = await axios.post(BASE_URL + 'all-created-jobs',formData, {
      headers: {
        'Content-Type': `multipart/form-data`,
        Authorization: `Bearer ${access_token}`,
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
