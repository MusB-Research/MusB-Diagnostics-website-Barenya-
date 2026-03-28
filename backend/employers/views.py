from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def plans_list(request):
    """GET /api/employers/plans/ — Corporate plan tiers (mock data)."""
    data = [
        {
            'id': 1, 'name': 'Annual Coverage',
            'price_display': '$108 - $178', 'price_suffix': '/ employee',
            'description': 'Annual allotment per employee for covered diagnostic testing.',
            'is_featured': False, 'tag_label': '', 'icon_name': 'Shield',
            'features': [
                {'id': 1, 'text': 'Annual allotment per employee'},
                {'id': 2, 'text': 'Onsite or in-clinic collections'},
                {'id': 3, 'text': 'Pre-employment & DOT testing'},
                {'id': 4, 'text': 'Basic health screenings'},
            ],
        },
        {
            'id': 2, 'name': 'Match Program',
            'price_display': 'Co-Pay', 'price_suffix': 'Ledger tracked',
            'description': 'Employer matches a portion of employee lab test costs.',
            'is_featured': True, 'tag_label': 'Most Popular', 'icon_name': 'Handshake',
            'features': [
                {'id': 5, 'text': 'Employer-employee cost sharing'},
                {'id': 6, 'text': 'Flexible match ratios'},
                {'id': 7, 'text': 'Executive health credits'},
                {'id': 8, 'text': 'Family member add-ons'},
            ],
        },
        {
            'id': 3, 'name': 'Free Membership',
            'price_display': '$0', 'price_suffix': '/ employee',
            'description': 'Employees get self-pay pricing with no employer cost.',
            'is_featured': False, 'tag_label': '', 'icon_name': 'Gift',
            'features': [
                {'id': 9, 'text': 'Zero employer cost'},
                {'id': 10, 'text': 'Self-pay discounted pricing'},
                {'id': 11, 'text': 'Mobile phlebotomy access'},
                {'id': 12, 'text': 'Online results portal'},
            ],
        },
        {
            'id': 4, 'name': 'Medical Advice',
            'price_display': 'Custom', 'price_suffix': '',
            'description': 'White-glove concierge medical advisory for executives.',
            'is_featured': False, 'tag_label': '', 'icon_name': 'Stethoscope',
            'features': [
                {'id': 13, 'text': 'Dedicated medical advisor'},
                {'id': 14, 'text': 'Personalized health plans'},
                {'id': 15, 'text': 'Priority scheduling'},
                {'id': 16, 'text': '24/7 telemedicine access'},
            ],
        },
    ]
    return Response(data)


@api_view(['GET'])
def comparison_list(request):
    """GET /api/employers/comparison/ — Feature comparison matrix (mock data)."""
    data = [
        {'id': 1, 'feature_name': 'Annual Health Screening', 'annual_coverage': True, 'match_program': True, 'free_membership': False, 'medical_advice': True},
        {'id': 2, 'feature_name': 'Onsite Collections (5+ employees)', 'annual_coverage': True, 'match_program': True, 'free_membership': False, 'medical_advice': True},
        {'id': 3, 'feature_name': 'Pre-Employment & DOT Testing', 'annual_coverage': True, 'match_program': True, 'free_membership': False, 'medical_advice': True},
        {'id': 4, 'feature_name': 'Executive Health Credits', 'annual_coverage': False, 'match_program': True, 'free_membership': False, 'medical_advice': True},
        {'id': 5, 'feature_name': 'Family Member Add-ons', 'annual_coverage': False, 'match_program': True, 'free_membership': False, 'medical_advice': True},
        {'id': 6, 'feature_name': 'Dedicated Medical Advisor', 'annual_coverage': False, 'match_program': False, 'free_membership': False, 'medical_advice': True},
        {'id': 7, 'feature_name': 'Mobile Phlebotomy Access', 'annual_coverage': True, 'match_program': True, 'free_membership': True, 'medical_advice': True},
        {'id': 8, 'feature_name': 'Online Results Portal', 'annual_coverage': True, 'match_program': True, 'free_membership': True, 'medical_advice': True},
    ]
    return Response(data)
