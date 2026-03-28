from rest_framework.decorators import api_view
from rest_framework.response import Response


MOCK_CATEGORIES = [
    {'id': 1, 'name': 'General Wellness', 'slug': 'general-wellness'},
    {'id': 2, 'name': 'Heart Health', 'slug': 'heart-health'},
    {'id': 3, 'name': 'Vitamins & Minerals', 'slug': 'vitamins-minerals'},
    {'id': 4, 'name': 'Kidney Health', 'slug': 'kidney-health'},
    {'id': 5, 'name': 'Infectious Disease', 'slug': 'infectious-disease'},
]

MOCK_TESTS = [
    {'id': 1, 'title': 'Complete Blood Count (CBC)', 'category': 1, 'category_name': 'General Wellness', 'description': 'Measures different parts of your blood, including RBC, WBC, and platelets.', 'price': '29.00', 'preparation': 'No fasting required', 'sample_type': 'Blood', 'turnaround': '24h', 'icon_name': 'Droplet'},
    {'id': 2, 'title': 'Advanced Lipid Panel', 'category': 2, 'category_name': 'Heart Health', 'description': 'Checks cholesterol and triglycerides to assess cardiovascular risk.', 'price': '49.00', 'preparation': 'Fasting: 10-12 hrs', 'sample_type': 'Blood', 'turnaround': '24h', 'icon_name': 'HeartPulse'},
    {'id': 3, 'title': 'Comprehensive Metabolic Panel', 'category': 1, 'category_name': 'General Wellness', 'description': "Provides information about your body's chemical balance and metabolism.", 'price': '59.00', 'preparation': 'Fasting: 8-10 hrs', 'sample_type': 'Blood', 'turnaround': '24h', 'icon_name': 'Activity'},
    {'id': 4, 'title': 'Vitamin D Profile', 'category': 3, 'category_name': 'Vitamins & Minerals', 'description': 'Important for bone health, immune function, and overall wellness.', 'price': '39.00', 'preparation': 'No fasting required', 'sample_type': 'Blood', 'turnaround': '48h', 'icon_name': 'Bone'},
    {'id': 5, 'title': 'Urinalysis Complete', 'category': 4, 'category_name': 'Kidney Health', 'description': 'Evaluates physical, chemical, and microscopic properties of urine.', 'price': '35.00', 'preparation': 'Morning sample preferred', 'sample_type': 'Urine', 'turnaround': '24h', 'icon_name': 'Activity'},
    {'id': 6, 'title': 'Throat Culture Swab', 'category': 5, 'category_name': 'Infectious Disease', 'description': 'Detects the presence of bacterial or fungal infections in the throat.', 'price': '45.00', 'preparation': 'No food 1 hr prior', 'sample_type': 'Swab', 'turnaround': '48h', 'icon_name': 'FileWarning'},
]


@api_view(['GET'])
def categories_list(request):
    """GET /api/catalog/categories/ — List test categories (mock data)."""
    return Response(MOCK_CATEGORIES)


@api_view(['GET'])
def tests_list(request):
    """GET /api/catalog/tests/ — List tests with optional filtering (mock data)."""
    results = MOCK_TESTS[:]

    search = request.query_params.get('search')
    if search:
        results = [t for t in results if search.lower() in t['title'].lower()]

    category = request.query_params.get('category')
    if category and category != 'All':
        results = [t for t in results if t['category_name'] == category]

    sample_type = request.query_params.get('sample_type')
    if sample_type and sample_type != 'All':
        results = [t for t in results if t['sample_type'] == sample_type]

    turnaround = request.query_params.get('turnaround')
    if turnaround and turnaround != 'All':
        results = [t for t in results if t['turnaround'] == turnaround]

    max_price = request.query_params.get('max_price')
    if max_price:
        results = [t for t in results if float(t['price']) <= float(max_price)]

    return Response(results)


@api_view(['GET'])
def test_detail(request, pk):
    """GET /api/catalog/tests/{id}/ — Single test detail (mock data)."""
    test = next((t for t in MOCK_TESTS if t['id'] == pk), None)
    if test:
        return Response(test)
    return Response({'error': 'Test not found'}, status=404)
