from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET'])
def services_list(request):
    """GET /api/research/services/ — Study support services (mock data)."""
    data = [
        {'id': 1, 'title': 'Sample Collection & Processing', 'description': 'Multi-site specimen collection with standardized processing protocols.', 'icon_name': 'FlaskConical'},
        {'id': 2, 'title': 'Cold Chain Logistics', 'description': 'Temperature-controlled shipping and chain-of-custody documentation.', 'icon_name': 'Truck'},
        {'id': 3, 'title': 'Data Management', 'description': 'Secure data capture, EDC integration, and regulatory-compliant reporting.', 'icon_name': 'Database'},
        {'id': 4, 'title': 'Regulatory Compliance', 'description': 'GCP, GLP, and CLIA-compliant testing workflows for clinical trials.', 'icon_name': 'ShieldCheck'},
    ]
    return Response(data)


@api_view(['GET'])
def biorepository_info(request):
    """GET /api/research/biorepository/ — Biorepository stats (mock data)."""
    data = [
        {'id': 1, 'stat_label': 'Uptime & Reliability', 'stat_value': '99.99%', 'description': 'Redundant power and monitoring systems.'},
        {'id': 2, 'stat_label': 'Sample Capacity', 'stat_value': '500K+', 'description': 'Ultra-low temperature storage for biospecimens.'},
        {'id': 3, 'stat_label': 'Active Studies', 'stat_value': '120+', 'description': 'Concurrent clinical trial support.'},
        {'id': 4, 'stat_label': 'Turnaround', 'stat_value': '< 24h', 'description': 'Expedited processing for priority studies.'},
    ]
    return Response(data)


@api_view(['GET'])
def research_stats(request):
    """GET /api/research/stats/ — High-level lab stats for ResearchCentralLab page."""
    data = {
        'reliability': '99.999%',
        'capacity': '10M+ Samples',
    }
    return Response(data)


@api_view(['GET'])
def collaborations_list(request):
    """GET /api/research/collaborations/ — Academic collaboration info (mock data)."""
    data = [
        {'id': 1, 'title': 'University Partnerships', 'description': 'Joint research programs with leading academic institutions.', 'icon_name': 'GraduationCap'},
        {'id': 2, 'title': 'Publication Support', 'description': 'Assistance with manuscript preparation and peer review submissions.', 'icon_name': 'BookOpen'},
        {'id': 3, 'title': 'Grant Collaboration', 'description': 'Sub-award capable laboratory partner for NIH and NSF funded projects.', 'icon_name': 'Award'},
    ]
    return Response(data)


@api_view(['POST'])
def submit_quote(request):
    """POST /api/research/quote/ — Submit a research proposal (mock)."""
    data = request.data
    pi_name = data.get('pi_name')
    email = data.get('email')
    overview = data.get('overview')

    if not all([pi_name, email, overview]):
        return Response(
            {'error': 'Missing required fields: pi_name, email, or overview.'},
            status=status.HTTP_400_BAD_REQUEST,
        )
    return Response(
        {'message': 'Your proposal request has been submitted. Our research team will review it shortly.'},
        status=status.HTTP_201_CREATED,
    )


@api_view(['POST'])
def newsletter_subscribe(request):
    """POST /api/research/newsletter/ — Subscribe to research newsletter (mock)."""
    email = request.data.get('email')
    if not email:
        return Response({'error': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)
    return Response(
        {'message': 'Successfully subscribed to the research newsletter!'},
        status=status.HTTP_201_CREATED,
    )
