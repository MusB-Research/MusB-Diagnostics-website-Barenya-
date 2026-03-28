"""
WSGI config for musb_backend project.
"""

import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'musb_backend.settings')
application = get_wsgi_application()
