from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.categories_list, name='catalog-categories'),
    path('tests/', views.tests_list, name='catalog-tests'),
    path('tests/<int:pk>/', views.test_detail, name='catalog-test-detail'),
]
