from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def hero_content(request):
    """GET /api/home/hero/ — Hero section content (mock data)."""
    data = [{
        'id': 1,
        'badge_text': 'Next-Gen Diagnostics',
        'title': 'Affordable Lab Testing + Mobile Collections + Research-Grade Quality',
        'subtitle': 'Self-pay, employer plans, physicians, facilities, research & biomarker validation.',
    }]
    return Response(data)


@api_view(['GET'])
def services_list(request):
    """GET /api/home/services/ — 'Choose Your Path' service cards (mock data)."""
    data = [
        {'id': 1, 'title': 'Self-Pay Patients', 'description': 'Direct access to lab testing with transparent pricing.', 'icon_name': 'User', 'link': '/self-pay-lab-tests', 'features': ['Test Catalog & Panels', 'Annual Health Checkups', "Women's & Metabolic Health", 'Thyroid & STD Testing']},
        {'id': 2, 'title': 'Employers & HR', 'description': 'Corporate wellness and pre-employment screening.', 'icon_name': 'Briefcase', 'link': '/employer-health-program', 'features': ['4-Tier Plan Comparison', 'Onsite Collections (5+ rule)', 'Executive & Family Credits', 'Retention Benefits']},
        {'id': 3, 'title': 'Physicians', 'description': 'Partner with us for reliable patient diagnostics.', 'icon_name': 'Stethoscope', 'link': '/physicians', 'features': ['How to Order & Custom Panels', 'Automated Results Delivery', 'LIS Integration', 'Physician Portal Login']},
        {'id': 4, 'title': 'Assisted Living', 'description': 'On-site laboratory services for your facilities.', 'icon_name': 'Home', 'link': '/assisted-living-testing', 'features': ['Recurring Rounds Scheduling', 'Roster Management', 'Mobile Collection Workflow', 'LIS Routing & Portal']},
        {'id': 5, 'title': 'Mobile Phlebotomy', 'description': 'We bring the lab to your home or office.', 'icon_name': 'Truck', 'link': '/mobile-phlebotomy', 'features': ['Service Area Map', 'Pricing & Travel Fees', 'What to Expect', 'Book Home Draw']},
        {'id': 6, 'title': 'Non-Profits', 'description': 'Special programs and discounts for community orgs.', 'icon_name': 'HeartHandshake', 'link': '/community-programs', 'features': ['Sponsored Screening Events', 'Partnership Application', 'Affiliate Fundraising Tie-ins']},
        {'id': 7, 'title': 'Diagnostics Validation', 'description': 'Early biomarker validation and testing.', 'icon_name': 'Microscope', 'link': '/early-diagnostics', 'features': ['Feasibility & Analytical Testing', 'Pilot Clinical Testing Pathway', 'Submit NDA & Technology', 'Project Tracker Portal']},
        {'id': 8, 'title': 'Research Central Lab', 'description': 'Comprehensive clinical trial lab services.', 'icon_name': 'Dna', 'link': '/research-central-lab', 'features': ['Collection & Shipping Support', 'Biorepository Tracking', 'Academic Collaboration', 'Request Quote Portal']},
    ]
    return Response(data)


@api_view(['GET'])
def testimonials_list(request):
    """GET /api/home/testimonials/ — Customer testimonials (mock data)."""
    data = [{
        'id': 1,
        'author_name': 'Sarah Jenkins',
        'content': 'The mobile phlebotomy service is a game changer! The nurse arrived on time, was extremely professional, and I got my results the next morning without ever leaving my house.',
        'rating': 5,
        'is_featured': True,
    }]
    return Response(data)


@api_view(['GET'])
def popular_panels_list(request):
    """GET /api/home/popular-panels/ — Popular test panels (mock data)."""
    data = [
        {'id': 1, 'name': 'Annual Health Check', 'icon_name': 'Activity', 'price': '150.00', 'link': '/tests'},
        {'id': 2, 'name': 'Comprehensive Metabolic', 'icon_name': 'Droplets', 'price': '45.00', 'link': '/tests'},
        {'id': 3, 'name': 'Advanced Thyroid Panel', 'icon_name': 'AlertCircle', 'price': '85.00', 'link': '/tests'},
        {'id': 4, 'name': "Women's Health Profile", 'icon_name': 'Heart', 'price': '199.00', 'link': '/tests'},
        {'id': 5, 'name': 'Complete STD Screening', 'icon_name': 'ShieldCheck', 'price': '130.00', 'link': '/tests'},
        {'id': 6, 'name': 'Nutrients & Vitamins', 'icon_name': 'Zap', 'price': '110.00', 'link': '/tests'},
    ]
    return Response(data)


@api_view(['POST'])
def newsletter_subscribe(request):
    """POST /api/home/newsletter/ — Subscribe to newsletter (mock)."""
    email = request.data.get('email')
    if not email:
        return Response({'error': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)
    # In production, this would save to DB
    return Response(
        {'message': 'Successfully subscribed to the newsletter!'},
        status=status.HTTP_201_CREATED,
    )
