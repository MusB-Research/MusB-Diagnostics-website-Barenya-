from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_booking, name='bookings-create'),
    path('tests/', views.bookable_tests, name='bookings-tests'),
]
