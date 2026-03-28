from django.urls import path
from . import views

urlpatterns = [
    path('', views.offers_list, name='offers-list'),
    path('<int:pk>/', views.offer_detail, name='offers-detail'),
]
