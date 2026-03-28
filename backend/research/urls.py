from django.urls import path
from . import views

urlpatterns = [
    path('stats/', views.research_stats, name='research-stats'),
    path('services/', views.services_list, name='research-services'),
    path('biorepository/', views.biorepository_info, name='research-biorepository'),
    path('collaborations/', views.collaborations_list, name='research-collaborations'),
    path('quote/', views.submit_quote, name='research-quote'),
    path('newsletter/', views.newsletter_subscribe, name='research-newsletter'),
]
