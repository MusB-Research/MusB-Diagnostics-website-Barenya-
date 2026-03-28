/**
 * API Service — Centralized HTTP utility for communicating with the Django backend.
 * All API calls go through this file. When the database is connected later,
 * no changes will be needed here — the backend endpoints stay the same.
 */

const API_BASE = '/api';

async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    return { data, ok: response.ok, status: response.status };
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);
    return { data: null, ok: false, status: 0, error };
  }
}

// ==================== HOME ====================
export const homeAPI = {
  getHero: () => request('/home/hero/'),
  getServices: () => request('/home/services/'),
  getTestimonials: () => request('/home/testimonials/'),
  getPopularPanels: () => request('/home/popular-panels/'),
  subscribeNewsletter: (email) =>
    request('/home/newsletter/', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),
};

// ==================== CATALOG ====================
export const catalogAPI = {
  getCategories: () => request('/catalog/categories/'),
  getTests: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/catalog/tests/${query ? '?' + query : ''}`);
  },
  getTestById: (id) => request(`/catalog/tests/${id}/`),
};

// ==================== OFFERS ====================
export const offersAPI = {
  getOffers: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/offers/${query ? '?' + query : ''}`);
  },
  getOfferById: (id) => request(`/offers/${id}/`),
};

// ==================== BOOKINGS ====================
export const bookingsAPI = {
  createBooking: (bookingData) =>
    request('/bookings/', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    }),
  getBookableTests: () => request('/bookings/tests/'),
};

// ==================== EMPLOYERS ====================
export const employersAPI = {
  getPlans: () => request('/employers/plans/'),
  getComparison: () => request('/employers/comparison/'),
};

// ==================== RESEARCH ====================
export const researchAPI = {
  getStats: () => request('/research/stats/'),
  getServices: () => request('/research/services/'),
  getBiorepository: () => request('/research/biorepository/'),
  getCollaborations: () => request('/research/collaborations/'),
  submitQuote: (quoteData) =>
    request('/research/quote/', {
      method: 'POST',
      body: JSON.stringify(quoteData),
    }),
  subscribeNewsletter: (email) =>
    request('/research/newsletter/', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),
};
