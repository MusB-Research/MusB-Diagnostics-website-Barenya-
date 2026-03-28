from rest_framework.decorators import api_view
from rest_framework.response import Response


MOCK_OFFERS = [
    {
        'id': 1, 'title': 'Essential Vitamin Profile', 'offer_type': 'Weekly',
        'category': 'Vitamins', 'original_price': '120.00', 'discounted_price': '69.00',
        'includes': ['Vitamin D total', 'Vitamin B12', 'Iron Panel'],
        'time_left': '3d 14h 22m',
    },
    {
        'id': 2, 'title': "Complete Men's/Women's Health", 'offer_type': 'Monthly',
        'category': 'Metabolic', 'original_price': '250.00', 'discounted_price': '149.00',
        'includes': ['Full Hormone Panel', 'Comprehensive Metabolic', 'CBC & Lipid Profile'],
        'time_left': 'Ends on Mar 31',
    },
    {
        'id': 3, 'title': 'Allergy & Immunity Panel', 'offer_type': 'Seasonal',
        'category': 'Vitamins', 'original_price': '180.00', 'discounted_price': '99.00',
        'includes': ['Environmental Allergens', 'IgG / IgE markers', 'CRP Inflammation'],
        'time_left': 'Limited Time',
    },
]


@api_view(['GET'])
def offers_list(request):
    """GET /api/offers/ — List active offers with optional filtering (mock data)."""
    results = MOCK_OFFERS[:]

    offer_type = request.query_params.get('type')
    if offer_type and offer_type != 'All':
        results = [o for o in results if o['offer_type'] == offer_type]

    category = request.query_params.get('category')
    if category and category != 'All':
        results = [o for o in results if o['category'] == category]

    return Response(results)


@api_view(['GET'])
def offer_detail(request, pk):
    """GET /api/offers/{id}/ — Single offer detail (mock data)."""
    offer = next((o for o in MOCK_OFFERS if o['id'] == pk), None)
    if offer:
        return Response(offer)
    return Response({'error': 'Offer not found'}, status=404)
