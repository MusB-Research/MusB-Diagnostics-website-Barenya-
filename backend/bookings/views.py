from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def create_booking(request):
    """POST /api/bookings/ — Create a new appointment (mock)."""
    # Map frontend camelCase to backend snake_case or just use what fits
    data = request.data
    full_name = data.get('fullName') or data.get('full_name')
    phone = data.get('phone')
    email = data.get('email')
    test_id = data.get('testId') or data.get('test_id')
    date = data.get('date') or data.get('preferred_date')
    time_slot = data.get('timeSlot') or data.get('preferred_time')
    visit_type = data.get('visitType') or data.get('visit_type')

    if not all([full_name, phone, email, test_id, date, time_slot, visit_type]):
        return Response(
            {'error': 'Missing required fields. Please fill out all booking details.'},
            status=status.HTTP_400_BAD_REQUEST,
        )


    return Response(
        {
            'message': 'Booking confirmed! Our team will contact you shortly.',
            'booking': {
                'id': 1,
                **{field: request.data[field] for field in required_fields},
                'status': 'pending',
            },
        },
        status=status.HTTP_201_CREATED,
    )


@api_view(['GET'])
def bookable_tests(request):
    """GET /api/bookings/tests/ — Available tests for booking dropdown (mock data)."""
    tests = [
        {'value': 'cbc', 'label': 'Complete Blood Count (CBC)'},
        {'value': 'lipid', 'label': 'Lipid Panel'},
        {'value': 'cmp', 'label': 'Comprehensive Metabolic Panel'},
        {'value': 'vitamin-d', 'label': 'Vitamin D Profile'},
        {'value': 'thyroid', 'label': 'Thyroid Function Test'},
        {'value': 'pkg-1', 'label': 'Comprehensive Well-Man Profile'},
        {'value': 'pkg-2', 'label': 'Complete Well-Woman Profile'},
    ]
    return Response(tests)
