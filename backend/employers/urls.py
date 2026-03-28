from django.urls import path
from . import views

urlpatterns = [
    path('plans/', views.plans_list, name='employers-plans'),
    path('comparison/', views.comparison_list, name='employers-comparison'),
]
